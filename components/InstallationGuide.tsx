'use client';

import { Smartphone, Monitor, ArrowUpRight } from 'lucide-react';
import { PLATFORMS, SITE_CONFIG } from '@/lib/download-config';

export default function InstallationGuide() {
  const mobilePlatform = PLATFORMS.find((p) => p.id === 'mobile') || PLATFORMS[0];

  return (
    <section id="installation" className="py-20 border-t border-neutral-800/80 bg-[#090a0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Installation Guide
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Steps to install Scrutium AI Mobile App (Version {mobilePlatform.version || '3.4.2'}).
          </p>
        </div>

        {/* Steps container */}
        <div className="border border-neutral-800 bg-[#0d0e13] rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4">
            <div className="flex items-center gap-2 text-white font-medium text-sm">
              <Smartphone className="w-4 h-4 text-neutral-400" />
              <span>Mobile App APK Installation</span>
            </div>
            <span className="text-xs font-mono text-neutral-400">scrutium.apk</span>
          </div>

          <div className="space-y-4">
            {mobilePlatform.installSteps?.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="w-5 h-5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center text-xs font-mono shrink-0">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Note */}
        <div className="mt-6 border border-neutral-800/70 bg-[#0d0e13]/50 rounded-lg p-4 flex items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2.5">
            <Monitor className="w-4 h-4 text-neutral-400 shrink-0" />
            <span>
              Desktop client setup guide for Windows & macOS will be published upon release. In the meantime, access all capabilities at <a href={SITE_CONFIG.webAppUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-200 underline">scrutium.com</a>.
            </span>
          </div>
          <a
            href={SITE_CONFIG.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white underline inline-flex items-center gap-0.5 shrink-0"
          >
            <span>Docs</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
