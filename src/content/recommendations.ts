import enRecommendations from '../i18n/en/recommendations.json';
import frRecommendations from '../i18n/fr/recommendations.json';
import type { Locale } from '../context/ThemeContext';

export interface RecommendationItem {
  id: string;
  name: string;
  profileUrl: string;
  role: string;
  company: string;
  experience: string;
  quote: string;
}

export interface RecommendationsSectionLabels {
  heading: string;
  description: string;
}

export interface RecommendationsContent {
  section: RecommendationsSectionLabels;
  items: RecommendationItem[];
}

export const recommendationsContentByLocale: Record<Locale, RecommendationsContent> = {
  en: enRecommendations as RecommendationsContent,
  fr: frRecommendations as RecommendationsContent,
};

export const getRecommendationsContent = (locale?: Locale): RecommendationsContent => {
  if (!locale || !recommendationsContentByLocale[locale]) {
    return recommendationsContentByLocale.en;
  }
  return recommendationsContentByLocale[locale];
};
