'use client';

import { useState } from 'react';
import { X, CheckCircle2, Copy, Check, Cloud } from 'lucide-react';
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
            <div className="flex items-center gap-2 text-white font-medium text-lg">
              <Cloud className="w-5 h-5 text-orange-400" />
              <h2 id="deployment-guide-title" className="tracking-tight">
                Cloudflare Production Deployment Guide
              </h2>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Complete steps to deploy and connect <span className="text-neutral-200 font-mono">downloads.scrutium.com</span> via Cloudflare.
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
          {/* Option 1: Cloudflare Pages */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-5 h-5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center text-[11px] font-mono">1</span>
              <h3>Deploy with Cloudflare Pages</h3>
            </div>
            <p className="text-neutral-400 pl-7 leading-relaxed">
              In Cloudflare Dashboard $\rightarrow$ <strong>Compute (Workers & Pages)</strong> $\rightarrow$ <strong>Create application</strong> $\rightarrow$ <strong>Pages</strong> $\rightarrow$ <strong>Connect to Git</strong>:
            </p>
            <div className="pl-7 space-y-1.5 text-neutral-300">
              <div className="bg-neutral-950 border border-neutral-800 rounded p-3 space-y-1 font-mono text-[11px]">
                <p><span className="text-neutral-500">Framework Preset:</span> Next.js</p>
                <p><span className="text-neutral-500">Build Command:</span> npm run build</p>
                <p><span className="text-neutral-500">Build Output Directory:</span> .next</p>
                <p><span className="text-neutral-500">Node.js Version:</span> 20 or 22</p>
              </div>
              <p className="text-[11px] text-neutral-400">
                *(Note: The build script automatically cleans `.next/cache` to prevent Cloudflare&apos;s 25 MiB file size limit error).*
              </p>
            </div>
          </section>

          {/* Option 2: Environment Variables */}
          <section className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-5 h-5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center text-[11px] font-mono">2</span>
              <h3>Environment Variables in Cloudflare Pages</h3>
            </div>
            <p className="text-neutral-400 pl-7">
              Add the production canonical URL in <strong>Settings</strong> $\rightarrow$ <strong>Environment Variables</strong>:
            </p>
            <div className="pl-7">
              <div className="flex items-center justify-between bg-neutral-950 border border-neutral-800 rounded px-3 py-2 font-mono text-xs text-neutral-300">
                <code>APP_URL = https://downloads.scrutium.com</code>
                <button
                  onClick={() => handleCopy('https://downloads.scrutium.com', 'env-val')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy value"
                >
                  {copiedKey === 'env-val' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </section>

          {/* Option 3: Custom Domain & DNS Record */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-5 h-5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center text-[11px] font-mono">3</span>
              <h3>Attach Custom Subdomain: downloads.scrutium.com</h3>
            </div>
            <p className="text-neutral-400 pl-7 leading-relaxed">
              Under your Cloudflare Pages project $\rightarrow$ <strong>Custom domains</strong>, click <strong>Set up a custom domain</strong> and enter:
            </p>
            <div className="pl-7">
              <div className="flex items-center justify-between bg-neutral-950 border border-neutral-800 rounded px-3 py-2 font-mono text-xs text-neutral-300">
                <code>downloads.scrutium.com</code>
                <button
                  onClick={() => handleCopy('downloads.scrutium.com', 'domain-val')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy domain"
                >
                  {copiedKey === 'domain-val' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
            <p className="text-neutral-400 pl-7 leading-relaxed text-[11px]">
              Cloudflare automatically provisions the CNAME record in your zone DNS for <code className="text-neutral-200">scrutium.com</code> and activates a free SSL/TLS Universal Certificate.
            </p>
          </section>

          {/* Option 4: SSL/TLS & Edge Optimization */}
          <section className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-5 h-5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center text-[11px] font-mono">4</span>
              <h3>Cloudflare SSL/TLS Configuration</h3>
            </div>
            <div className="pl-7 space-y-1 text-neutral-400 text-[11px]">
              <p>• In <strong>SSL/TLS</strong> $\rightarrow$ Set encryption mode to <strong>Full (strict)</strong>.</p>
              <p>• In <strong>Edge Certificates</strong> $\rightarrow$ Toggle <strong>Always Use HTTPS</strong> to ON.</p>
              <p>• In <strong>Network</strong> $\rightarrow$ Enable <strong>HTTP/3 (with QUIC)</strong> and <strong>0-RTT Connection Resumption</strong>.</p>
            </div>
          </section>

          {/* Option 5: Google Search Console */}
          <section className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="w-5 h-5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center text-[11px] font-mono">5</span>
              <h3>Submit Sitemap to Search Engines</h3>
            </div>
            <p className="text-neutral-400 pl-7">
              Once active, submit the sitemap to Google Search Console:
            </p>
            <div className="pl-7">
              <div className="flex items-center justify-between bg-neutral-950 border border-neutral-800 rounded px-3 py-2 font-mono text-xs text-neutral-300">
                <code>https://downloads.scrutium.com/sitemap.xml</code>
                <button
                  onClick={() => handleCopy('https://downloads.scrutium.com/sitemap.xml', 'sitemap-val')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy sitemap URL"
                >
                  {copiedKey === 'sitemap-val' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </section>

          {/* Verification section */}
          <section className="space-y-1.5 border-t border-neutral-800/80 pt-3">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Production Routing Checklist</span>
            </div>
            <div className="pl-5 space-y-1 text-xs text-neutral-400">
              <p>• Canonical Download URL: <span className="text-neutral-300">{SITE_CONFIG.domain}</span></p>
              <p>• Main Web Application: <a href={SITE_CONFIG.webAppUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-300 underline">{SITE_CONFIG.webAppUrl}</a></p>
              <p>• Documentation Portal: <a href={SITE_CONFIG.docsUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-300 underline">{SITE_CONFIG.docsUrl}</a></p>
              <p>• Direct APK Download: <a href={SITE_CONFIG.officialApkDownloadUrl} className="text-neutral-300 underline">scrutium.apk</a></p>
            </div>
          </section>
        </div>

        <div className="mt-6 flex justify-end border-t border-neutral-800/80 pt-3">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
