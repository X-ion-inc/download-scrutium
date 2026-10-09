'use client';

import { ArrowUpRight, Download, Smartphone, Monitor, Globe } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/download-config';

export default function Hero() {
  const scrollToDownloads = () => {
    const el = document.getElementById('downloads');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Release metadata kicker */}
          <div className="text-xs font-mono text-neutral-400 tracking-wide uppercase">
            Official Release {SITE_CONFIG.currentReleaseVersion} · Standalone Client
          </div>

          {/* Confident, restrained headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
            Scrutium, wherever you work.
          </h1>

          {/* Measured supporting description */}
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            {SITE_CONFIG.subheadline}
          </p>

          {/* Primary & secondary actions */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="https://github.com/X-ions/download-scrutium/releases/download/scrutium-mobile/scrutium.apk"
              download="scrutium.apk"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Scrutium</span>
            </a>
            <a
              href={SITE_CONFIG.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/70 rounded-md transition-colors"
            >
              <span>Try on Web</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
            </a>
          </div>
        </div>

        {/* Restrained Brand Artwork / Platform Ecosystem Overview (No fake UI screenshots) */}
        <div className="mt-16 pt-10 border-t border-neutral-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="border border-neutral-800/70 bg-[#0d0e13]/60 rounded-lg p-5 space-y-2">
              <div className="flex items-center gap-2.5 text-white font-medium">
                <Smartphone className="w-4 h-4 text-neutral-400" />
                <span>Android Universal</span>
              </div>
              <p className="text-neutral-400 text-[13px] leading-relaxed">
                Direct APK installer with verified cryptographic SHA-256 integrity check.
              </p>
              <div className="text-[11px] font-mono text-neutral-400 pt-1">
                v1.2.0 · 42.8 MB
              </div>
            </div>

            <div className="border border-neutral-800/70 bg-[#0d0e13]/60 rounded-lg p-5 space-y-2">
              <div className="flex items-center gap-2.5 text-white font-medium">
                <Monitor className="w-4 h-4 text-neutral-400" />
                <span>Windows Desktop</span>
              </div>
              <p className="text-neutral-400 text-[13px] leading-relaxed">
                Dedicated 64-bit client for Windows 10 and 11 with isolated memory space.
              </p>
              <div className="text-[11px] font-mono text-neutral-400 pt-1">
                v1.2.0 · 78.4 MB
              </div>
            </div>

            <div className="border border-neutral-800/70 bg-[#0d0e13]/60 rounded-lg p-5 space-y-2">
              <div className="flex items-center gap-2.5 text-white font-medium">
                <Globe className="w-4 h-4 text-neutral-400" />
                <span>Web Application</span>
              </div>
              <p className="text-neutral-400 text-[13px] leading-relaxed">
                Instant access across macOS, Linux, iOS, or any modern web browser.
              </p>
              <div className="text-[11px] font-mono text-neutral-400 pt-1">
                <a
                  href={SITE_CONFIG.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white underline"
                >
                  scrutium.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
