import { business } from '@/data/business';
import CallButton from '@/components/ui/CallButton';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-ocean-800 py-20 text-white md:py-24">
      <div className="container-page relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-extrabold md:text-4xl">Water Damage at Your Property? Call G&amp;OwaterDamage.</h2>
          <p className="text-lg leading-[1.5] text-navy-100">
            Talk with the team about your water damage, leak, or flooding and find out how they can help. Calling {business.phoneDisplay} is the way to reach us.
          </p>
        </div>
        <CallButton className="w-full md:w-auto" />
      </div>
    </section>
  );
}
