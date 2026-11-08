import { ArrowRight, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { getServiceAreaPage, type ServiceAreaPage as AreaPage } from '@/data/serviceAreas';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CallButton from '@/components/ui/CallButton';
import FaqList from '@/components/ui/FaqList';
import FinalCta from '@/components/ui/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
import NotFoundPage from '@/pages/NotFoundPage';

export default function ServiceAreaPage() {
  const { slug = '' } = useParams();
  const page = getServiceAreaPage(slug);

  if (!page) return <NotFoundPage />;
  return <ServiceAreaContent page={page} />;
}

function ServiceAreaContent({ page }: { page: AreaPage }) {
  useSeo({ title: page.title, description: page.description, path: `/${page.slug}` });

  return (
    <>
      <PageHeader
        eyebrow="Service Area"
        title={page.h1}
        description={`Water damage restoration for ${page.areaName}. Call to confirm coverage for your address.`}
      >
        <CallButton />
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-base font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
        >
          Explore Our Services
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </PageHeader>
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Service Areas', to: '/service-areas' },
          { label: page.areaName },
        ]}
      />

      <section className="py-20 md:py-24">
        <div className="container-page max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-ocean-50 px-4 py-2 text-sm font-bold text-ocean-700">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {page.areaName}, NJ
          </span>
          {page.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-lg leading-[1.5] text-navy-700">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-navy-50/60 py-20 md:py-24">
        <div className="container-page space-y-12">
          <SectionHeading eyebrow="Considerations" title={`Water damage in ${page.areaName}`} />
          <ul className="grid gap-6 md:grid-cols-3">
            {page.considerations.map((item) => (
              <li key={item} className="rounded-3xl border border-white bg-white p-8 leading-[1.5] text-navy-700 shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="FAQ" title={`Questions about ${page.areaName}`} />
          <FaqList items={page.faqs} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
