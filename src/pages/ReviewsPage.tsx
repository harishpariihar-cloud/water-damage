import { ExternalLink, Star } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { business } from '@/data/business';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CallButton from '@/components/ui/CallButton';
import FinalCta from '@/components/ui/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ReviewsPage() {
  useSeo({
    title: 'Customer Reviews | G&OwaterDamage, Elizabethport NJ',
    description:
      'Read customer reviews for G&OwaterDamage on Google Maps, then call 908-677-5006 to talk about your water damage in Elizabeth, NJ.',
    path: '/reviews',
  });

  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="Customer reviews for G&OwaterDamage"
        description="Our reviews are published on Google. Read them on our Google Maps listing to see what customers have shared directly."
      >
        <CallButton />
      </PageHeader>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]} />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Google Reviews"
            title="Read reviews on our Google Maps listing"
            description="Reviews are shown on our Google Maps profile, where you can see the most recent feedback and the full list of reviews."
          />
          <div className="flex flex-col gap-6 rounded-3xl border border-navy-100 bg-white p-8 shadow-xl shadow-navy-900/5 md:p-12">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-cyan-200">
              <Star className="h-7 w-7" aria-hidden="true" />
            </span>
            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold text-navy-900">G&amp;OwaterDamage on Google</h2>
              <p className="leading-[1.5] text-navy-600">
                {business.addressLine}
              </p>
            </div>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-navy-800"
            >
              Read our reviews on Google
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
