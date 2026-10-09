'use client';

import { useState } from 'react';
import { Smartphone, Monitor, Download, ArrowUpRight, ShieldAlert, Clock, Users } from 'lucide-react';
import { PLATFORMS, SITE_CONFIG } from '@/lib/download-config';

export default function PlatformsSection() {
  const [downloadsCount, setDownloadsCount] = useState<number>(69089);
  const androidPlatform = PLATFORMS.find((p) => p.id === 'mobile');
  const desktopPlatform = PLATFORMS.find((p) => p.id === 'windows');

  const handleDownload = () => {
    setDownloadsCount((prev) => prev + 1);
  };

  return (
    <section id="downloads" className="py-20 border-t border-neutral-800/80 bg-[#090a0d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Get Scrutium for your device.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
            The official standalone application is currently available for Mobile. Desktop builds are in active development.
          </p>
        </div>

        {/* Mobile Section (Flat Layout) */}
        {androidPlatform && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white shrink-0">
                  <Smartphone className="w-5 h-5 text-neutral-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white tracking-tight">
                    {androidPlatform.name}
                  </h3>
                  <p className="text-xs text-neutral-400">{androidPlatform.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-emerald-400 font-medium">Available</span>
                <span className="text-neutral-400">Version {androidPlatform.version}</span>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
              {androidPlatform.shortNotes}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs font-mono text-neutral-400 pt-1">
              <div>Package: <span className="text-neutral-200">{androidPlatform.fileName}</span> ({androidPlatform.format})</div>
              {/* Social Proof Counter */}
              <div className="inline-flex items-center gap-1.5 text-neutral-400">
                <Users className="w-3.5 h-3.5 text-neutral-400" />
                <span><strong className="text-neutral-200 font-mono">{downloadsCount.toLocaleString()}</strong> downloads served</span>
              </div>
            </div>

            {/* Mobile Guidance Note */}
            <div className="max-w-2xl text-xs text-neutral-400 space-y-1 bg-neutral-900/30 border-l-2 border-neutral-700 pl-4 py-2">
              <div className="text-neutral-300 font-medium">Mobile Package Guidance</div>
              <p className="leading-relaxed">
                If prompted by your device, permit installation for your browser or file manager to complete setup.
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={androidPlatform.downloadUrl}
                download={androidPlatform.fileName}
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>Download APK (Version {androidPlatform.version})</span>
              </a>
              <a
                href={SITE_CONFIG.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors whitespace-nowrap"
              >
                <span>Documentation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>
        )}

        {/* Subtle Divider */}
        <div className="border-t border-neutral-800/80" />

        {/* Desktop Section (Coming Soon - Flat Layout) */}
        {desktopPlatform && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white tracking-tight">
                    Desktop App
                  </h3>
                  <p className="text-xs text-neutral-400">Windows & Mac</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px] font-mono">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>Coming Soon</span>
              </div>
            </div>

            <div className="max-w-2xl text-xs sm:text-sm text-neutral-400 space-y-2">
              <p className="text-neutral-200 font-medium">
                Note: Desktop application is not ready yet
              </p>
              <p className="leading-relaxed">
                We are actively building the native desktop experience with global shortcuts and deep multitasking. Native standalone installers for Windows and macOS will be released soon.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={SITE_CONFIG.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-colors whitespace-nowrap"
              >
                <span>Use on Web Now (scrutium.com)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
              <span className="text-xs text-neutral-400">
                Zero installation required — full functionality in any browser.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
