'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/download-config';

interface NavbarProps {
  onOpenDeployGuide?: () => void;
}

export default function Navbar({ onOpenDeployGuide }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#07090e]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            <span className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-base shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              S
            </span>
            <span>Scrutium AI</span>
          </Link>
        </div>

        {/* Zone 2: 4-5 Single-line Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <button
            onClick={() => scrollToSection('features')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('platforms')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            Platforms
          </button>
          <button
            onClick={() => scrollToSection('installation')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            Installation
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            FAQ
          </button>
          <a
            href={SITE_CONFIG.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
          >
            <span>Documentation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
          </a>
        </nav>

        {/* Zone 3: Actions (Try on Web + Download App primary) */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={SITE_CONFIG.webAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-neutral-300 hover:text-white transition-colors whitespace-nowrap px-3 py-2"
          >
            Try on Web
          </a>
          <button
            onClick={() => scrollToSection('platforms')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all whitespace-nowrap cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download App</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => scrollToSection('platforms')}
            className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-lg"
          >
            Download
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-[#0a0d16] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-neutral-300">
            <button
              onClick={() => scrollToSection('features')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('platforms')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Supported Platforms
            </button>
            <button
              onClick={() => scrollToSection('installation')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Installation Steps
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              FAQ
            </button>
            <a
              href={SITE_CONFIG.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 text-blue-400 hover:underline"
            >
              <span>Documentation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <a
              href={SITE_CONFIG.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-medium text-neutral-200 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
            >
              Open Web Application (scrutium.com)
            </a>
            {onOpenDeployGuide && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeployGuide();
                }}
                className="w-full text-center py-2 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                DNS & Deployment Guide
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
