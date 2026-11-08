import SectionHeading from '@/components/ui/SectionHeading';
import FaqList from '@/components/ui/FaqList';

const homeFaqs = [
  {
    question: 'How quickly should I call after water damage?',
    answer:
      'As soon as it is safe to do so. Standing water and damp materials can spread damage, so an earlier call leaves more options.',
  },
  {
    question: 'Do you serve my town?',
    answer:
      'The towns we serve are listed above. Coverage is confirmed by phone, so call 908-677-5006 with your address.',
  },
  {
    question: 'What should I have ready when I call?',
    answer:
      'Your address, a short description of the water and where it came from, the rooms affected, and whether the water is still active.',
  },
  {
    question: 'Can I book online?',
    answer:
      'No. G&OwaterDamage is reached by phone only. Call 908-677-5006 to talk with the team about your property.',
  },
];

export default function HomeFaqSection() {
  return (
    <section className="bg-navy-50/60 py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading eyebrow="FAQ" title="Common questions before you call" />
        <FaqList items={homeFaqs} />
      </div>
    </section>
  );
}
