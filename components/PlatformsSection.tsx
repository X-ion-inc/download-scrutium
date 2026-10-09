'use client';

import { useState } from 'react';
import { Smartphone, Monitor, Download, Copy, Check, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { PLATFORMS, SITE_CONFIG } from '@/lib/download-config';

export default function PlatformsSection() {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const handleCopy = (hash: string, id: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(id);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  return (
    <section id="downloads" className="py-20 border-t border-neutral-800/80 bg-[#090a0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Get Scrutium for your device.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Choose your platform below to download the official standalone build. Every installer is cryptographically signed and SHA-256 verified.
          </p>
        </div>

        {/* Platform Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className="border border-neutral-800 bg-[#0d0e13] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition-colors"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                      {platform.id === 'android' ? (
                        <Smartphone className="w-5 h-5 text-neutral-300" />
                      ) : (
                        <Monitor className="w-5 h-5 text-neutral-300" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white tracking-tight">
                        {platform.name}
                      </h3>
                      <p className="text-xs text-neutral-400">{platform.subtitle}</p>
                    </div>
                  </div>

                  <div className="text-right text-xs font-mono text-neutral-400">
                    <span className="text-neutral-200">v{platform.version}</span>
                    <span className="block text-[11px] text-neutral-400">{platform.fileSize}</span>
                  </div>
                </div>

                {/* Notes & Requirements */}
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {platform.shortNotes}
                </p>

                <div className="text-xs space-y-1 pt-1 border-t border-neutral-800/80">
                  <div className="text-[11px] text-neutral-400">Requirements:</div>
                  <div className="text-xs font-mono text-neutral-300">
                    {platform.minRequirements}
                  </div>
                </div>

                {/* Android specific security note */}
                {platform.id === 'android' && (
                  <div className="border border-neutral-800 bg-neutral-900/60 rounded-lg p-3 text-xs space-y-1.5 text-neutral-400">
                    <div className="flex items-center gap-1.5 text-neutral-300 font-medium text-[11px]">
                      <ShieldAlert className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Android Package Guidance</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-neutral-400">
                      If prompted by Android, permit installation for your browser. Verify the SHA-256 hash below to confirm package authenticity.
                    </p>
                  </div>
                )}

                {/* SHA-256 Hash Container */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400">
                    <span>SHA-256 Checksum</span>
                    <button
                      onClick={() => handleCopy(platform.sha256, platform.id)}
                      className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedHash === platform.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-2 rounded bg-neutral-950 border border-neutral-800/80 font-mono text-[10px] text-neutral-400 truncate select-all">
                    {platform.sha256}
                  </div>
                </div>
              </div>

              {/* Download Action */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                <a
                  href={platform.downloadUrl}
                  download={platform.fileName}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded-md transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download {platform.name === 'Android' ? 'APK' : 'Installer'}</span>
                </a>
                <a
                  href={SITE_CONFIG.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2.5 text-xs font-medium text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
                  title="View setup documentation"
                >
                  <span>Docs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Web Parity Notice for Other OS Users */}
        <div className="mt-8 border border-neutral-800/80 bg-[#0d0e13]/60 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            <span className="text-neutral-200 font-medium">Looking for macOS, iOS, or Linux?</span>
            <p className="text-neutral-400 text-xs mt-0.5">
              The full Scrutium AI workspace runs in any modern browser with complete conversation sync.
            </p>
          </div>
          <a
            href={SITE_CONFIG.webAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-colors whitespace-nowrap"
          >
            <span>Launch Web App</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
