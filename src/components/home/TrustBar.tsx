import { Building2, Droplets, MapPin, Phone } from 'lucide-react';
import { business } from '@/data/business';

const items = [
  { icon: Building2, label: 'Business', value: business.name },
  { icon: Droplets, label: 'Category', value: business.category },
  { icon: MapPin, label: 'Location', value: `${business.locality}, ${business.region}` },
  { icon: Phone, label: 'Phone', value: business.phoneDisplay, href: business.phoneHref },
];

export default function TrustBar() {
  return (
    <section aria-label="Business information" className="relative -mt-12 z-10">
      <div className="container-page">
        <dl className="grid gap-4 rounded-3xl border border-navy-100 bg-white p-4 shadow-xl shadow-navy-900/10 sm:grid-cols-2 md:p-6 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-2xl p-4 transition hover:bg-ocean-50">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-cyan-200">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-navy-500">{item.label}</dt>
                <dd className="font-extrabold text-navy-900">
                  {item.href ? (
                    <a href={item.href} className="text-ocean-700 hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
