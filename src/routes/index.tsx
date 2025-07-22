import { createFileRoute } from '@tanstack/react-router';

import Header from '@/components/home/header';
import HeroSection from '@/components/home/hero-section';
import PromiseSection from '@/components/home/promise-section';
import AudienceSection from '@/components/home/audience-section';
import ProductSection from '@/components/home/product-section';
import BenefitsSection from '@/components/home/benefit-section';
import PartnersSection from '@/components/home/partner-section';
import WaitlistSection from '@/components/home/waitlist-section';
import Footer from '@/components/home/footer';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PromiseSection />
      <AudienceSection />
      <ProductSection />
      <BenefitsSection />
      <PartnersSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
