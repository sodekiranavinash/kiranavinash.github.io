import React from 'react';
import { Download, Mail } from 'lucide-react';
import { BrandIcon } from '../../components/BrandIcon';
import { BorderBeam } from '../../components/ui/BorderBeam';
import { Button } from '../../components/ui/Button';
import { AboutPortrait } from './AboutPortrait';

interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

interface AboutIntroProps {
  name: string;
  title: string;
  links: SocialLink[];
  email: string;
  resumeUrl: string;
  downloadCvLabel: string;
  viewWorkLabel: string;
}

const resolveIcon = (link: SocialLink): string => {
  const platform = link.platform.toLowerCase();
  if (platform.includes('github')) return 'github';
  if (platform.includes('linkedin')) return 'linkedin';
  return link.iconName.toLowerCase();
};

export const AboutIntro: React.FC<AboutIntroProps> = ({
  name,
  title,
  links,
  email,
  resumeUrl,
  downloadCvLabel,
  viewWorkLabel,
}) => {
  const socialLinks = links.filter(
    (link) => link.iconName !== 'FileText' && !link.platform.toLowerCase().includes('email'),
  );

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

        <div className="flex flex-wrap items-center gap-3">
          <a href={resumeUrl} download>
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

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              title={link.platform}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-default text-muted transition-all duration-200 hover:border-strong hover:text-fg hover:scale-105"
            >
              <BrandIcon name={resolveIcon(link)} className="h-[18px] w-[18px]" />
            </a>
          ))}
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            title="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-default text-muted transition-all duration-200 hover:border-strong hover:text-fg hover:scale-105"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <AboutPortrait alt={name} />
      </div>
    </div>
  );
};
