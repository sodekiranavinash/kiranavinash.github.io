import enEducation from '../i18n/en/education.json';
import type { Locale } from '@shared/context/ThemeContext';
import { loadNamespace } from '../i18n/loadNamespace';

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

export const educationContentByLocale = loadNamespace<EducationContent>('education');

export const getEducationContent = (locale?: Locale): EducationContent => {
  if (!locale || !educationContentByLocale[locale]) {
    return enEducation as EducationContent;
  }
  return educationContentByLocale[locale];
};
