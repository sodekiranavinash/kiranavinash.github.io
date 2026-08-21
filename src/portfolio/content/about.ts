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

export interface AboutHero {
  welcome: string;
  greeting: string;
  subtitle: string;
  description: string;
  viewWork: string;
  downloadCv: string;
  scrollDown: string;
}

export interface AboutSectionLabels {
  heading: string;
  nameLabel: string;
  titleLabel: string;
  aboutLabel: string;
  educationLabel: string;
  skillsLabel: string;
  socialLabel: string;
  experienceText: string;
}

export interface AboutContent {
  hero: AboutHero;
  section: AboutSectionLabels;
  name: string;
  title: string;
  bioParagraphs: string[];
  metrics: Metric[];
  socialLinks: SocialLink[];
  email: string;
  emailLabel: string;
  connect: {
    text: string;
  };
}
