# syntax=docker/dockerfile:1
# Shorekeeper Cascade Client — Production Multi-Stage Dockerfile
# Stage 1: Build Svelte 5 static assets with pnpm & node:22-alpine
# Stage 2: Serve static files with lean nginx:alpine-slim (< 25MB total image)

FROM node:22-alpine AS builder

WORKDIR /app

# Enable corepack and prepare pnpm
RUN corepack enable && corepack prepare pnpm@9.15.9 --activate

# Copy dependency manifests
COPY client/package.json client/pnpm-lock.yaml ./client/

WORKDIR /app/client
RUN pnpm install --frozen-lockfile

# Copy client source files
COPY client/ ./

# Build production bundle
RUN pnpm run build

# --- Runtime Stage ---
FROM nginx:alpine-slim AS runtime

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/client/dist /usr/share/nginx/html

# Expose internal port
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
