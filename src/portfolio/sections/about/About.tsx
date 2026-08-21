import React from 'react';
import { motion } from 'framer-motion';
import useI18n from '../../i18n/useI18n';
import { useLocale } from '@shared/context/ThemeContext';
import { getResumeContent } from '../../content/resume';
import { getEducationContent } from '../../content/education';
import { Container } from '@shared/ui/Container';
import { Section } from '@shared/ui/Section';
import { AboutIntro } from './AboutIntro';
import { AboutBio } from './AboutBio';
import { AboutMetrics } from './AboutMetrics';
import { AboutEducation } from './AboutEducation';
import { AboutConnect } from './AboutConnect';

export const About: React.FC = () => {
  const bundle = useI18n();
  const { locale } = useLocale();
  const hero = bundle.about.hero;
  const t = bundle.about.section;
  const resumeContent = getResumeContent(locale);
  const educationContent = getEducationContent(locale);

  return (
    <Section id="about" tone="base" className="py-16 pt-28 md:py-20 md:pt-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="w-full space-y-10"
        >
          <AboutIntro
            name={bundle.about.name}
            title={bundle.about.title}
            resumeUrl={resumeContent.resumeUrl}
            downloadCvLabel={hero.downloadCv}
            viewWorkLabel={hero.viewWork}
          />

          <div className="space-y-6 border-t border-default pt-8">
            <h2 className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">
              {t.aboutLabel}
            </h2>
            <AboutBio paragraphs={bundle.about.bioParagraphs || []} />
            <AboutMetrics metrics={(bundle.about.metrics || []).slice(0, 3)} />
            <AboutEducation label={t.educationLabel} education={educationContent.items[0]} />
          </div>

          <AboutConnect
            label={t.socialLabel}
            text={bundle.about.connect.text}
            email={bundle.about.email}
            links={bundle.about.socialLinks || []}
          />
        </motion.div>
      </Container>
    </Section>
  );
};
