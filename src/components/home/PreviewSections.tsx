import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business } from '@/data/business';
import { serviceLocationPages } from '@/data/serviceLocationPages';
import { services } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';

export function ReviewsPreview() {
  return (
    <section className="bg-navy-900 py-20 text-white md:py-24">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
        <SectionHeading
          tone="dark"
          eyebrow="Customer Reviews"
          title="Read what customers say on Google"
          description="Reviews for G&OwaterDamage are published on our Google Maps listing. Read them there before you call."
        />
        <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8">
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-extrabold text-navy-900 transition duration-300 hover:-translate-y-0.5 hover:bg-navy-50"
          >
            View reviews on Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link to="/reviews" className="inline-flex items-center justify-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-white">
            More about reviews
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AreasPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page space-y-14">
        <SectionHeading
          eyebrow="Service Areas"
          title="Serving Elizabeth and Elizabethport, NJ"
          description="Our main service area is Elizabeth, including the Elizabethport neighborhood where our office is located."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Link
            to="/service-areas#elizabeth-nj"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-navy-900 p-8 text-white shadow-xl shadow-navy-900/20 transition duration-500 hover:-translate-y-1 md:p-10"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-300/15 px-4 py-2 text-sm font-bold text-cyan-100">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Main service area
              </span>
              <h3 className="text-3xl font-extrabold">Elizabeth, NJ</h3>
              <p className="max-w-md leading-[1.5] text-navy-100">
                Water damage restoration, water extraction, and structural drying for homes and businesses across Elizabeth and Elizabethport.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 font-extrabold text-cyan-200 transition group-hover:text-white">
              See Elizabeth service details
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
          <ul className="grid gap-4">
            {serviceLocationPages.map((page) => {
              const service = services.find((item) => item.slug === page.serviceSlug);
              return (
                <li key={page.slug}>
                  <Link
                    to={`/${page.slug}`}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-navy-100 bg-white px-6 py-5 font-bold text-navy-900 transition duration-300 hover:border-ocean-300 hover:bg-ocean-50 hover:text-ocean-800"
                  >
                    {service?.name} in Elizabeth, NJ
                    <ArrowRight className="h-5 w-5 shrink-0 text-ocean-600" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
