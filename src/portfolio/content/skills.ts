import enSkills from '../i18n/en/skills.json';
import frSkills from '../i18n/fr/skills.json';
import type { Locale } from '@shared/context/ThemeContext';

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: SkillItem[];
}

export interface SkillsSectionLabels {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface SkillsContent {
  section: SkillsSectionLabels;
  categories: SkillCategory[];
}

export const skillsContentByLocale: Record<Locale, SkillsContent> = {
  en: enSkills as SkillsContent,
  fr: frSkills as SkillsContent,
};

export const skillsContent: SkillsContent = skillsContentByLocale.en;

export const getSkillsContent = (locale?: Locale): SkillsContent => {
  if (!locale || !skillsContentByLocale[locale]) {
    return skillsContentByLocale.en;
  }
  return skillsContentByLocale[locale];
};
