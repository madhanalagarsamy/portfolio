# 🚢 Production Deployment Runbook — Madhan Alagarsamy Portfolio

This runbook provides step-by-step procedures for deploying, managing, and operating the **Madhan Alagarsamy Technical Portfolio & Security Research Platform** across cloud, containerized, and bare-metal environments.

---

## 📑 Table of Contents

- [1. Production Architecture Overview](#1-production-architecture-overview)
- [2. Environment Variables](#2-environment-variables)
- [3. Option A: Vercel Edge Deployment (Recommended)](#3-option-a-vercel-edge-deployment-recommended)
  - [3.1 Initial Setup & Git Integration](#31-initial-setup--git-integration)
  - [3.2 Custom Domain & DNS Records](#32-custom-domain--dns-records)
  - [3.3 Zero-Downtime Atomic Rollouts](#33-zero-downtime-atomic-rollouts)
- [4. Option B: Docker Containerized Deployment](#4-option-b-docker-containerized-deployment)
  - [4.1 Multi-Stage Dockerfile](#41-multi-stage-dockerfile)
  - [4.2 Docker Compose Configuration](#42-docker-compose-configuration)
  - [4.3 Build & Execution](#43-build--execution)
- [5. Option C: Self-Hosted Linux with PM2 & Nginx](#5-option-c-self-hosted-linux-with-pm2--nginx)
  - [5.1 PM2 Process Manager Configuration](#51-pm2-process-manager-configuration)
  - [5.2 Production Nginx Reverse Proxy](#52-production-nginx-reverse-proxy)
  - [5.3 Automated SSL via Let's Encrypt](#53-automated-ssl-via-lets-encrypt)
- [6. Caching Strategies & Edge Asset Optimization](#6-caching-strategies--edge-asset-optimization)
- [7. Operational Health Checks & Rollbacks](#7-operational-health-checks--rollbacks)

---

## 1. Production Architecture Overview

The portfolio is compiled as a static site (SSG) with client hydration boundaries.
- **Root URL**: `https://madhanalagarsamy.site`
- **Build Output**: `.next/` directory containing static HTML, CSS bundles, and serialized JSON payloads.
- **Bandwidth Consumption**: Media assets (dual background MP4 videos and cover JPEG images) account for ~90% of total transfer weight. Ensuring proper edge caching is critical.

---

## 2. Environment Variables

Configure the following environment variables in your deployment target:

| Variable | Type | Description | Production Example |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | String | Fully qualified public URL used to build canonical URLs and XML sitemaps. | `https://madhanalagarsamy.site` |
| `NODE_ENV` | String | Node environment mode. | `production` |
| `PORT` | Number | Port for Node runtime (if self-hosting). Default: `3000`. | `3000` |

---

## 3. Option A: Vercel Edge Deployment (Recommended)

Vercel provides native edge distribution for Next.js 16 applications with zero runtime configuration.

### 3.1 Initial Setup & Git Integration

1. Go to [https://vercel.com](https://vercel.com) and sign in.
2. Click **Add New Project** and import the repository: `madhanalagarsamy/portfolio`.
3. Configure the Project Settings:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./`
   - **Build Command**: `next build` (or leave default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install`
4. Add the Environment Variable:
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://madhanalagarsamy.site`
5. Click **Deploy**.

### 3.2 Custom Domain & DNS Records

To bind your custom domain (`madhanalagarsamy.site`):

1. Navigate to **Project Settings > Domains**.
2. Enter `madhanalagarsamy.site` and `www.madhanalagarsamy.site`.
3. In your DNS Provider (e.g. Cloudflare, Namecheap, GoDaddy), create the following records:
   - **A Record**:
     - Name: `@`
     - Value: `76.76.21.21`
   - **CNAME Record**:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
4. Vercel will automatically provision and renew an SSL/TLS certificate via Let's Encrypt.

### 3.3 Zero-Downtime Atomic Rollouts

- Every push to the `main` branch triggers an automated preview build.
- Once compilation and static route parameter discovery succeed, Vercel updates edge routing pointers instantaneously, guaranteeing zero downtime.

---

## 4. Option B: Docker Containerized Deployment

For deployment in Kubernetes clusters, AWS ECS, or private Docker hosts.

### 4.1 Multi-Stage Dockerfile

Create a `Dockerfile` at the root of the project:

```dockerfile
# syntax=docker/dockerfile:1
FROM node:22-alpine AS base

# Step 1: Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Step 2: Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_SITE_URL="https://madhanalagarsamy.site"
RUN npm run build

# Step 3: Production runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set permissions for standalone build output
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
```

> [!NOTE]
> To enable `standalone` output for the Docker build, verify that `next.config.ts` includes `output: 'standalone'`.

### 4.2 Docker Compose Configuration

Create a `docker-compose.yml`:

```yaml
version: '3.8'

services:
  portfolio:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: portfolio-app
    restart: always
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SITE_URL=https://madhanalagarsamy.site
      - NODE_ENV=production
    resources:
      limits:
        cpus: '1.0'
        memory: 1024M
```

### 4.3 Build & Execution

```bash
docker compose up -d --build
```

---

## 5. Option C: Self-Hosted Linux with PM2 & Nginx

### 5.1 PM2 Process Manager Configuration

1. Install PM2 globally:
   ```bash
   npm install -g pm2
   ```
2. Create an `ecosystem.config.js`:
   ```javascript
   module.exports = {
     apps: [
       {
         name: "portfolio-site",
         script: "node_modules/next/dist/bin/next",
         args: "start",
         cwd: "/var/www/portfolio",
         instances: "max",
         exec_mode: "cluster",
         env: {
           PORT: 3000,
           NODE_ENV: "production",
           NEXT_PUBLIC_SITE_URL: "https://madhanalagarsamy.site",
         },
       },
     ],
   };
   ```
3. Start the application:
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

### 5.2 Production Nginx Reverse Proxy

Create `/etc/nginx/sites-available/madhanalagarsamy.site`:

```nginx
server {
    listen 80;
    server_name madhanalagarsamy.site www.madhanalagarsamy.site;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name madhanalagarsamy.site www.madhanalagarsamy.site;

    # SSL Certificates
    ssl_certificate /etc/letsencrypt/live/madhanalagarsamy.site/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/madhanalagarsamy.site/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; media-src 'self' data:; font-src 'self' data:;" always;

    # Static Assets & Media Caching
    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        expires 365d;
        access_log off;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location ~* \.(mp4|webm|jpg|jpeg|png|svg|ico)$ {
        proxy_pass http://127.0.0.1:3000;
        expires 30d;
        access_log off;
        add_header Cache-Control "public, max-age=2592000, stale-while-revalidate=86400";
    }

    # Application Proxy
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5.3 Automated SSL via Let's Encrypt

```bash
sudo certbot --nginx -d madhanalagarsamy.site -d www.madhanalagarsamy.site
```

---

## 6. Caching Strategies & Edge Asset Optimization

To minimize server load and deliver sub-second response times:

1. **Next.js Static Bundles (`/_next/static/`)**:
   - Cache Header: `public, max-age=31536000, immutable`.
   - Content hashes in filenames ensure instant cache invalidation upon redeployment.
2. **Background Video Files (`video.mp4`, `reverse.mp4`)**:
   - Cache Header: `public, max-age=2592000, stale-while-revalidate=86400`.
   - Edge CDNs serve cached media streams directly without querying the application process.
3. **HTML Documents (`/`, `/blog`, `/blog/[slug]`)**:
   - Dynamic revalidation via Next.js SSG. Cached at the edge with immediate invalidation upon new git deployments.

---

## 7. Operational Health Checks & Rollbacks

### Health Check Endpoint
To verify server health:
```bash
curl -I https://madhanalagarsamy.site
```
Expected response: `HTTP/2 200` with `content-type: text/html`.

### Rollback Procedures
- **Vercel**: Go to the **Deployments** tab, select the previous stable build, and click **Promote to Production**. Rollback takes under 5 seconds.
- **Docker**: Re-tag and deploy the previous stable image tag:
  ```bash
  docker compose down
  docker run -d -p 3000:3000 portfolio-app:previous-tag
  ```
- **PM2**: Revert the git commit and rebuild:
  ```bash
  git revert HEAD
  npm run build
  pm2 reload portfolio-site
  ```

---

*Authored by Madhan Alagarsamy. Maintained under the architecture repository of [`https://madhanalagarsamy.site`](https://madhanalagarsamy.site).*
