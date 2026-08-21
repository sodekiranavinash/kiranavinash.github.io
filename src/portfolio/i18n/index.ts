import { DEFAULT_LOCALE, type Locale } from './locales';
import { loadNamespace } from './loadNamespace';
import type { AboutContent } from '../content/about';
import type { CommonContent } from '../content/common';
import type { EducationContent } from '../content/education';
import type { ExperienceContent } from '../content/experience';
import type { ProjectsContent } from '../content/projects';
import type { RecommendationsContent } from '../content/recommendations';
import type { ResumeContent } from '../content/resume';
import type { SkillsContent } from '../content/skills';

export type { Locale } from './locales';
export {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_NATIVE_NAMES,
  isLocale,
} from './locales';

const about = loadNamespace<AboutContent>('about');
const projects = loadNamespace<ProjectsContent>('projects');
const skills = loadNamespace<SkillsContent>('skills');
const common = loadNamespace<CommonContent>('common');
const resume = loadNamespace<ResumeContent>('resume');
const recommendations = loadNamespace<RecommendationsContent>('recommendations');
const experience = loadNamespace<ExperienceContent>('experience');
const education = loadNamespace<EducationContent>('education');

export const getBundle = (locale: Locale) => ({
  about: about[locale] ?? about[DEFAULT_LOCALE],
  projects: projects[locale] ?? projects[DEFAULT_LOCALE],
  skills: skills[locale] ?? skills[DEFAULT_LOCALE],
  common: common[locale] ?? common[DEFAULT_LOCALE],
  resume: resume[locale] ?? resume[DEFAULT_LOCALE],
  recommendations: recommendations[locale] ?? recommendations[DEFAULT_LOCALE],
  experience: experience[locale] ?? experience[DEFAULT_LOCALE],
  education: education[locale] ?? education[DEFAULT_LOCALE],
});

export default getBundle;
