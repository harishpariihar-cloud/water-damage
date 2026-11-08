import { Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3 rounded-lg" aria-label="G&OwaterDamage home">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-ocean-400 text-navy-950 shadow-md shadow-navy-950/40 transition duration-300 group-hover:scale-105">
        <Droplets className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-white">G&amp;OwaterDamage</span>
        <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
          Elizabeth, NJ
        </span>
      </span>
    </Link>
  );
}
