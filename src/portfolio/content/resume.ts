import enResume from '../i18n/en/resume.json';
import frResume from '../i18n/fr/resume.json';
import type { Locale } from '@shared/context/ThemeContext';

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

export const resumeContentByLocale: Record<Locale, ResumeContent> = {
  en: {
    ...(enResume as ResumeContent),
    resumeUrl: resolveResumeUrl((enResume as ResumeContent).resumeUrl),
  },
  fr: {
    ...(frResume as ResumeContent),
    resumeUrl: resolveResumeUrl((frResume as ResumeContent).resumeUrl),
  },
};

export const resumeContent: ResumeContent = resumeContentByLocale.en;

export const getResumeContent = (locale?: Locale): ResumeContent => {
  if (!locale || !resumeContentByLocale[locale]) {
    return resumeContentByLocale.en;
  }
  return resumeContentByLocale[locale];
};
