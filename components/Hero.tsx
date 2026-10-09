'use client';

import { useState } from 'react';
import { ArrowUpRight, Download, Check, Sparkles, Bell } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/download-config';

export default function Hero() {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notified, setNotified] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail || !notifyEmail.includes('@')) return;
    setNotified(true);
    setTimeout(() => {
      setNotifyEmail('');
    }, 3000);
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          {/* Release metadata kicker */}
          <div className="text-xs font-mono text-neutral-400 tracking-wide uppercase">
            Official Release {SITE_CONFIG.currentReleaseVersion} · Mobile Standalone
          </div>

          {/* Confident, restrained headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
            Scrutium, wherever you work.
          </h1>

          {/* Measured supporting description */}
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            {SITE_CONFIG.subheadline}
          </p>

          {/* Primary & secondary actions */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href={SITE_CONFIG.officialApkDownloadUrl}
              download="scrutium.apk"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Scrutium (Mobile App)</span>
            </a>
            <a
              href={SITE_CONFIG.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/70 rounded-md transition-colors"
            >
              <span>Try on Web</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
            </a>
          </div>
        </div>

        {/* Desktop App Coming Soon Creative Feature Ad */}
        <div className="mt-14 pt-10 border-t border-neutral-800/80">
          <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-[#0d0e13] p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400/90"></span>
                  <span>Announcement · Coming Soon</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                  Scrutium Desktop for Mac & Windows
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  We are engineering a standalone desktop application featuring global hotkey summoning, lightning-fast keyboard workflows, and dedicated process isolation.{' '}
                  <span className="text-neutral-200 font-medium">
                    Note: The desktop app is not ready yet and is coming soon.
                  </span>
                </p>
                <p className="text-[11px] text-neutral-400">
                  In the meantime, run Scrutium in your desktop browser or download the mobile app.
                </p>
              </div>

              <div className="space-y-3 shrink-0 lg:max-w-xs w-full">
                <a
                  href={SITE_CONFIG.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-colors"
                >
                  <span>Use Web Version at scrutium.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>

                {/* Email notification interest form */}
                <form onSubmit={handleNotify} className="flex items-center gap-2">
                  <input
                    type="email"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    placeholder="Email for desktop launch..."
                    disabled={notified}
                    className="flex-1 bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600"
                  />
                  <button
                    type="submit"
                    disabled={notified}
                    className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {notified ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400">
                        <Check className="w-3 h-3" />
                        <span>Saved</span>
                      </span>
                    ) : (
                      'Notify Me'
                    )}
                  </button>
                </form>
                {notified && (
                  <p className="text-[10px] text-emerald-400 font-mono">
                    You will be notified as soon as desktop builds enter preview.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
