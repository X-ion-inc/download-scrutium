'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PlatformsSection from '@/components/PlatformsSection';
import FeaturesSection from '@/components/FeaturesSection';
import InstallationGuide from '@/components/InstallationGuide';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import DeploymentGuideModal from '@/components/DeploymentGuideModal';

export default function HomePage() {
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07080b] text-neutral-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
      <Navbar onOpenDeployGuide={() => setIsDeployGuideOpen(true)} />
      <main className="flex-1">
        <Hero />
        <PlatformsSection />
        <FeaturesSection />
        <InstallationGuide />
        <FaqSection />
      </main>
      <Footer onOpenDeployGuide={() => setIsDeployGuideOpen(true)} />

      <DeploymentGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
