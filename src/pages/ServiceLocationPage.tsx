import { ArrowRight, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { getService, type Service } from '@/data/services';
import { getServiceLocationPage, type ServiceLocationPage as LocationPage } from '@/data/serviceLocationPages';
import PageHeader from '@/components/layout/PageHeader';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CallButton from '@/components/ui/CallButton';
import FaqList from '@/components/ui/FaqList';
import FinalCta from '@/components/ui/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
import NotFoundPage from '@/pages/NotFoundPage';

export default function ServiceLocationPage() {
  const { slug = '' } = useParams();
  const page = getServiceLocationPage(slug);
  const service = page ? getService(page.serviceSlug) : undefined;

  if (!page || !service) return <NotFoundPage />;
  return <ServiceLocationContent page={page} service={service} />;
}

function ServiceLocationContent({ page, service }: { page: LocationPage; service: Service }) {
  useSeo({ title: page.title, description: page.description, path: `/${page.slug}` });

  const related = page.relatedSlugs.flatMap((slug) => {
    const relatedPage = getServiceLocationPage(slug);
    const relatedService = relatedPage ? getService(relatedPage.serviceSlug) : undefined;
    return relatedPage && relatedService ? [{ page: relatedPage, service: relatedService }] : [];
  });

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.h1} description={service.summary}>
        <CallButton />
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-base font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
        >
          Explore Water Damage Services
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </PageHeader>
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: `${service.name} in Elizabeth, NJ` },
        ]}
      />

      <section className="container-page pt-12">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="aspect-[16/9] w-full rounded-3xl object-cover shadow-2xl shadow-navy-900/20 md:aspect-[21/9]"
        />
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page max-w-3xl space-y-6">
          {page.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-lg leading-[1.5] text-navy-700">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-navy-50/60 py-20 md:py-24">
        <div className="container-page space-y-12">
          <SectionHeading eyebrow="Causes" title={page.causesHeading} />
          <ul className="grid gap-6 md:grid-cols-2">
            {page.causes.map((cause) => (
              <li key={cause.title} className="rounded-3xl border border-white bg-white p-8 shadow-sm">
                <h3 className="text-xl font-extrabold text-navy-900">{cause.title}</h3>
                <p className="mt-3 leading-[1.5] text-navy-600">{cause.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <SectionHeading eyebrow="Considerations" title={page.considerationsHeading} />
            <ul className="space-y-4">
              {page.considerations.map((item) => (
                <li key={item} className="flex gap-4 leading-[1.5] text-navy-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-ocean-700">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8 rounded-3xl bg-navy-900 p-8 text-white md:p-10">
            <h2 className="text-2xl font-extrabold">{page.workHeading}</h2>
            <ul className="space-y-4">
              {page.workIncludes.map((item) => (
                <li key={item} className="flex gap-4 leading-[1.5] text-navy-100">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-navy-950">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <CallButton label={service.callLabel} className="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <FaqList items={page.faqs} />
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page space-y-8">
          <h2 className="text-2xl font-extrabold text-navy-900 md:text-3xl">Related services in Elizabeth, NJ</h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <li key={item.page.slug}>
                <Link
                  to={`/${item.page.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-3xl border border-navy-100 bg-white p-7 font-extrabold text-navy-900 transition duration-300 hover:-translate-y-1 hover:border-ocean-300 hover:shadow-lg hover:shadow-navy-900/5"
                >
                  {item.service.name} in Elizabeth, NJ
                  <ArrowRight className="h-5 w-5 shrink-0 text-ocean-600 transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/service-areas#elizabeth-nj"
            className="inline-flex items-center gap-2 font-bold text-ocean-700 transition hover:text-ocean-900 hover:underline"
          >
            Read about our Elizabeth, NJ service area
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
