import { useSeo } from '@/hooks/useSeo';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import ServicesSection from '@/components/home/ServicesSection';
import ProblemsSection from '@/components/home/ProblemsSection';
import ProcessSection from '@/components/home/ProcessSection';
import FirstStepsSection from '@/components/home/FirstStepsSection';
import { AreasPreview, ReviewsPreview } from '@/components/home/PreviewSections';
import TownsSection from '@/components/home/TownsSection';
import HomeFaqSection from '@/components/home/HomeFaqSection';
import FinalCta from '@/components/ui/FinalCta';

export default function HomePage() {
  useSeo({
    title: 'Water Damage Restoration in Elizabeth, NJ | G&OwaterDamage',
    description:
      'Water damage restoration in Elizabeth and Elizabethport, NJ. Call G&OwaterDamage at 908-677-5006 to discuss flooding, leaks, and property restoration.',
    path: '/',
  });

  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProblemsSection />
      <FirstStepsSection />
      <ProcessSection />
      <ReviewsPreview />
      <AreasPreview />
      <TownsSection />
      <HomeFaqSection />
      <FinalCta />
    </>
  );
}
