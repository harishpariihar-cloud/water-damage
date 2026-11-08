interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light' }: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <div className={`max-w-3xl space-y-4 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className={`text-sm font-extrabold uppercase tracking-[0.18em] ${isDark ? 'text-cyan-200' : 'text-ocean-600'}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-extrabold md:text-4xl ${isDark ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
      {description && (
        <p className={`text-lg ${isDark ? 'text-navy-100' : 'text-navy-600'}`}>{description}</p>
      )}
    </div>
  );
}
