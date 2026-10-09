# Scrutium — Official App Download Portal

The dedicated, production-ready application download website for **Scrutium AI** (`https://download.scrutium.com`).

Built with design restraint inspired by industry-leading product software distributions: clean typographic hierarchy, generous whitespace, straightforward platform downloads, authentic product capabilities, and immediate web access.

---

## 1. Architecture & Domain Mapping

This download portal operates independently from the main Scrutium web application and documentation portal:

| Property | URL | Role |
| :--- | :--- | :--- |
| **Download Portal** (This Project) | [`https://download.scrutium.com`](https://download.scrutium.com) | Standalone client downloads & SHA-256 verification |
| **Main Web Application** | [`https://scrutium.com`](https://scrutium.com) | Browser-based interactive AI web application |
| **Documentation Portal** | [`https://documentation.scrutium.com`](https://documentation.scrutium.com) | User guides, API references, & release notes |

Every "Try on Web" link navigates directly to `https://scrutium.com`. All "Documentation" links route to `https://documentation.scrutium.com`.

---

## 2. Supported Platforms & Release Manifest

| Platform | Format | Version | Size | Checksum (SHA-256) | Download Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Android** | Universal APK | `v1.2.0` | 42.8 MB | `9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08` | [Direct APK Download](https://github.com/X-ions/download-scrutium/releases/download/scrutium-mobile/scrutium.apk) |
| **Windows** | 64-bit `.exe` Setup | `v1.2.0` | 78.4 MB | `5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8` | [Direct Installer](/api/download/windows) |

*Note for macOS, Linux, and iOS users: The complete Scrutium AI workspace runs in any modern web browser at [https://scrutium.com](https://scrutium.com).*

Release parameters are centralized in [`lib/download-config.ts`](lib/download-config.ts).

---

## 3. Tech Stack & Architecture

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Standalone build output)
- **Runtime**: React 19 & TypeScript (strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with a restrained monochrome palette
- **Icons**: [Lucide React](https://lucide.dev/)
- **Technical SEO**:
  - Canonical URL (`https://download.scrutium.com`)
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

## 6. Production Deployment & DNS Setup

To connect `download.scrutium.com` to your deployed hosting service:

### Step 1: Deploy the Build
Deploy the standalone Next.js container to your hosting infrastructure (Cloud Run, Vercel, AWS ECS, or VPS).

Configure the environment variable:
```env
APP_URL=https://download.scrutium.com
```

### Step 2: Configure Registrar DNS Records
In your DNS management dashboard for `scrutium.com`, add a CNAME record:

| Record Type | Host / Name | Target / Destination | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `download` | `cname.your-host.com` *(or Cloud Run domain mapping)* | Auto / 300 |

### Step 3: SSL / HTTPS
Enable managed TLS/SSL certificate provisioning. All HTTP traffic should automatically redirect to `https://download.scrutium.com`.

### Step 4: Submit Sitemap to Google Search Console
Once DNS resolves:
1. Add the domain property `https://download.scrutium.com` in Google Search Console.
2. Submit the XML sitemap URL: `https://download.scrutium.com/sitemap.xml`.

---

## 7. Cryptographic Binary Verification

### Windows (PowerShell / Command Prompt):
```powershell
certutil -hashfile scrutium-ai-setup-v1.2.0.exe SHA256
```

### Android / Linux / macOS (Terminal):
```bash
sha256sum scrutium.apk
```

---

## 8. License & Copyright

Copyright © 2026 X-ion, Inc. All rights reserved.
