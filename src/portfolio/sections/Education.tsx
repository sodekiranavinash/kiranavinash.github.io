import React from 'react';
import { Section } from '@shared/ui/Section';
import { Container } from '@shared/ui/Container';
import { getEducationContent } from '../content/education';
import { useLocale } from '@shared/context/ThemeContext';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  const { locale } = useLocale();
  const content = getEducationContent(locale);
  const t = content.section;

  return (
    <Section id="education">
      <Container>
      <div className="space-y-4 mb-16 text-center">
        <div className="inline-flex items-center rounded-2xl bg-cyan-100 dark:bg-cyan-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
          <GraduationCap className="w-4 h-4 mr-2" />
          {t.eyebrow}
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          {t.heading}
        </h2>
        <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
          {t.description}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {content.items.map((item) => (
          <article key={item.id} className="group rounded-[1.5rem] border border-slate-200/70 dark:border-slate-800/70 bg-white/85 dark:bg-slate-950/70 p-8 shadow-xl shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.degree}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.organization}</p>
                {item.college ? (
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{item.college}</p>
                ) : null}
              </div>
              <span className="inline-flex rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                {item.period}
              </span>
            </div>

            {item.summary ? (
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.summary}</p>
            ) : null}
          </article>
        ))}
      </div>
      </Container>
    </Section>
  );
};
