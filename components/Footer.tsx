'use client';

import { ArrowUpRight, Terminal } from 'lucide-react';
import { SITE_CONFIG, PLATFORMS } from '@/lib/download-config';

interface FooterProps {
  onOpenDeployGuide?: () => void;
}

export default function Footer({ onOpenDeployGuide }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070b] py-14 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs">
                S
              </span>
              <span className="font-semibold text-white tracking-tight text-sm">
                Scrutium AI
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Official application download center for Scrutium standalone builds.
            </p>
            <p className="text-[11px] text-neutral-400 font-mono">
              Canonical: {SITE_CONFIG.domain}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <div className="text-white font-medium text-xs">Portal Navigation</div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('features')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Features & Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('platforms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Supported Platforms
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('installation')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Installation Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Platforms Column */}
          <div className="space-y-3">
            <div className="text-white font-medium text-xs">Supported Clients</div>
            <ul className="space-y-2">
              {PLATFORMS.map((platform) => (
                <li key={platform.id} className="flex items-center justify-between text-neutral-400">
                  <span>{platform.name}</span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {platform.status === 'available' ? `v${platform.version}` : 'In Review'}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Resources Column */}
          <div className="space-y-3">
            <div className="text-white font-medium text-xs">Official Destinations</div>
            <ul className="space-y-2">
              <li>
                <a
                  href={SITE_CONFIG.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
                >
                  <span>Scrutium Web Application</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
                >
                  <span>Documentation Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </li>
              {onOpenDeployGuide && (
                <li className="pt-2">
                  <button
                    onClick={onOpenDeployGuide}
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>DNS & Deployment Guide</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} Scrutium Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              scrutium.com
            </a>
            <span>·</span>
            <a
              href={SITE_CONFIG.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              documentation.scrutium.com
            </a>
            <span>·</span>
            <span className="text-neutral-400 font-mono">v1.2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
