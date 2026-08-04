import React from 'react';
import useI18n from '../../i18n/useI18n';

export const NavBrand: React.FC = () => {
  const bundle = useI18n();
  const initials = bundle.about.name
    .split(' ')
    .map((part: string) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="group flex items-center gap-3"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-md border border-default font-mono text-xs text-fg transition-colors group-hover:border-strong">
        {initials}
      </span>
    </a>
  );
};
