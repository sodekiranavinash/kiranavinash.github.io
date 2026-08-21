import React, { useState } from 'react';
import { getExperienceContent } from '../../content/experience';
import { useLocale } from '@shared/context/ThemeContext';
import { Container } from '@shared/ui/Container';
import { Section } from '@shared/ui/Section';
import { SectionHeader } from '@shared/ui/SectionHeader';
import { Modal } from '../../components/Modal';
import { ExperienceCard } from './ExperienceCard';

export const Experience: React.FC = () => {
  const { locale } = useLocale();
  const content = getExperienceContent(locale);
  const t = content.section;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const active = selectedId ? content.items.find((item) => item.id === selectedId) : null;

  return (
    <Section id="experience" tone="base">
      <Container>
        <SectionHeader title={t.heading} description={t.description} />
        <div className="grid gap-4 lg:grid-cols-3">
          {content.items.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
              readMoreLabel={t.readMore}
              onReadMore={setSelectedId}
            />
          ))}
        </div>
      </Container>

      <Modal
        open={Boolean(active)}
        onClose={() => setSelectedId(null)}
        title={active?.roleOrDegree ?? ''}
        closeLabel={t.close}
      >
        {active ? (
          <div className="space-y-6">
            <p className="text-sm text-subtle">{active.organization}</p>

            {active.roleAndResponsibilities?.length ? (
              <div>
                <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">
                  {t.roleAndResponsibilities}
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {active.roleAndResponsibilities.map((detail, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-[var(--border-focus)]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {active.projectHighlights?.length ? (
              <div>
                <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">{t.projects}</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {active.projectHighlights.map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-[var(--border-focus)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </Section>
  );
};
