import React from 'react';
import { Download } from 'lucide-react';
import { BrandIcon } from '../../components/BrandIcon';
import { BorderBeam } from '@shared/ui/BorderBeam';
import { Button } from '@shared/ui/Button';
import type { SocialLink } from '../../content/about';
import { AboutPortrait } from './AboutPortrait';

interface AboutIntroProps {
  name: string;
  title: string;
  resumeUrl: string;
  downloadCvLabel: string;
  viewWorkLabel: string;
  email: string;
  emailLabel: string;
  socialLinks: SocialLink[];
}

export const AboutIntro: React.FC<AboutIntroProps> = ({
  name,
  title,
  resumeUrl,
  downloadCvLabel,
  viewWorkLabel,
  email,
  emailLabel,
  socialLinks,
}) => {
  const linkedIn = socialLinks.find((link) => link.platform.toLowerCase().includes('linkedin'));
  const github = socialLinks.find((link) => link.platform.toLowerCase().includes('github'));
  const contactItems = [
    linkedIn && {
      key: 'linkedin',
      label: linkedIn.platform,
      href: linkedIn.url,
      external: true,
      icon: 'linkedin',
    },
    {
      key: 'email',
      label: emailLabel,
      href: `mailto:${email}`,
      external: false,
      icon: 'mail',
    },
    github && {
      key: 'github',
      label: github.platform,
      href: github.url,
      external: true,
      icon: 'github',
    },
  ].filter(Boolean) as Array<{
    key: string;
    label: string;
    href: string;
    external: boolean;
    icon: string;
  }>;

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
      <div className="order-2 flex flex-col justify-center space-y-6 lg:order-1">
        <div className="space-y-2">
          <h1 className="font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl lg:text-5xl">
            {name}
          </h1>
          <p className="text-base text-muted sm:text-lg">{title}</p>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={resumeUrl}
              {...(/^https?:\/\//i.test(resumeUrl)
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : { download: true })}
            >
              <Button className="gap-2">
                <Download className="h-3.5 w-3.5" />
                {downloadCvLabel}
              </Button>
            </a>
            <BorderBeam activateAlways>
              <Button variant="secondary" onClick={() => scrollTo('#projects')}>
                {viewWorkLabel}
              </Button>
            </BorderBeam>
          </div>

          <div className="flex items-center gap-2.5">
            {contactItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                aria-label={item.label}
                title={item.label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-default text-muted transition-all duration-200 hover:border-strong hover:text-fg hover:scale-105"
              >
                <BrandIcon name={item.icon} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <AboutPortrait alt={name} />
      </div>
    </div>
  );
};
