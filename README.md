# Scrutium AI — Official App Download Portal

The dedicated, production-ready application download website for **Scrutium AI** (`https://download.scrutium.com`).

This portal allows visitors to explore Scrutium AI's capabilities, choose their supported platform, and download verified standalone client applications.

---

## 1. Official Architecture & Domain Mapping

This website operates independently from the main Scrutium web application and documentation portal:

| Property | URL | Role |
| :--- | :--- | :--- |
| **Download Portal** (This Project) | [`https://download.scrutium.com`](https://download.scrutium.com) | Official standalone client downloads & verification |
| **Main Web Application** | [`https://scrutium.com`](https://scrutium.com) | Browser-based interactive AI web app |
| **Documentation Portal** | [`https://documentation.scrutium.com`](https://documentation.scrutium.com) | Technical user guides, API docs, & release notes |

All "Try on Web" actions throughout this site link directly to `https://scrutium.com`. All "Documentation" links route to `https://documentation.scrutium.com`.

---

## 2. Supported Platforms & Release Manifest

| Platform | Format | Version | Size | Checksum (SHA-256) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Android** | Universal APK | `v1.2.0` | 42.8 MB | `9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08` | **Available** |
| **Windows** | 64-bit `.exe` Setup | `v1.2.0` | 78.4 MB | `5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8` | **Available** |
| **macOS** | Universal DMG | — | — | — | *In Notarization* |
| **iOS / iPadOS** | App Store / TestFlight | — | — | — | *In Review* |
| **Linux** | AppImage / `.deb` | — | — | — | *In Preparation* |

Releases are centrally defined and managed in [`lib/download-config.ts`](lib/download-config.ts).

---

## 3. Tech Stack & Architecture

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Standalone build output)
- **Runtime**: React 19 & TypeScript (strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with dark mode obsidian palette
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: `motion` (`motion/react`)
- **Technical SEO**:
  - Strict Canonical URL (`https://download.scrutium.com`)
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
│   ├── globals.css                 # Tailwind v4 theme & base styles
│   ├── layout.tsx                  # Root layout, metadata & JSON-LD injection
│   ├── page.tsx                    # Main portal view
│   ├── robots.ts                   # Search crawler directives
│   └── sitemap.ts                  # XML sitemap generator
├── components/
│   ├── DeploymentGuideModal.tsx    # In-app DNS and deployment walkthrough
│   ├── FaqSection.tsx              # Interactive FAQ accordion
│   ├── FeaturesSection.tsx         # Product capability bento grid
│   ├── FinalCta.tsx                # Bottom conversion call-to-action
│   ├── Footer.tsx                  # Brand footer & navigation mirror
│   ├── Hero.tsx                    # Value prop & illustrative app preview
│   ├── InstallationGuide.tsx       # Platform-specific step-by-step guides
│   ├── JsonLd.tsx                  # Schema.org structured data scripts
│   ├── Navbar.tsx                  # 3-Zone navigation header & mobile drawer
│   ├── PlatformsSection.tsx        # Available & coming soon platform cards
│   └── WhyScrutium.tsx             # Practical native app benefits
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

### Prerequisites
- Node.js 20+
- npm or pnpm

### Local Development
```bash
# Install dependencies
npm install

# Start local development server on port 3000
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

## 6. Production Deployment & DNS Setup

To connect `download.scrutium.com` to your deployed hosting service:

### Step 1: Deploy the Build
Deploy the standalone Next.js container to your hosting infrastructure (Google Cloud Run, Vercel, AWS ECS, or VPS).

Ensure the environment variable is configured:
```env
APP_URL=https://download.scrutium.com
```

### Step 2: Configure Registrar DNS Records
In your DNS management dashboard for `scrutium.com` (Cloudflare, Google Cloud DNS, Route 53, etc.), create a DNS record for the `download` subdomain:

| Record Type | Host / Name | Target / Destination | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `download` | `cname.your-host.com` *(or Cloud Run domain mapping)* | Auto / 300 |
| **A** *(Alternative)* | `download` | `[Static Ingress IP]` | Auto / 300 |

### Step 3: SSL / HTTPS
Enable managed TLS/SSL certificate provisioning (e.g. Let's Encrypt or Cloudflare Universal SSL). All HTTP traffic should automatically redirect to `https://download.scrutium.com`.

### Step 4: Submit Sitemap to Google Search Console
Once DNS resolves:
1. Add the domain property `https://download.scrutium.com` in Google Search Console.
2. Submit the generated XML sitemap URL: `https://download.scrutium.com/sitemap.xml`.

---

## 7. Cryptographic Binary Verification

Users can verify that their downloaded file is authentic and untampered:

### Windows (PowerShell / Command Prompt):
```powershell
certutil -hashfile scrutium-ai-setup-v1.2.0.exe SHA256
```

### Android / Linux / macOS (Terminal):
```bash
sha256sum scrutium-ai-v1.2.0.apk
```

Compare the printed output against the hash listed in [`lib/download-config.ts`](lib/download-config.ts) and on the live website.

---

## 8. License & Copyright

Copyright © 2026 Scrutium Inc. All rights reserved.
All brand marks, logos, and product designs are proprietary to Scrutium Inc.
