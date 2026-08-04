import enContact from '../i18n/en/contact.json';
import frContact from '../i18n/fr/contact.json';
import type { Locale } from '../context/ThemeContext';

export interface ContactSectionLabels {
  heading: string;
  subheading: string;
  connectHeading: string;
  connectText: string;
  emailLabel: string;
  locationLabel: string;
  phoneLabel: string;
  nameLabel: string;
  emailFieldLabel: string;
  messageLabel: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderMessage: string;
  sendMessage: string;
  messageSent: string;
}

export interface ContactContent {
  section: ContactSectionLabels;
  email: string;
  location: string;
  phone?: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl?: string;
  formActionUrl: string;
  placeholderMessage: string;
}

export const contactContentByLocale: Record<Locale, ContactContent> = {
  en: enContact as ContactContent,
  fr: frContact as ContactContent,
};

export const contactContent: ContactContent = contactContentByLocale.en;

export const getContactContent = (locale?: Locale): ContactContent => {
  if (!locale || !contactContentByLocale[locale]) {
    return contactContentByLocale.en;
  }
  return contactContentByLocale[locale];
};
