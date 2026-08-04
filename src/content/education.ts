import enEducation from '../i18n/en/education.json';
import frEducation from '../i18n/fr/education.json';
import type { Locale } from '../context/ThemeContext';

export interface EducationItem {
  id: string;
  degree: string;
  organization: string;
  college?: string;
  period: string;
  summary?: string;
}

export interface EducationSectionLabels {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface EducationContent {
  section: EducationSectionLabels;
  items: EducationItem[];
}

export const educationContentByLocale: Record<Locale, EducationContent> = {
  en: enEducation as EducationContent,
  fr: frEducation as EducationContent,
};

export const getEducationContent = (locale?: Locale): EducationContent => {
  if (!locale || !educationContentByLocale[locale]) {
    return educationContentByLocale.en;
  }
  return educationContentByLocale[locale];
};
