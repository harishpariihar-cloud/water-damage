import { ArrowDownToLine, CloudRain, Droplets, Layers, Thermometer, Waves, Wrench, type LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CallButton from '@/components/ui/CallButton';

const problems: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ArrowDownToLine,
    title: 'Flooded basements',
    text: 'Groundwater, heavy rain, or a backed-up drain can fill a lower level faster than it can drain.',
  },
  {
    icon: Droplets,
    title: 'Burst or leaking pipes',
    text: 'A leak inside a wall or ceiling can soak materials for days before the stain becomes visible.',
  },
  {
    icon: Wrench,
    title: 'Appliance leaks',
    text: 'Washing machine hoses, dishwashers, and water heaters are common sources of slow, hidden water.',
  },
  {
    icon: CloudRain,
    title: 'Roof-related water intrusion',
    text: 'Damaged shingles, flashing, or gutters can let storm water into ceilings and wall cavities.',
  },
  {
    icon: Waves,
    title: 'Standing water',
    text: 'Water left on floors soaks into subflooring and baseboards, so early removal makes a difference.',
  },
  {
    icon: Thermometer,
    title: 'Damp walls and ceilings',
    text: 'Moisture trapped behind drywall can cause staining, softness, and odors if it is not dried out.',
  },
  {
    icon: Layers,
    title: 'Water-damaged flooring',
    text: 'Warped boards, lifted tiles, and soft subfloors often point to moisture that needs assessment.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-navy-50/60 py-20 md:py-28">
      <div className="container-page space-y-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Common Problems"
            title="Water damage usually has a specific source"
            description="Knowing where the water came from helps determine the right response. Water damage may need a professional assessment, and the approach depends on the source and extent of the damage."
          />
          <CallButton label="Call to describe your situation" variant="outline" className="shrink-0" />
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <li
              key={problem.title}
              className="group rounded-3xl border border-white bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700 transition group-hover:bg-navy-900 group-hover:text-cyan-200">
                <problem.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-extrabold text-navy-900">{problem.title}</h3>
              <p className="mt-3 leading-[1.5] text-navy-600">{problem.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
