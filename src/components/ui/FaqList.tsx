import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-navy-100 rounded-3xl border border-navy-100 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-6 py-5 md:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-extrabold text-navy-900 marker:content-none">
            {item.question}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-ocean-600 transition duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="pt-4 leading-[1.5] text-navy-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
