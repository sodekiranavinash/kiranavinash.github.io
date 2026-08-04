export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface AboutContent {
  name: string;
  title: string;
  subtitle: string;
  bioParagraphs: string[];
  metrics: Metric[];
  socialLinks: SocialLink[];
}
