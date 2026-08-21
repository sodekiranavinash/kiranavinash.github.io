import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
export type Locale = 'en' | 'fr';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  locale: Locale;
  setLocale: (value: Locale) => void;
}

const supportedLocales: Locale[] = ['en', 'fr'];
const defaultLocale: Locale = 'en';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const saved = window.localStorage.getItem('theme') as Theme | null;
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }

  return 'dark';
};

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  const resolveLocaleFromPath = (path: string): Locale | null => {
    const segments = path.split('/').filter(Boolean);
    const candidate = segments[0] as Locale | undefined;
    return candidate && supportedLocales.includes(candidate) ? candidate : null;
  };

  const urlLocale =
    resolveLocaleFromPath(window.location.pathname) ||
    resolveLocaleFromPath(window.location.hash.replace('#', ''));
  if (urlLocale) {
    return urlLocale;
  }

  const savedLocale = window.localStorage.getItem('locale') as Locale | null;
  if (savedLocale && supportedLocales.includes(savedLocale)) {
    return savedLocale;
  }

  const browserLanguages = navigator.languages || [navigator.language];
  for (const browserLang of browserLanguages) {
    const code = browserLang.toLowerCase().slice(0, 2) as Locale;
    if (supportedLocales.includes(code)) {
      return code;
    }
  }

  return defaultLocale;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
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

    localStorage.setItem('theme', theme);
    localStorage.setItem('locale', locale);
  }, [theme, locale]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

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
