'use client';

import { useState } from 'react';
import { X, CheckCircle2, Copy, Check } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/download-config';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeploymentGuideModal({ isOpen, onClose }: DeploymentGuideModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d0e13] border border-neutral-800 rounded-xl shadow-2xl p-6 sm:p-7 text-neutral-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="deployment-guide-title"
      >
        <div className="flex items-start justify-between gap-4 border-b border-neutral-800/80 pb-4">
          <div>
            <h2 id="deployment-guide-title" className="text-lg font-medium text-white tracking-tight">
              Production Deployment & DNS Instructions
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Guide to connect <span className="text-neutral-200 font-mono">download.scrutium.com</span> to this deployed portal.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-5 pt-5 text-xs">
          {/* Step 1 */}
          <section className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-5 h-5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center text-[11px] font-mono">1</span>
              <h3>Build the Production Application</h3>
            </div>
            <p className="text-neutral-400 pl-7">
              Compile the Next.js standalone build:
            </p>
            <div className="pl-7">
              <div className="flex items-center justify-between bg-neutral-950 border border-neutral-800 rounded px-3 py-2 font-mono text-xs text-neutral-300">
                <code>npm run build</code>
                <button
                  onClick={() => handleCopy('npm run build', 'build-cmd')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy command"
                >
                  {copiedKey === 'build-cmd' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-5 h-5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center text-[11px] font-mono">2</span>
              <h3>Deploy to Hosting Environment</h3>
            </div>
            <p className="text-neutral-400 pl-7">
              Deploy the standalone application to your hosting provider (Cloud Run, Vercel, or VPS) and configure the canonical URL:
            </p>
            <div className="pl-7">
              <div className="flex items-center justify-between bg-neutral-950 border border-neutral-800 rounded px-3 py-2 font-mono text-xs text-neutral-300">
                <code>APP_URL=https://download.scrutium.com</code>
                <button
                  onClick={() => handleCopy('APP_URL=https://download.scrutium.com', 'env-var')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy env var"
                >
                  {copiedKey === 'env-var' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-5 h-5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center text-[11px] font-mono">3</span>
              <h3>Configure DNS for download.scrutium.com</h3>
            </div>
            <p className="text-neutral-400 pl-7">
              In your DNS registrar for <code className="text-neutral-200">scrutium.com</code>, add a CNAME record:
            </p>
            <div className="pl-7 overflow-x-auto">
              <table className="w-full text-xs text-left border border-neutral-800 rounded">
                <thead className="bg-neutral-900/60 text-neutral-400">
                  <tr>
                    <th className="p-2 font-medium">Type</th>
                    <th className="p-2 font-medium">Host</th>
                    <th className="p-2 font-medium">Target</th>
                    <th className="p-2 font-medium">TTL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-850 font-mono text-neutral-300">
                  <tr>
                    <td className="p-2 text-neutral-300">CNAME</td>
                    <td className="p-2">download</td>
                    <td className="p-2 text-neutral-400">cname.your-host.com</td>
                    <td className="p-2">300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Step 4 */}
          <section className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-5 h-5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center text-[11px] font-mono">4</span>
              <h3>Submit Sitemap to Search Console</h3>
            </div>
            <p className="text-neutral-400 pl-7">
              Once DNS resolves, verify property in Google Search Console and submit the sitemap:
            </p>
            <div className="pl-7">
              <div className="flex items-center justify-between bg-neutral-950 border border-neutral-800 rounded px-3 py-2 font-mono text-xs text-neutral-300">
                <code>https://download.scrutium.com/sitemap.xml</code>
                <button
                  onClick={() => handleCopy('https://download.scrutium.com/sitemap.xml', 'sitemap-url')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy sitemap URL"
                >
                  {copiedKey === 'sitemap-url' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </section>

          {/* Verification Links */}
          <section className="space-y-1.5 border-t border-neutral-800/80 pt-3">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Destination Verification</span>
            </div>
            <div className="pl-5 space-y-1 text-xs text-neutral-400">
              <p>• Web App: <a href={SITE_CONFIG.webAppUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-300 underline">{SITE_CONFIG.webAppUrl}</a></p>
              <p>• Documentation: <a href={SITE_CONFIG.docsUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-300 underline">{SITE_CONFIG.docsUrl}</a></p>
              <p>• Download Base: <span className="text-neutral-300">{SITE_CONFIG.domain}</span></p>
            </div>
          </section>
        </div>

        <div className="mt-6 flex justify-end border-t border-neutral-800/80 pt-3">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
