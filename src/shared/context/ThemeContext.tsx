import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  DEFAULT_LOCALE,
  isLocale,
  type Locale,
} from '@portfolio/i18n/locales';

type Theme = 'light' | 'dark';
export type { Locale };

const THEME_KEY = 'theme';
const LOCALE_KEY = 'locale';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  locale: Locale;
  setLocale: (value: Locale) => void;
}

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light';
  }

  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

const getSavedTheme = (): Theme | null => {
  const saved = window.localStorage.getItem(THEME_KEY);
  return saved === 'light' || saved === 'dark' ? saved : null;
};

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return getSavedTheme() ?? getSystemTheme();
};

const getBrowserLocale = (): Locale => {
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const browserLang of browserLanguages) {
    const code = browserLang.toLowerCase().slice(0, 2);
    if (isLocale(code)) {
      return code;
    }
  }

  return DEFAULT_LOCALE;
};

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const savedLocale = window.localStorage.getItem(LOCALE_KEY);
  if (savedLocale && isLocale(savedLocale)) {
    return savedLocale;
  }

  return getBrowserLocale();
};

const applyAppearance = (theme: Theme, locale: Locale) => {
  const root = window.document.documentElement;
  const body = window.document.body;
  const isDark = theme === 'dark';

  root.classList.toggle('theme-dark', isDark);
  root.classList.toggle('theme-light', !isDark);
  body.classList.toggle('theme-dark', isDark);
  body.classList.toggle('theme-light', !isDark);
  root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  root.style.colorScheme = isDark ? 'dark' : 'light';
  root.lang = locale;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    applyAppearance(theme, locale);
  }, [theme, locale]);

  useEffect(() => {
    if (window.localStorage.getItem(THEME_KEY)) {
      return;
    }

    if (typeof window.matchMedia !== 'function') {
      return;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      window.localStorage.setItem(THEME_KEY, next);
      return next;
    });
  }, []);

  const setLocale = useCallback((value: Locale) => {
    window.localStorage.setItem(LOCALE_KEY, value);
    setLocaleState(value);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, locale, setLocale }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const useLocale = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a ThemeProvider');
  }
  return {
    locale: context.locale,
    setLocale: context.setLocale,
  };
};
