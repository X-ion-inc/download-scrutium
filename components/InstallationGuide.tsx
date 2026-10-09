'use client';

import { useState } from 'react';
import { Smartphone, Monitor, CheckCircle, Shield, Terminal, Copy, Check } from 'lucide-react';
import { PLATFORMS } from '@/lib/download-config';

export default function InstallationGuide() {
  const [activePlatform, setActivePlatform] = useState<'android' | 'windows'>('android');
  const [copiedCmd, setCopiedCmd] = useState(false);

  const androidConfig = PLATFORMS.find((p) => p.id === 'android')!;
  const windowsConfig = PLATFORMS.find((p) => p.id === 'windows')!;

  const verifyCmd =
    activePlatform === 'windows'
      ? `certutil -hashfile ${windowsConfig.fileName} SHA256`
      : `sha256sum ${androidConfig.fileName}`;

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(verifyCmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="installation" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Installation Walkthrough
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Fast setup in under two minutes.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Follow the platform-specific instructions below to install and verify your Scrutium AI standalone client.
          </p>
        </div>

        {/* Platform guide switcher */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setActivePlatform('android')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activePlatform === 'android'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Android (APK)</span>
            </button>
            <button
              onClick={() => setActivePlatform('windows')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activePlatform === 'windows'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Windows (64-bit)</span>
            </button>
          </div>

          {/* Guide Steps Card */}
          <div className="rounded-2xl border border-white/[0.1] bg-[#0c101a] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {activePlatform === 'android'
                    ? 'Android Direct APK Installation'
                    : 'Windows 64-bit Setup Wizard'}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Package:{' '}
                  <span className="font-mono text-neutral-300">
                    {activePlatform === 'android' ? androidConfig.fileName : windowsConfig.fileName}
                  </span>
                </p>
              </div>
              <span className="text-xs text-emerald-400 font-mono">v1.2.0</span>
            </div>

            {/* Steps list */}
            <div className="space-y-4">
              {activePlatform === 'android' ? (
                <>
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      1
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white">Download the verified APK</p>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Click the download button above or use the Android direct link. The file will save to your device&apos;s Downloads folder.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      2
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white">Allow installation from your browser</p>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        When opening the file, Android may ask: &quot;For your security, your phone is not allowed to install unknown apps from this source.&quot; Tap <strong>Settings</strong> and toggle on <strong>Allow from this source</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      3
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white">Confirm installation & permissions</p>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Tap <strong>Install</strong>. Once completed, tap <strong>Open</strong> to start your Scrutium AI session.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      4
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white">Sign in or connect web account</p>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Sign in to automatically restore and synchronize conversation threads between mobile and web.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      1
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white">Download the Windows setup installer</p>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Click the &quot;Download Installer&quot; button in the platforms section. The 78.4 MB installer will download directly to your PC.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      2
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white">Run the installer</p>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Double-click <code className="text-blue-300">{windowsConfig.fileName}</code>. If Windows SmartScreen appears, click &quot;More info&quot; and select &quot;Run anyway&quot;.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      3
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white">Complete setup</p>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Select your preferred installation directory and finish the setup wizard. A desktop shortcut will be generated automatically.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      4
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white">Launch & configure global hotkey</p>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Launch Scrutium AI from your Start Menu. Use the global shortcut to summon the AI assistant anytime from any application.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Checksum verification box */}
            <div className="rounded-xl border border-white/[0.08] bg-black/50 p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400 flex items-center gap-1.5 font-medium">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>Verify cryptographic checksum in terminal:</span>
                </span>
                <button
                  onClick={handleCopyCmd}
                  className="inline-flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  {copiedCmd ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy command</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-2.5 rounded-lg bg-black/80 border border-white/[0.06] font-mono text-xs text-neutral-300 overflow-x-auto">
                <code>{verifyCmd}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
