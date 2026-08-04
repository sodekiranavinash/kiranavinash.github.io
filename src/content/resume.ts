import enResume from '../i18n/en/resume.json';
import frResume from '../i18n/fr/resume.json';
import type { Locale } from '../context/ThemeContext';

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

export const resumeContentByLocale: Record<Locale, ResumeContent> = {
  en: {
    ...(enResume as ResumeContent),
    resumeUrl: `${import.meta.env.BASE_URL}${(enResume as ResumeContent).resumeUrl.replace(/^\//, '')}`,
  },
  fr: {
    ...(frResume as ResumeContent),
    resumeUrl: `${import.meta.env.BASE_URL}${(frResume as ResumeContent).resumeUrl.replace(/^\//, '')}`,
  },
};

export const resumeContent: ResumeContent = resumeContentByLocale.en;

export const getResumeContent = (locale?: Locale): ResumeContent => {
  if (!locale || !resumeContentByLocale[locale]) {
    return resumeContentByLocale.en;
  }
  return resumeContentByLocale[locale];
};
