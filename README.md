# Scrutium — Official App Download Portal

The dedicated, production-ready application download website for **Scrutium AI** (`https://downloads.scrutium.com`).

Built with design restraint inspired by industry-leading product software distributions: clean typographic hierarchy, generous whitespace, straightforward platform downloads, authentic product capabilities, and immediate web access.

---

## 1. Architecture & Domain Mapping

This download portal operates independently from the main Scrutium web application and documentation portal:

| Property | URL | Role |
| :--- | :--- | :--- |
| **Download Portal** (This Project) | [`https://downloads.scrutium.com`](https://downloads.scrutium.com) | Standalone client downloads & SHA-256 verification |
| **Main Web Application** | [`https://scrutium.com`](https://scrutium.com) | Browser-based interactive AI web application |
| **Documentation Portal** | [`https://documentation.scrutium.com`](https://documentation.scrutium.com) | User guides, API references, & release notes |

Every "Try on Web" link navigates directly to `https://scrutium.com`. All "Documentation" links route to `https://documentation.scrutium.com`.

---

## 2. Supported Platforms & Release Manifest

| Platform | Format | Package | Version | Status / Download |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile App** | Standalone APK | `scrutium.apk` | `3.4.2` | [Direct APK Download](https://github.com/X-ions/download-scrutium/releases/download/scrutium-mobile/scrutium.apk) |
| **Desktop (Windows & Mac)** | Native Standalone | — | — | *Coming Soon (In Development)* |

*Desktop applications for Windows and macOS are currently in private development. Use Scrutium immediately in any modern web browser at [https://scrutium.com](https://scrutium.com).*

Release parameters are centralized in [`lib/download-config.ts`](lib/download-config.ts).

---

## 3. Tech Stack & Architecture

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Standalone build output)
- **Runtime**: React 19 & TypeScript (strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with a restrained monochrome palette
- **Icons**: [Lucide React](https://lucide.dev/)
- **Technical SEO**:
  - Canonical URL (`https://downloads.scrutium.com`)
  - OpenGraph & Twitter Cards
  - Dynamic XML Sitemap (`/app/sitemap.ts` $\rightarrow$ `/sitemap.xml`)
  - Dynamic Robots Configuration (`/app/robots.ts` $\rightarrow$ `/robots.txt`)
  - Schema.org JSON-LD Structured Data (`Organization`, `WebSite`, `SoftwareApplication`)

---

## 4. Project Structure

```
├── app/
│   ├── api/
│   │   └── download/
│   │       └── [platform]/
│   │           └── route.ts        # Download dispatcher with streaming headers
│   ├── globals.css                 # Tailwind v4 theme & base typography
│   ├── layout.tsx                  # Root layout, metadata & JSON-LD
│   ├── page.tsx                    # Main download portal view
│   ├── robots.ts                   # Search crawler directives
│   └── sitemap.ts                  # XML sitemap generator
├── components/
│   ├── DeploymentGuideModal.tsx    # DNS and deployment walkthrough modal
│   ├── FaqSection.tsx              # Minimal FAQ accordion
│   ├── FeaturesSection.tsx         # 4 authentic product capabilities
│   ├── Footer.tsx                  # Restrained footer & navigation mirror
│   ├── Hero.tsx                    # Confident headline, CTA & ecosystem summary
│   ├── InstallationGuide.tsx       # Platform-specific step-by-step guides
│   ├── JsonLd.tsx                  # Schema.org structured data script
│   ├── Navbar.tsx                  # Compact navigation header & mobile drawer
│   └── PlatformsSection.tsx        # Available platform download cards & checksums
├── hooks/
│   └── use-mobile.ts               # SSR-safe viewport listener
├── lib/
│   ├── download-config.ts          # Central source of truth for versions & URLs
│   └── utils.ts                    # ClassName merge utilities
├── metadata.json                   # Platform metadata
├── next.config.ts                  # Next.js configuration
├── package.json                    # Project dependencies
└── tsconfig.json                   # TypeScript configuration
```

---

## 5. Development & Build

### Local Development
```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the portal.

### Linting & Type Checking
```bash
npm run lint
```

### Production Build
```bash
npm run build
```

---

## 6. Cloudflare Production Deployment & DNS Setup

To deploy this project to production and bind `downloads.scrutium.com` on Cloudflare:

### Method A: Cloudflare Pages Deployment (Recommended)

1. **Push your repository** to GitHub, GitLab, or connect directly.
2. In the **Cloudflare Dashboard**, navigate to **Compute (Workers & Pages)** $\rightarrow$ **Create application** $\rightarrow$ **Pages** $\rightarrow$ **Connect to Git**.
3. Select your repository and configure the build settings:
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Build output directory**: `.next` (or standalone)
4. Add the **Environment Variable**:
   ```env
   APP_URL = https://downloads.scrutium.com
   NODE_VERSION = 20
   ```
5. Click **Save and Deploy**.
6. Once deployed, navigate to **Custom domains** $\rightarrow$ **Set up a custom domain** $\rightarrow$ enter `downloads.scrutium.com`. Cloudflare will automatically route DNS and generate SSL/TLS certificates.

---

### Method B: Cloudflare DNS with Container / VPS Ingress (Cloud Run / AWS / Docker)

If you are running the Next.js standalone container on a cloud host (Google Cloud Run, AWS, VPS):

1. **Add CNAME Record in Cloudflare DNS for `scrutium.com`**:
   | Type | Name | Target / Content | Proxy status | TTL |
   | :--- | :--- | :--- | :--- | :--- |
   | **CNAME** | `downloads` | `[your-cloud-run-domain-or-cname]` | Proxied (Orange Cloud) | Auto |

2. **Configure SSL/TLS in Cloudflare**:
   - Go to **SSL/TLS** $\rightarrow$ **Overview** $\rightarrow$ set to **Full (strict)**.
   - Go to **SSL/TLS** $\rightarrow$ **Edge Certificates** $\rightarrow$ turn on **Always Use HTTPS**.

3. **Performance & Security Tuning**:
   - Under **Speed** $\rightarrow$ **Optimization**, enable **Brotli** compression.
   - Under **Network**, enable **HTTP/3 (with QUIC)** and **0-RTT**.

---

### Step 5: Google Search Console Submission

Once DNS resolves:
1. Add the domain property `https://downloads.scrutium.com` in Google Search Console.
2. Submit the dynamic sitemap URL: `https://downloads.scrutium.com/sitemap.xml`.

---

## 7. License & Copyright

Copyright © 2026 X-ion, Inc. All rights reserved.
