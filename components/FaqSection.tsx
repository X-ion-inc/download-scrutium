'use client';

import { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { FAQS, SITE_CONFIG } from '@/lib/download-config';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Everything you need to know.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Direct answers regarding installation, platform support, and official links.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-white/[0.08] bg-[#0c101a] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/[0.04] pt-3">
                    <p>{faq.answer}</p>
                    {faq.question.includes('documentation') && (
                      <div className="mt-2.5">
                        <a
                          href={SITE_CONFIG.docsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium underline"
                        >
                          <span>Visit Documentation Portal</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                    {(faq.question.includes('without installing') ||
                      faq.question.includes('What is Scrutium AI?')) && (
                      <div className="mt-2.5">
                        <a
                          href={SITE_CONFIG.webAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium underline"
                        >
                          <span>Open Scrutium on the Web (scrutium.com)</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs text-neutral-400">
          Have an unanswered technical question? Explore our comprehensive guides at{' '}
          <a
            href={SITE_CONFIG.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            documentation.scrutium.com
          </a>
          .
        </div>
      </div>
    </section>
  );
}
