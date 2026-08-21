import React from 'react';
import { useTheme } from '@shared/context/ThemeContext';

const AVATAR_BY_THEME = {
  dark: `${import.meta.env.BASE_URL}photo_black.png`,
  light: `${import.meta.env.BASE_URL}photo_white.png`,
} as const;

interface AboutPortraitProps {
  alt: string;
  className?: string;
}

export const AboutPortrait: React.FC<AboutPortraitProps> = ({ alt, className = '' }) => {
  const { theme } = useTheme();
  const src = AVATAR_BY_THEME[theme];

  return (
    <div
      className={`relative h-72 w-52 overflow-hidden rounded-lg border border-default sm:h-80 sm:w-56 lg:h-full lg:min-h-[320px] lg:w-56 xl:w-60 ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
    </div>
  );
};
