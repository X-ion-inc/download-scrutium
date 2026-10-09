'use client';

import { useState } from 'react';
import { Smartphone, Monitor, Terminal, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PLATFORMS, SITE_CONFIG } from '@/lib/download-config';

export default function InstallationGuide() {
  const [activePlatform, setActivePlatform] = useState<'android' | 'windows'>('android');
  const [copiedCmd, setCopiedCmd] = useState(false);

  const selectedPlatform = PLATFORMS.find((p) => p.id === activePlatform) || PLATFORMS[0];
  const verifyCmd =
    activePlatform === 'windows'
      ? `certutil -hashfile ${selectedPlatform.fileName} SHA256`
      : `sha256sum ${selectedPlatform.fileName}`;

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(verifyCmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="installation" className="py-20 border-t border-neutral-800/80 bg-[#090a0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Installation Guide
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Minimal steps to install and verify Scrutium AI on your device.
          </p>
        </div>

        {/* Platform Selector Buttons */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setActivePlatform('android')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activePlatform === 'android'
                ? 'bg-white text-black'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Android</span>
          </button>
          <button
            onClick={() => setActivePlatform('windows')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activePlatform === 'windows'
                ? 'bg-white text-black'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Windows</span>
          </button>
        </div>

        {/* Steps container */}
        <div className="border border-neutral-800 bg-[#0d0e13] rounded-xl p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            {selectedPlatform.installSteps.map((step, idx) => (
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

          {/* Cryptographic Verification Command */}
          <div className="pt-4 border-t border-neutral-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 font-mono text-[11px]">
                <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                <span>Verify SHA-256 in terminal:</span>
              </span>
              <button
                onClick={handleCopyCmd}
                className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                {copiedCmd ? (
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
            <div className="p-2.5 rounded bg-neutral-950 border border-neutral-800/80 font-mono text-xs text-neutral-300 overflow-x-auto select-all">
              <code>{verifyCmd}</code>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-neutral-400">
          Encountering issues? Consult our complete troubleshooting guides at{' '}
          <a
            href={SITE_CONFIG.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white underline inline-flex items-center gap-0.5"
          >
            <span>documentation.scrutium.com</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          .
        </div>
      </div>
    </section>
  );
}
