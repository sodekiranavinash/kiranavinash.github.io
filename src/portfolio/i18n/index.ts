import aboutEn from './en/about.json';
import projectsEn from './en/projects.json';
import skillsEn from './en/skills.json';
import commonEn from './en/common.json';
import resumeEn from './en/resume.json';
import recommendationsEn from './en/recommendations.json';
import experienceEn from './en/experience.json';
import educationEn from './en/education.json';

import aboutFr from './fr/about.json';
import projectsFr from './fr/projects.json';
import skillsFr from './fr/skills.json';
import commonFr from './fr/common.json';
import resumeFr from './fr/resume.json';
import recommendationsFr from './fr/recommendations.json';
import experienceFr from './fr/experience.json';
import educationFr from './fr/education.json';

export type Locale = 'en' | 'fr';

const bundles: Record<Locale, any> = {
  en: {
    about: aboutEn,
    projects: projectsEn,
    skills: skillsEn,
    common: commonEn,
    resume: resumeEn,
    recommendations: recommendationsEn,
    experience: experienceEn,
    education: educationEn,
  },
  fr: {
    about: aboutFr,
    projects: projectsFr,
    skills: skillsFr,
    common: commonFr,
    resume: resumeFr,
    recommendations: recommendationsFr,
    experience: experienceFr,
    education: educationFr,
  },
};

export const getBundle = (locale: Locale) => bundles[locale] || bundles.en;

export default getBundle;
