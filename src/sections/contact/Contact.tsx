import React from 'react';
import { getContactContent } from '../../content/contact';
import { useLocale } from '../../context/ThemeContext';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  const { locale } = useLocale();
  const content = getContactContent(locale);
  const t = content.section;

  return (
    <Section id="contact" tone="muted">
      <Container>
        <SectionHeader title={t.heading} description={t.connectText} />
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ContactInfo
              email={content.email}
              location={content.location}
              phone={content.phone}
              emailLabel={t.emailLabel}
              locationLabel={t.locationLabel}
              phoneLabel={t.phoneLabel}
            />
          </div>
          <div className="lg:col-span-7">
            <ContactForm
              labels={{
                nameLabel: t.nameLabel,
                emailFieldLabel: t.emailFieldLabel,
                messageLabel: t.messageLabel,
                placeholderName: t.placeholderName,
                placeholderEmail: t.placeholderEmail,
                placeholderMessage: t.placeholderMessage,
                sendMessage: t.sendMessage,
                messageSent: t.messageSent,
              }}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
