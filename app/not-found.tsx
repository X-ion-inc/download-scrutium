import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/download-config';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#07080b] text-neutral-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white font-bold text-sm mx-auto">
          S
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-medium tracking-tight text-white">404</h1>
          <p className="text-sm text-neutral-400">
            The requested page does not exist on the Scrutium download portal.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded-md transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Downloads</span>
          </Link>
          <a
            href={SITE_CONFIG.webAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md transition-colors"
          >
            <span>Try on Web</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
