'use client';

import { useState } from 'react';
import {
  Smartphone,
  Monitor,
  Apple,
  Terminal,
  Download,
  Copy,
  Check,
  ShieldAlert,
  ArrowUpRight,
  Info,
  CheckCircle2,
} from 'lucide-react';
import { PLATFORMS, SITE_CONFIG, PlatformRelease } from '@/lib/download-config';

export default function PlatformsSection() {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [showAndroidGuidance, setShowAndroidGuidance] = useState(false);

  const handleCopy = (hash: string, id: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(id);
    setTimeout(() => setCopiedHash(null), 2500);
  };

  const getPlatformIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-400" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-sky-400" />;
      case 'Apple':
        return <Apple className="w-6 h-6 text-neutral-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-neutral-400" />;
      default:
        return <Smartphone className="w-6 h-6 text-blue-400" />;
    }
  };

  const availablePlatforms = PLATFORMS.filter((p) => p.status === 'available');
  const comingSoonPlatforms = PLATFORMS.filter((p) => p.status === 'coming-soon');

  return (
    <section id="platforms" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Official Client Builds
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get Scrutium for your device.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Download verified native builds for your desktop and mobile environments. All installers are cryptographically hashed and built directly from the official Scrutium repository.
          </p>
        </div>

        {/* Available Platforms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {availablePlatforms.map((platform) => (
            <div
              key={platform.id}
              className="rounded-2xl border border-white/[0.12] bg-[#0c101a] p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:border-blue-500/30 transition-all space-y-6"
            >
              <div className="space-y-6">
                {/* Platform Card Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      {getPlatformIcon(platform.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {platform.name}
                      </h3>
                      <p className="text-xs text-neutral-400">{platform.subtitle}</p>
                    </div>
                  </div>
                  {/* Clean unboxed status text */}
                  <div className="text-right text-xs text-emerald-400 font-medium">
                    <span>Available</span>
                    <span className="block text-[11px] text-neutral-400">v{platform.version}</span>
                  </div>
                </div>

                {/* Release specs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-black/40 rounded-xl p-3.5 border border-white/[0.06]">
                  <div>
                    <span className="text-neutral-400 block text-[11px]">Format</span>
                    <span className="text-neutral-200 font-medium">{platform.format}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[11px]">File Size</span>
                    <span className="text-neutral-200 font-medium tabular-nums">{platform.fileSize}</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-neutral-400 block text-[11px]">Updated</span>
                    <span className="text-neutral-200 font-medium">{platform.releaseDate}</span>
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-1.5 text-xs">
                  <div className="text-neutral-400 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Minimum Requirement:</span>
                  </div>
                  <p className="text-neutral-300 font-mono text-[11px] pl-5">
                    {platform.minRequirements}
                  </p>
                </div>

                {/* Android Security Notice (if applicable) */}
                {platform.id === 'android' && (
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs space-y-2">
                    <div className="flex items-center gap-2 text-amber-300 font-medium">
                      <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Security Notice: Android APK Sideloading</span>
                    </div>
                    <p className="text-neutral-300 text-[11px] leading-relaxed">
                      Android protects your device by asking for confirmation when installing apps outside the Google Play Store. Verify the SHA-256 checksum below to confirm this is an authentic, untampered package from Scrutium engineering.
                    </p>
                    <button
                      onClick={() => setShowAndroidGuidance(!showAndroidGuidance)}
                      className="text-amber-400 hover:text-amber-300 text-[11px] font-medium underline cursor-pointer"
                    >
                      {showAndroidGuidance ? 'Hide installation steps' : 'View step-by-step sideloading instructions'}
                    </button>

                    {showAndroidGuidance && platform.installSteps && (
                      <ol className="mt-2 space-y-1.5 list-decimal list-inside text-neutral-300 text-[11px] pt-2 border-t border-amber-500/20">
                        {platform.installSteps.map((step, idx) => (
                          <li key={idx} className="leading-relaxed">{step}</li>
                        ))}
                      </ol>
                    )}
                  </div>
                )}

                {/* SHA-256 Checksum Container */}
                {platform.sha256 && (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span>Verified SHA-256 Checksum</span>
                      <button
                        onClick={() => handleCopy(platform.sha256!, platform.id)}
                        className="inline-flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                      >
                        {copiedHash === platform.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy hash</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/60 border border-white/[0.08] font-mono text-[10px] text-neutral-400 truncate">
                      {platform.sha256}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={platform.downloadUrl}
                  download={platform.fileName}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all whitespace-nowrap cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download {platform.name === 'Android' ? 'APK' : 'Installer'} ({platform.fileSize})</span>
                </a>
                <a
                  href={SITE_CONFIG.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-xl transition-colors whitespace-nowrap"
                >
                  <span>Docs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Platforms Section */}
        <div className="space-y-4">
          <div className="text-xs font-medium text-neutral-400">
            Platforms in Development & Review
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comingSoonPlatforms.map((platform) => (
              <div
                key={platform.id}
                className="rounded-2xl border border-white/[0.08] bg-[#090c14]/70 p-6 flex flex-col justify-between space-y-4 text-neutral-400"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                      {getPlatformIcon(platform.iconName)}
                    </div>
                    <span className="text-[11px] font-medium text-amber-400/90 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-200">{platform.name}</h3>
                    <p className="text-xs text-neutral-400">{platform.subtitle}</p>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {platform.shortNotes}
                  </p>
                  <div className="text-[11px] text-neutral-400">
                    Target: {platform.minRequirements}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <a
                    href={SITE_CONFIG.webAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-medium text-blue-400 hover:text-blue-300 bg-blue-600/10 hover:bg-blue-600/15 border border-blue-500/20 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>Use via Web App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web fallback callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
            <span>
              Don&apos;t want to install an application? Use the full-featured Scrutium AI web app directly in your browser.
            </span>
          </div>
          <a
            href={SITE_CONFIG.webAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-blue-600/20 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 transition-colors whitespace-nowrap"
          >
            <span>Launch Web App</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
