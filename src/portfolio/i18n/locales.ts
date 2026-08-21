export const LOCALES = ['en', 'fr', 'de', 'nl', 'da', 'sv', 'es', 'it', 'pt', 'ro'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_NATIVE_NAMES: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  nl: 'Nederlands',
  da: 'Dansk',
  sv: 'Svenska',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  ro: 'Română',
};

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);
