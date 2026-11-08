import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceAreas } from '@/data/serviceAreas';
import SectionHeading from '@/components/ui/SectionHeading';

export default function TownsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page space-y-12">
        <SectionHeading
          eyebrow="Towns We Serve"
          title="Find water damage help in your town"
          description="Choose your town to see local details. Coverage is confirmed by phone for your address."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {serviceAreas.map((area) => (
            <li key={area.name}>
              <Link
                to={area.path}
                className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-navy-100 bg-white px-5 py-4 font-bold text-navy-900 transition duration-300 hover:-translate-y-0.5 hover:border-ocean-300 hover:bg-ocean-50 hover:text-ocean-800"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-ocean-600" aria-hidden="true" />
                  {area.name}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-ocean-600 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
