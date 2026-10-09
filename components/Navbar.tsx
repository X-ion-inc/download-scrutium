'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/download-config';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-[#0a0b0e]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 h-15">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white hover:text-neutral-200 transition-colors"
          >
            <span className="w-7 h-7 rounded-md bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-white font-bold text-xs">
              S
            </span>
            <span className="text-[15px] font-medium tracking-tight">Scrutium</span>
          </Link>
        </div>

        {/* Central Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-neutral-400">
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
            href={SITE_CONFIG.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Documentation</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={SITE_CONFIG.webAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-neutral-300 hover:text-white transition-colors px-3 py-1.5"
          >
            Try on Web
          </a>
          <a
            href={SITE_CONFIG.officialApkDownloadUrl}
            download="scrutium.apk"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={SITE_CONFIG.officialApkDownloadUrl}
            download="scrutium.apk"
            className="px-3 py-1.5 text-xs font-medium text-black bg-white rounded-md"
          >
            Download
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800/60"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-neutral-800 bg-[#0d0e13] px-5 py-4 space-y-3 text-xs">
          <div className="flex flex-col space-y-2 text-neutral-300">
            <button
              onClick={() => scrollTo('downloads')}
              className="text-left py-1.5 hover:text-white transition-colors"
            >
              Downloads
            </button>
            <button
              onClick={() => scrollTo('capabilities')}
              className="text-left py-1.5 hover:text-white transition-colors"
            >
              Features
            </button>
            <a
              href={SITE_CONFIG.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-1.5 text-neutral-300 hover:text-white"
            >
              <span>Documentation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
            </a>
          </div>

          <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
            <a
              href={SITE_CONFIG.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 text-xs font-medium text-neutral-200 border border-neutral-700/60 rounded-md hover:bg-white/[0.04] transition-colors"
            >
              Try on Web (scrutium.com)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
