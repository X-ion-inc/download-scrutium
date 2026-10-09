import { CAPABILITIES, SITE_CONFIG } from '@/lib/download-config';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="capabilities" className="py-20 border-t border-neutral-800/80 bg-[#0a0b0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Product Capabilities
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Scrutium AI provides focused, responsive intelligence for research, drafting, and technical clarification.
          </p>
        </div>

        {/* 4 Restrained Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, index) => (
            <div
              key={cap.id}
              className="border border-neutral-800/80 bg-[#0d0e13]/80 rounded-xl p-6 space-y-3"
            >
              <div className="text-xs font-mono text-neutral-400">
                {`0${index + 1}`}
              </div>
              <h3 className="text-base font-medium text-white tracking-tight">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-xs text-neutral-400">
          For full documentation on keyboard navigation, settings, and release history, visit{' '}
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
