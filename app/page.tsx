'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PlatformsSection from '@/components/PlatformsSection';
import FeaturesSection from '@/components/FeaturesSection';
import InstallationGuide from '@/components/InstallationGuide';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#07080b] text-neutral-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PlatformsSection />
        <FeaturesSection />
        <InstallationGuide />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
