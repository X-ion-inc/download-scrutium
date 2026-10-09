import { WHY_SCRUTIUM, SITE_CONFIG } from '@/lib/download-config';
import { ArrowUpRight } from 'lucide-react';

export default function WhyScrutium() {
  return (
    <section className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Value Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Why Standalone
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Designed for sustained focus and zero friction.
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              While the web client is always ready at scrutium.com, our native builds for Windows and Android are engineered for creators who want an immediate, isolated workspace without browser overhead.
            </p>
            <div className="pt-2">
              <a
                href={SITE_CONFIG.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Read technical documentation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Practical Benefits List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_SCRUTIUM.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#0c101a] p-6 space-y-3"
              >
                <div className="text-xs font-mono text-blue-400 font-semibold">
                  {`0${index + 1}.`}
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
