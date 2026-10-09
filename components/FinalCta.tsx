'use client';

import { Download, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/download-config';

export default function FinalCta() {
  const scrollToPlatforms = () => {
    const el = document.getElementById('platforms');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-radial from-blue-600/10 via-transparent to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          Ready to run Scrutium AI on your device?
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Download the official application for Android or Windows today, or start immediately in your browser at scrutium.com.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={scrollToPlatforms}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all whitespace-nowrap cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Scrutium App</span>
          </button>
          <a
            href={SITE_CONFIG.webAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-neutral-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] rounded-xl transition-all whitespace-nowrap"
          >
            <span>Try on Web (scrutium.com)</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
