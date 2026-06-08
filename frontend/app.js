const navToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const filterButtons = document.querySelectorAll(".filter-chip");
const menuGrid = document.querySelector("#menu-grid");
const featureGrid = document.querySelector("#feature-grid");
const contactsGrid = document.querySelector("#contacts-grid");

const state = {
  activeFilter: "all",
  menu: [],
};

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 820 && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

const fillText = (key, value) => {
  const node = document.querySelector(`[data-content="${key}"]`);
  if (node && value) {
    node.textContent = value;
  }
};

const renderMenu = () => {
  if (!menuGrid) return;
  menuGrid.innerHTML = "";

  const items = state.menu.filter((item) => {
    return state.activeFilter === "all" || item.category === state.activeFilter;
  });

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.dataset.category = item.category;
    card.innerHTML = `
      <span class="menu-tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <strong>${item.price}</strong>
    `;
    menuGrid.appendChild(card);
  });
};

const renderFeatures = (features) => {
  if (!featureGrid) return;
  featureGrid.innerHTML = "";
  features.forEach((item) => {
    const card = document.createElement("article");
    card.className = "feature-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    featureGrid.appendChild(card);
  });
};

const renderContacts = (contacts) => {
  if (!contactsGrid) return;
  contactsGrid.innerHTML = "";
  contacts.forEach((item) => {
    const card = document.createElement("article");
    card.className = "contact-card";
    const lines = item.lines
      .map((line) => {
        if (item.href) {
          const isExternal = item.href.startsWith("http");
          const attrs = isExternal ? ' target="_blank" rel="noreferrer"' : "";
          return `<p><a href="${item.href}"${attrs}>${line}</a></p>`;
        }
        return `<p>${line}</p>`;
      })
      .join("");

    card.innerHTML = `
      <h3>${item.title}</h3>
      ${lines}
    `;
    contactsGrid.appendChild(card);
  });
};

const loadSiteContent = async () => {
  try {
    const response = await fetch("/api/site-content");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    fillText("hero-eyebrow", data.hero?.eyebrow);
    fillText("hero-title", data.hero?.title);
    fillText("hero-script", data.hero?.script);
    fillText("hero-copy", data.hero?.copy);
    fillText("hero-note", data.hero?.note);
    fillText("map-address", data.map?.address);
    fillText("map-note", data.map?.note);

    state.menu = Array.isArray(data.menu) ? data.menu : [];
    renderMenu();
    renderFeatures(Array.isArray(data.features) ? data.features : []);
    renderContacts(Array.isArray(data.contacts) ? data.contacts : []);
  } catch (error) {
    console.error("Failed to load site content", error);
  }
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    state.activeFilter = filter;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    renderMenu();
  });
});

loadSiteContent();
