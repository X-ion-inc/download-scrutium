import {
  MessageSquare,
  PenTool,
  Code2,
  Brain,
  FileSearch,
  RefreshCw,
} from 'lucide-react';
import { FEATURES } from '@/lib/download-config';

export default function FeaturesSection() {
  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'conversations':
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      case 'writing':
        return <PenTool className="w-5 h-5 text-indigo-400" />;
      case 'coding':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'research':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'analysis':
        return <FileSearch className="w-5 h-5 text-emerald-400" />;
      case 'sync':
        return <RefreshCw className="w-5 h-5 text-amber-400" />;
      default:
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="features" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built for thinkers, builders, and problem solvers.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Scrutium AI brings deep reasoning, context preservation, and distraction-free tooling into every platform build.
          </p>
        </div>

        {/* Feature Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl border border-white/[0.08] bg-[#0c101a] p-7 flex flex-col justify-between hover:border-white/[0.18] transition-all group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getFeatureIcon(feature.id)}
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Clean unboxed metadata footer */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] text-xs font-mono text-neutral-400">
                {feature.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
