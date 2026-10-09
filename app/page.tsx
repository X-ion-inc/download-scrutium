'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PlatformsSection from '@/components/PlatformsSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhyScrutium from '@/components/WhyScrutium';
import InstallationGuide from '@/components/InstallationGuide';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import DeploymentGuideModal from '@/components/DeploymentGuideModal';

export default function HomePage() {
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-neutral-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      <Navbar onOpenDeployGuide={() => setIsDeployGuideOpen(true)} />
      <main className="flex-1">
        <Hero />
        <PlatformsSection />
        <FeaturesSection />
        <WhyScrutium />
        <InstallationGuide />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer onOpenDeployGuide={() => setIsDeployGuideOpen(true)} />

      <DeploymentGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
