'use client';

import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/download-config';

interface FooterProps {
  onOpenDeployGuide?: () => void;
}

export default function Footer({ onOpenDeployGuide }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-[#07080b] py-14 text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-800/80">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white font-bold text-[10px]">
                S
              </span>
              <span className="font-medium text-white text-sm">Scrutium</span>
            </div>
            <p className="text-neutral-400 text-xs">
              Official application distribution portal · {SITE_CONFIG.domain}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400">
            <button
              onClick={() => scrollTo('downloads')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Downloads
            </button>
            <button
              onClick={() => scrollTo('capabilities')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Features
            </button>
            <a
              href={SITE_CONFIG.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-0.5"
            >
              <span>Try on Web</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>
            <a
              href={SITE_CONFIG.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-0.5"
            >
              <span>Documentation</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>
            {onOpenDeployGuide && (
              <button
                onClick={onOpenDeployGuide}
                className="hover:text-white transition-colors cursor-pointer text-neutral-400"
              >
                DNS & Deployment Guide
              </button>
            )}
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} X-ion, Inc. All rights reserved.
          </div>
          <div className="font-mono text-neutral-400">
            Version {SITE_CONFIG.currentReleaseVersion}
          </div>
        </div>
      </div>
    </footer>
  );
}
