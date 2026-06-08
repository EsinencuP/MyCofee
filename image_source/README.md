# image_source

Raw source assets for the `MyCofee` project.

Current status:

- This folder contains brand/reference visuals and print/social mockups.
- It does not yet contain exported website screens for the design approval audit.
- Do not import files from this folder directly into production frontend code.

Required next step:

- Add exported website screens from Figma here or into `image_source/references/`.
- Keep original vectors (`.ai`, `.eps`) here as source-only files.
- Generate optimized website assets separately into the future production folder such as `public/assets/images/`.

Rules:

- Keep originals untouched.
- Track every asset in `image_source/_manifest/asset-inventory.csv`.
- Record ownership/license status before public use.
- Keep text content as HTML in the website, not baked into images.
