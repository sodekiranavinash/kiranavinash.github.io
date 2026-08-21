import enResume from '../i18n/en/resume.json';
import type { Locale } from '@shared/context/ThemeContext';
import { LOCALES } from '../i18n/locales';
import { loadNamespace } from '../i18n/loadNamespace';

export interface TimelineItem {
  id: string;
  roleOrDegree: string;
  organization: string;
  period: string;
  description: string[];
  tags?: string[];
  roleAndResponsibilities?: string[];
  projectHighlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface ResumeSectionLabels {
  eyebrow: string;
  heading: string;
  subtitle: string;
  reviewOrDownload: string;
  reviewResume: string;
  downloadResume: string;
  highlights: string;
  certifications: string;
  verifyCredential: string;
}

export interface ResumeContent {
  resumeUrl: string;
  section: ResumeSectionLabels;
  certifications: CertificationItem[];
}

const resolveResumeUrl = (url: string): string => {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`;
};

const rawResumeByLocale = loadNamespace<ResumeContent>('resume');

export const resumeContentByLocale = Object.fromEntries(
  LOCALES.map((locale) => [
    locale,
    {
      ...rawResumeByLocale[locale],
      resumeUrl: resolveResumeUrl(rawResumeByLocale[locale].resumeUrl),
    },
  ]),
) as Record<Locale, ResumeContent>;

export const resumeContent: ResumeContent = resumeContentByLocale.en;

export const getResumeContent = (locale?: Locale): ResumeContent => {
  if (!locale || !resumeContentByLocale[locale]) {
    return {
      ...(enResume as ResumeContent),
      resumeUrl: resolveResumeUrl((enResume as ResumeContent).resumeUrl),
    };
  }
  return resumeContentByLocale[locale];
};
