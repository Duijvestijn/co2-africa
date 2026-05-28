# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Cloudflare Pages
This site uses `output: "export"` for Cloudflare Pages static hosting.
- No server-side features (no `getServerSideProps`, no API routes)
- `params` in `[lang]` routes must be awaited: `const { lang } = await params`
- Build: `npm run build` → outputs to `out/`
- Cloudflare Pages build command: `npm run build`, output dir: `out`
