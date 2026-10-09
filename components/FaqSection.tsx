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
    <section id="faq" className="py-20 border-t border-neutral-800/80 bg-[#0a0b0e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Direct details regarding installation, platform availability, and web access.
          </p>
        </div>

        <div className="divide-y divide-neutral-800/80 border-t border-b border-neutral-800/80">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between text-left text-sm font-medium text-white hover:text-neutral-200 transition-colors cursor-pointer py-1"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-2.5 pb-2 text-xs sm:text-sm text-neutral-400 leading-relaxed space-y-2">
                    <p>{faq.answer}</p>
                    {faq.question.includes('documentation') && (
                      <div>
                        <a
                          href={SITE_CONFIG.docsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-white hover:underline font-medium text-xs"
                        >
                          <span>Open Documentation Portal</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                    {(faq.question.includes('without installing') ||
                      faq.question.includes('What is Scrutium AI?')) && (
                      <div>
                        <a
                          href={SITE_CONFIG.webAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-white hover:underline font-medium text-xs"
                        >
                          <span>Launch Scrutium on Web (scrutium.com)</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
