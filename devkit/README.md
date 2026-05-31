# devkit — local development tooling

**Dev-only.** Nothing in this folder is used in production. The live site is a
static [Astro](https://astro.build/) build deployed to GitHub Pages by
[`../.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) — no Docker,
no server. This kit just lets you run the dev server with hot reload in a
container, so you don't need Node installed locally.

## Quick start

From this `devkit/` folder:

```bash
docker compose up            # build + start -> http://localhost:4321
```

Edit files in the repo as usual; changes hot-reload in the browser.

```bash
docker compose down          # stop the container
```

## Common tasks

| Task | Command (run from `devkit/`) |
| --- | --- |
| Start the dev server | `docker compose up` |
| Rebuild after editing `package.json` | `docker compose up --build` |
| Clean reinstall of dependencies | `docker compose down -v && docker compose up --build` |
| Run a one-off command | `docker compose run --rm dev npm run build` |
| Open a shell in the container | `docker compose run --rm dev bash` |

## How it works

- **Build context** is the repo root (`..`); this `devkit/` folder is ignored by
  the Astro build, so it never affects the deployed site.
- The repo is **bind-mounted** into the container for live editing, while
  `node_modules` lives in a **named volume** (`portfolio_node_modules`) so the
  host's (absent) `node_modules` doesn't shadow the container's install.
- `CHOKIDAR_USEPOLLING=true` makes file watching reliable inside Docker on
  macOS/Windows.
- The server binds to `0.0.0.0` and is published on host port **4321**.

## Notes

- Dependencies are cached in the named volume. If they get out of sync after a
  `package.json` change, do a clean reinstall (`docker compose down -v && docker compose up --build`).
- This requires Docker Desktop (or any Docker engine with Compose v2).
