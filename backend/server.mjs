import Fastify from "fastify";
import { createReadStream, existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const frontendDir = normalize(join(__dirname, "..", "frontend"));
const contentPath = normalize(join(__dirname, "site-content.json"));
const port = Number(process.env.PORT || 4187);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const safePath = (urlPath) => {
  const cleanPath = urlPath === "/" ? "/index.html" : urlPath;
  const target = normalize(join(frontendDir, cleanPath));
  if (!target.startsWith(frontendDir)) {
    return null;
  }
  return target;
};

const app = Fastify({
  logger: false,
});

const sendStatic = async (urlPath, reply) => {
  const filePath = safePath(urlPath);
  if (!filePath || !existsSync(filePath)) {
    reply.code(404).type("text/plain; charset=utf-8").send("Not found");
    return;
  }

  const contentType = mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream";
  reply.type(contentType);
  return reply.send(createReadStream(filePath));
};

app.get("/api/health", async () => {
  return { ok: true, service: "mycoffee-backend", adapter: "fastify" };
});

app.get("/api/site-content", async (request, reply) => {
  try {
    const raw = await readFile(contentPath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    return reply.code(500).send({
      ok: false,
      error: "content_read_failed",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.get("/", async (request, reply) => {
  return sendStatic("/", reply);
});

app.get("/*", async (request, reply) => {
  return sendStatic(request.raw.url || "/", reply);
});

app.listen({ port, host: "127.0.0.1" }).then(() => {
  console.log(`MyCoffee backend running at http://127.0.0.1:${port}`);
});
