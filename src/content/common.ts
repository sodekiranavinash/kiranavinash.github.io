import enCommon from '../i18n/en/common.json';
import frCommon from '../i18n/fr/common.json';
import type { Locale } from '../context/ThemeContext';

export interface CommonContent {
  nav: {
    about: string;
    experience: string;
    projects: string;
    recommendations: string;
    contact: string;
    skills: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const commonContentByLocale: Record<Locale, CommonContent> = {
  en: enCommon as CommonContent,
  fr: frCommon as CommonContent,
};

export const getCommonContent = (locale?: Locale): CommonContent => {
  if (!locale || !commonContentByLocale[locale]) {
    return commonContentByLocale.en;
  }
  return commonContentByLocale[locale];
};
