import enExperience from '../i18n/en/experience.json';
import frExperience from '../i18n/fr/experience.json';
import type { Locale } from '@shared/context/ThemeContext';
import type { TimelineItem } from './resume';

export interface ExperienceSectionLabels {
  heading: string;
  description: string;
  readMore: string;
  close: string;
  roleAndResponsibilities: string;
  projects: string;
}

export interface ExperienceContent {
  section: ExperienceSectionLabels;
  items: TimelineItem[];
}

export const experienceContentByLocale: Record<Locale, ExperienceContent> = {
  en: enExperience as ExperienceContent,
  fr: frExperience as ExperienceContent,
};

export const getExperienceContent = (locale?: Locale): ExperienceContent => {
  if (!locale || !experienceContentByLocale[locale]) {
    return experienceContentByLocale.en;
  }
  return experienceContentByLocale[locale];
};
