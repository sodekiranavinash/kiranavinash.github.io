import enSkills from '../i18n/en/skills.json';
import type { Locale } from '@shared/context/ThemeContext';
import { loadNamespace } from '../i18n/loadNamespace';

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

export const skillsContentByLocale = loadNamespace<SkillsContent>('skills');

export const skillsContent: SkillsContent = skillsContentByLocale.en;

export const getSkillsContent = (locale?: Locale): SkillsContent => {
  if (!locale || !skillsContentByLocale[locale]) {
    return enSkills as SkillsContent;
  }
  return skillsContentByLocale[locale];
};
