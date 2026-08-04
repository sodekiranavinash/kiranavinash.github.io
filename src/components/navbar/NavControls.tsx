import React from 'react';
import { Sun, Moon, Globe2 } from 'lucide-react';
import { useTheme, useLocale } from '../../context/ThemeContext';
import type { Locale } from '../../context/ThemeContext';

export const NavControls: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="h-9 appearance-none rounded-md border border-default bg-base px-3 pr-7 font-mono text-xs text-muted outline-none transition-colors hover:border-strong hover:text-fg"
        aria-label="Select language"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>

      <button
        onClick={toggleTheme}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-default text-muted transition-colors hover:border-strong hover:text-fg"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      <button
        onClick={() => setLocale(locale === 'en' ? 'fr' : 'en')}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-default text-muted transition-colors hover:border-strong hover:text-fg md:hidden"
        aria-label="Toggle language"
      >
        <Globe2 className="h-4 w-4" />
      </button>
    </div>
  );
};
