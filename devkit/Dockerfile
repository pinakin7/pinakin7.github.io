# ---------------------------------------------------------------------------
# DEVELOPMENT-ONLY image for the Astro portfolio.
#
# This is NOT used in production. Production is a static site built and
# deployed to GitHub Pages by .github/workflows/deploy.yml — no container,
# no server. This image only exists so you can run the local dev server
# (with hot reload) without installing Node on your machine.
# ---------------------------------------------------------------------------
FROM node:20-bookworm-slim

WORKDIR /app

# Install dependencies first for better layer caching.
# Source is bind-mounted at runtime (see devkit/docker-compose.yml); node_modules
# lives in a named volume so the host never shadows the container's install.
COPY package*.json ./
RUN npm install

# Bring in the rest so the image is usable standalone (`docker run`) too.
COPY . .

# Astro dev server default port.
EXPOSE 4321

# Bind to 0.0.0.0 so the server is reachable from the host.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
