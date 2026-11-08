import { services } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page space-y-14">
        <SectionHeading
          eyebrow="Our Services"
          title="Water damage services in Elizabeth, NJ"
          description="Each service below has its own page with details on causes, considerations, and what the work involves. Call to talk through your property."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
