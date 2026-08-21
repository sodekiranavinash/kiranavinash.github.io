import React from 'react';
import { motion } from 'framer-motion';
import useI18n from '../../i18n/useI18n';
import { useLocale } from '@shared/context/ThemeContext';
import { getResumeContent } from '../../content/resume';
import { Container } from '@shared/ui/Container';
import { Section } from '@shared/ui/Section';
import { AboutIntro } from './AboutIntro';
import { AboutBio } from './AboutBio';

export const About: React.FC = () => {
  const bundle = useI18n();
  const { locale } = useLocale();
  const hero = bundle.about.hero;
  const t = bundle.about.section;
  const resumeContent = getResumeContent(locale);

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
            email={bundle.about.email}
            emailLabel={bundle.about.emailLabel}
            socialLinks={bundle.about.socialLinks || []}
          />

          <div className="max-w-3xl space-y-3 border-t border-default pt-8">
            <h2 className="font-display text-xl font-medium text-fg sm:text-2xl">
              {t.aboutLabel}
            </h2>
            <AboutBio paragraphs={bundle.about.bioParagraphs || []} />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
