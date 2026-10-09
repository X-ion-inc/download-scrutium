'use client';

import { useState } from 'react';
import { Download, ArrowUpRight, Code2, Sparkles, FileText, Send, Terminal, Check, Bot } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/download-config';

interface PreviewTab {
  id: string;
  label: string;
  userPrompt: string;
  responseHeadline: string;
  codeSnippet?: string;
  explanation: string;
  bullets: string[];
}

const PREVIEW_TABS: PreviewTab[] = [
  {
    id: 'code',
    label: 'Code & Debugging',
    userPrompt: 'Help me optimize this async worker pool and clarify the throughput bottlenecks.',
    responseHeadline: 'Optimized Worker Pool with Adaptive Backpressure',
    codeSnippet: `export class TaskWorkerPool<T, R> {
  private queue: Array<() => Promise<R>> = [];
  private activeCount = 0;

  constructor(private readonly maxConcurrency = 8) {}

  async submit(task: () => Promise<R>): Promise<R> {
    if (this.activeCount >= this.maxConcurrency) {
      await new Promise(resolve => this.queue.push(resolve as any));
    }
    this.activeCount++;
    try {
      return await task();
    } finally {
      this.activeCount--;
      if (this.queue.length > 0) this.queue.shift()?.();
    }
  }
}`,
    explanation: 'By replacing unthrottled Promise.all with queue-bounded dispatch, you eliminate micro-task exhaustion and stabilize memory consumption under burst traffic.',
    bullets: [
      'Zero unbounded heap allocations during batch loads',
      'Bounded thread contention on CPU-intensive jobs',
    ],
  },
  {
    id: 'synthesis',
    label: 'Writing & Summarization',
    userPrompt: 'Draft an executive synthesis on our quarterly engineering migration to edge compute.',
    responseHeadline: 'Quarterly Architecture Brief: Edge Migration',
    explanation: 'Over the last 90 days, routing 42% of latency-sensitive queries to regional edge workers reduced 99th-percentile response times from 340ms to 48ms, while lowering egress infrastructure costs by 18%.',
    bullets: [
      'P99 round-trip latency decreased by 85.8%',
      'Regional failover redundancy achieved across 12 zones',
      'Seamless backward compatibility with legacy REST endpoints',
    ],
  },
  {
    id: 'research',
    label: 'Analysis & Reasoning',
    userPrompt: 'Synthesize the key architectural tradeoffs between SQLite vector extensions vs. dedicated vector databases.',
    responseHeadline: 'Vector Storage Tradeoff Evaluation',
    explanation: 'For local or embedded client applications with under 100k embeddings, an in-process SQLite vector extension eliminates network round-trips and requires zero separate process management.',
    bullets: [
      'Embedded: Zero network latency, single-file backups, instant offline query execution',
      'Dedicated: Scale beyond 10M embeddings, horizontal clustering, specialized GPU indexing',
    ],
  },
];

