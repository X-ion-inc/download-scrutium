'use client';

import { useState } from 'react';
import { X, Globe, Server, ShieldCheck, CheckCircle2, Copy, Check } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d111a] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-neutral-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="deployment-guide-title"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <h2 id="deployment-guide-title" className="text-xl font-semibold text-white tracking-tight">
              Production Deployment & DNS Instructions
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Step-by-step guide to connect <span className="text-blue-400 font-mono">download.scrutium.com</span> to this portal.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 pt-6 text-sm">
          {/* Step 1 */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-mono">1</span>
              <h3>Build the Production Application</h3>
            </div>
            <p className="text-neutral-400 pl-8">
              Verify that the standalone Next.js build compiles cleanly with all static routes and metadata:
            </p>
            <div className="pl-8">
              <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-lg px-3 py-2 font-mono text-xs text-neutral-300">
                <code>npm run build</code>
                <button
                  onClick={() => handleCopy('npm run build', 'build-cmd')}
                  className="text-neutral-400 hover:text-white transition-colors"
                  title="Copy command"
                >
                  {copiedKey === 'build-cmd' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-mono">2</span>
              <h3>Deploy to Hosting Environment (Cloud Run, Vercel, or VPS)</h3>
            </div>
            <p className="text-neutral-400 pl-8">
              Deploy the Next.js standalone container to your production host. Ensure the environment variable <code className="text-neutral-200">APP_URL</code> is set:
            </p>
            <div className="pl-8">
              <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-lg px-3 py-2 font-mono text-xs text-neutral-300">
                <code>APP_URL=https://download.scrutium.com</code>
                <button
                  onClick={() => handleCopy('APP_URL=https://download.scrutium.com', 'env-var')}
                  className="text-neutral-400 hover:text-white transition-colors"
                  title="Copy env var"
                >
                  {copiedKey === 'env-var' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-mono">3</span>
              <h3>Configure DNS Records for download.scrutium.com</h3>
            </div>
            <p className="text-neutral-400 pl-8">
              In your domain registrar / DNS provider for <code className="text-neutral-200">scrutium.com</code> (Cloudflare, Google Cloud DNS, Route 53, etc.), create a DNS record for the <code className="text-blue-400">download</code> subdomain:
            </p>
            <div className="pl-8 overflow-x-auto">
              <table className="w-full text-xs text-left border border-white/10 rounded-lg overflow-hidden">
                <thead className="bg-white/5 text-neutral-300">
                  <tr>
                    <th className="p-2.5 font-medium">Type</th>
                    <th className="p-2.5 font-medium">Host / Name</th>
                    <th className="p-2.5 font-medium">Target / Value</th>
                    <th className="p-2.5 font-medium">TTL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono text-neutral-300">
                  <tr>
                    <td className="p-2.5 text-blue-400">CNAME</td>
                    <td className="p-2.5">download</td>
                    <td className="p-2.5 text-neutral-200">cname.your-host.com (or Cloud Run domain mapping)</td>
                    <td className="p-2.5">Auto / 300</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-blue-400">A (Alternative)</td>
                    <td className="p-2.5">download</td>
                    <td className="p-2.5 text-neutral-200">[Static IP provided by your ingress host]</td>
                    <td className="p-2.5">Auto / 300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Step 4 */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-mono">4</span>
              <h3>Enable SSL / HTTPS</h3>
            </div>
            <p className="text-neutral-400 pl-8">
              Ensure managed Let&apos;s Encrypt or Cloudflare TLS certificate is active. Next.js is configured with strict canonical base URL <code className="text-blue-400">https://download.scrutium.com</code>.
            </p>
          </section>

          {/* Step 5 */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-mono">5</span>
              <h3>Submit Sitemap to Google Search Console</h3>
            </div>
            <p className="text-neutral-400 pl-8">
              Once DNS propagation completes (typically 5–30 minutes), add the property <code className="text-neutral-200">https://download.scrutium.com</code> in Google Search Console and submit the generated sitemap:
            </p>
            <div className="pl-8">
              <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-lg px-3 py-2 font-mono text-xs text-neutral-300">
                <code>https://download.scrutium.com/sitemap.xml</code>
                <button
                  onClick={() => handleCopy('https://download.scrutium.com/sitemap.xml', 'sitemap-url')}
                  className="text-neutral-400 hover:text-white transition-colors"
                  title="Copy sitemap URL"
                >
                  {copiedKey === 'sitemap-url' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </section>

          {/* Step 6 */}
          <section className="space-y-2 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2 text-emerald-400 font-medium text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Official Destination Link Verification</span>
            </div>
            <div className="pl-6 space-y-1 text-xs text-neutral-400">
              <p>• Main Web Application: <a href={SITE_CONFIG.webAppUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{SITE_CONFIG.webAppUrl}</a></p>
              <p>• Documentation Portal: <a href={SITE_CONFIG.docsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{SITE_CONFIG.docsUrl}</a></p>
              <p>• Canonical Download Portal: <span className="text-blue-400">{SITE_CONFIG.domain}</span></p>
            </div>
          </section>
        </div>

        <div className="mt-8 flex justify-end border-t border-white/10 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
