import { LOCALES, isLocale, type Locale } from './locales';

const files = import.meta.glob('./*/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, unknown>;

export const loadNamespace = <T>(namespace: string): Record<Locale, T> => {
  const byLocale = {} as Record<Locale, T>;

  for (const [path, data] of Object.entries(files)) {
    const match = path.match(/\/([a-z]{2})\/([^/]+)\.json$/);
    if (!match) continue;

    const locale = match[1];
    const fileName = match[2];
    if (fileName !== namespace || !isLocale(locale)) continue;

    byLocale[locale] = data as T;
  }

  for (const locale of LOCALES) {
    if (!byLocale[locale]) {
      throw new Error(`Missing translation file: ${locale}/${namespace}.json`);
    }
  }

  return byLocale;
};
