import React from 'react';
import { Download } from 'lucide-react';
import { BorderBeam } from '@shared/ui/BorderBeam';
import { Button } from '@shared/ui/Button';
import { AboutPortrait } from './AboutPortrait';

interface AboutIntroProps {
  name: string;
  title: string;
  resumeUrl: string;
  downloadCvLabel: string;
  viewWorkLabel: string;
}

export const AboutIntro: React.FC<AboutIntroProps> = ({
  name,
  title,
  resumeUrl,
  downloadCvLabel,
  viewWorkLabel,
}) => {
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
      </div>

      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <AboutPortrait alt={name} />
      </div>
    </div>
  );
};
