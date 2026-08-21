import { useMemo } from 'react';
import getBundle from './index';
import { DEFAULT_LOCALE, isLocale } from './locales';
import { useTheme } from '@shared/context/ThemeContext';

export const useI18n = () => {
  const { locale } = useTheme();
  const resolvedLocale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const bundle = useMemo(() => getBundle(resolvedLocale), [resolvedLocale]);
  return { ...bundle, locale: resolvedLocale };
};

export default useI18n;