export default function Hero() {
  const [activeTabId, setActiveTabId] = useState<string>('code');
  const activeTab = PREVIEW_TABS.find((t) => t.id === activeTabId) || PREVIEW_TABS[0];

  const scrollToPlatforms = () => {
    const el = document.getElementById('platforms');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background radial gradient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-600/15 via-indigo-600/5 to-transparent blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Metadata Discipline: Clean unboxed text with typographic separators (NO PILL BOXES) */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-neutral-400">
            <span>Official Portal</span>
            <span aria-hidden="true">·</span>
            <span>Android Universal APK</span>
            <span aria-hidden="true">·</span>
            <span>Windows 64-bit Installer</span>
            <span aria-hidden="true">·</span>
            <span>Version {SITE_CONFIG.currentReleaseVersion}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-[1.12]">
            Scrutium AI.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-200">
              Intelligence that moves with you.
            </span>
          </h1>

          {/* Supporting description */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Meet Scrutium, your AI assistant for exploring ideas, solving problems, writing, learning, coding, and getting more done. Download the app and take your AI experience wherever you go.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={scrollToPlatforms}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all whitespace-nowrap cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Scrutium</span>
            </button>
            <a
              href={SITE_CONFIG.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] rounded-xl transition-all whitespace-nowrap"
            >
              <span>Try on Web</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
          </div>

          <div className="pt-2 text-xs text-neutral-400">
            Also accessible via browser at{' '}
            <a
              href={SITE_CONFIG.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              scrutium.com
            </a>
            {' '}without installing.
          </div>
        </div>

        {/* Polished Illustrative Mockup Preview of the Scrutium App */}
        <div className="mt-14 sm:mt-18 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/[0.12] bg-[#0c101a] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Window title bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-[#090d16]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-neutral-400 hidden sm:inline">
                  Scrutium AI Desktop — v1.2.0
                </span>
              </div>

              {/* Functional interactive workflow preview selector */}
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/[0.05]">
                {PREVIEW_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      activeTabId === tab.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="text-xs text-neutral-400 font-mono hidden md:block">
                Illustrative Client Preview
              </div>
            </div>

            {/* App Body Preview */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px]">
              {/* Left Sidebar Preview */}
              <div className="hidden md:block md:col-span-4 border-r border-white/[0.08] p-4 bg-[#0a0e18]/60 space-y-4">
                <div className="flex items-center justify-between text-xs font-medium text-neutral-400 px-2">
                  <span>Recent Conversations</span>
                  <span className="text-neutral-400">Synced</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/30 text-white font-medium">
                    <p className="truncate">TaskWorkerPool optimization</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Desktop App · Just now</p>
                  </div>
                  <div className="p-2.5 rounded-lg hover:bg-white/[0.03] text-neutral-400 transition-colors">
                    <p className="truncate">Quarterly Architecture Brief</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Web Sync · Yesterday</p>
                  </div>
                  <div className="p-2.5 rounded-lg hover:bg-white/[0.03] text-neutral-400 transition-colors">
                    <p className="truncate">SQLite Vector Benchmarks</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Android Sync · 2d ago</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/[0.06] text-xs text-neutral-400 px-2 space-y-1">
                  <p className="text-neutral-300 font-medium">Native Capabilities</p>
                  <p>• Global shortcut invocation</p>
                  <p>• Offline prompt caching</p>
                  <p>• Hardware accelerated render</p>
                </div>
              </div>

              {/* Main Chat Feed */}
              <div className="md:col-span-8 p-5 sm:p-7 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  {/* User message */}
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs font-medium text-neutral-300 shrink-0">
                      You
                    </div>
                    <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-3.5 text-xs sm:text-sm text-neutral-200 leading-relaxed max-w-xl">
                      {activeTab.userPrompt}
                    </div>
                  </div>

                  {/* Scrutium response */}
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-xs font-bold text-blue-400 shrink-0">
                      S
                    </div>
                    <div className="space-y-3 max-w-xl text-xs sm:text-sm">
                      <div className="text-white font-medium text-sm">
                        {activeTab.responseHeadline}
                      </div>

                      <p className="text-neutral-300 leading-relaxed">
                        {activeTab.explanation}
                      </p>

                      {activeTab.codeSnippet && (
                        <div className="rounded-lg bg-black/70 border border-white/[0.1] p-3.5 font-mono text-xs text-blue-200 overflow-x-auto leading-relaxed">
                          <pre>{activeTab.codeSnippet}</pre>
                        </div>
                      )}

                      <div className="space-y-1 pt-1">
                        {activeTab.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-neutral-400 text-xs">
                            <span className="text-blue-400 font-bold">✓</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input bar preview */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="flex items-center gap-2 bg-black/40 border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs text-neutral-400">
                    <span className="text-neutral-400 flex-1">
                      Type your prompt or question in Scrutium...
                    </span>
                    <button
                      onClick={scrollToPlatforms}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                    >
                      Download Client
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
