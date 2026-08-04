import React from 'react';
import useI18n from '../i18n/useI18n';
import type { SocialLink } from '../content/about';
import { useLocale } from '../context/ThemeContext';
import { getCommonContent } from '../content/common';
import { BrandIcon } from './BrandIcon';
import { Container } from './ui/Container';

const resolveIcon = (link: SocialLink): string => {
  const platform = link.platform.toLowerCase();
  if (platform.includes('github')) return 'github';
  if (platform.includes('linkedin')) return 'linkedin';
  return link.iconName.toLowerCase();
};

export const Footer: React.FC = () => {
  const bundle = useI18n();
  const { locale } = useLocale();
  const t = getCommonContent(locale).footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-fg">
              &copy; {currentYear} {bundle.about.name}. {t.rights}
            </p>
            <p className="mt-1 font-mono text-xs text-subtle">{t.tagline}</p>
          </div>

          <div className="flex gap-2">
            {(bundle.about.socialLinks || []).map((link: SocialLink) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-default text-muted transition-colors hover:border-strong hover:text-fg"
              >
                <span className="sr-only">{link.platform}</span>
                <BrandIcon name={resolveIcon(link)} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
