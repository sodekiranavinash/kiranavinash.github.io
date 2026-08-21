import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { BrandIcon } from '../../components/BrandIcon';
import type { SocialLink } from '../../content/about';

interface AboutConnectProps {
  label: string;
  text: string;
  email: string;
  links: SocialLink[];
}

const resolveIcon = (link: SocialLink): string => {
  const platform = link.platform.toLowerCase();
  if (platform.includes('github')) return 'github';
  if (platform.includes('linkedin')) return 'linkedin';
  return link.iconName.toLowerCase();
};

export const AboutConnect: React.FC<AboutConnectProps> = ({ label, text, email, links }) => {
  const socialLinks = links.filter(
    (link) => link.iconName !== 'FileText' && !link.platform.toLowerCase().includes('email'),
  );

  const connectItems = [
    ...socialLinks.map((link) => ({
      key: link.platform,
      label: link.platform,
      href: link.url,
      external: true,
      icon: resolveIcon(link),
    })),
    {
      key: 'email',
      label: 'Email',
      href: `mailto:${email}`,
      external: false,
      icon: 'mail',
    },
  ];

  return (
    <div className="space-y-4 border-t border-default pt-8">
      <h2 className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">{label}</h2>
      <p className="max-w-2xl text-sm leading-relaxed text-muted">{text}</p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {connectItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className="group card-surface flex items-center justify-between px-4 py-3.5 transition-all duration-200 hover:border-strong"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-default text-muted transition-colors group-hover:border-strong group-hover:text-fg">
                <BrandIcon name={item.icon} className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-fg">{item.label}</p>
                <p className="font-mono text-[11px] text-subtle">
                  {item.key === 'email' ? email : 'Open profile'}
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-subtle transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
          </a>
        ))}
      </div>

      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-fg"
      >
        <Mail className="h-3.5 w-3.5" />
        {email}
      </a>
    </div>
  );
};
