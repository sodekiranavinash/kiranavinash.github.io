import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLocale } from '@shared/context/ThemeContext';
import { getCommonContent } from '../content/common';
import { Container } from '@shared/ui/Container';

const LAST_UPDATED = '2026-08-21';
const SITE_NAME = 'sodekiranavinash.github.io';
const OPERATOR = 'Kiran Avinash Sode';
const CONTACT_EMAIL = 'kiranavinash.sode@gmail.com';

export const Privacy: React.FC = () => {
  const { locale } = useLocale();
  const t = getCommonContent(locale).footer;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-base py-16 md:py-24">
      <Container className="max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {t.back}
        </Link>

        <header className="mt-8 border-b border-default pb-8">
          <h1 className="font-display text-3xl font-medium text-fg md:text-4xl">{t.privacyPolicy}</h1>
          <p className="mt-3 font-mono text-xs text-subtle">
            {t.lastUpdated} {LAST_UPDATED}
          </p>
        </header>

        <article className="mt-10 space-y-10 text-sm leading-relaxed text-muted md:text-base">
          <p>
            This Privacy Policy explains how {SITE_NAME} (the “Site”), a personal portfolio website
            operated by {OPERATOR} (“I,” “me,” or “my”), handles information about its visitors.
          </p>
          <p>
            The Site is an informational portfolio. It has no user accounts, logins, registration,
            e-commerce, newsletters, advertising, or contact forms. The only information collected
            automatically is the limited hosting data described below. By using the Site, you agree
            to the practices described in this Privacy Policy.
          </p>

          <PolicySection title="Information I collect">
            <p>
              <span className="font-medium text-fg">Hosting logs.</span> The Site is hosted on
              GitHub Pages. As with most web hosts, GitHub may automatically record standard server
              log information (such as IP addresses and requested URLs) for security and operational
              purposes. That processing is governed by{' '}
              <ExternalHref href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
                GitHub’s privacy statement
              </ExternalHref>
              .
            </p>
            <p>
              <span className="font-medium text-fg">Information you choose to send.</span> The Site
              lists an email address so you can contact me. If you email me, I receive whatever
              information you include in your message, and I use it only to respond to you.
            </p>
          </PolicySection>

          <PolicySection title="What I do not collect">
            <p>
              I do not operate user accounts, logins, online stores, contact forms, newsletters,
              advertising, retargeting, or social media tracking pixels. I do not use analytics
              cookies or third-party advertising trackers on the Site. I do not sell, rent, or trade
              information about visitors, and I do not knowingly collect sensitive personal
              information.
            </p>
          </PolicySection>

          <PolicySection title="How I use information">
            <p>
              I use any information only to maintain the Site’s security and operation and to
              respond to messages you send me. This information is never used for advertising and is
              never sold or shared with third parties for their own purposes.
            </p>
          </PolicySection>

          <PolicySection title="Cookies">
            <p>
              The Site does not set analytics or advertising cookies. Your browser may store a
              theme or language preference locally so the Site can remember your choices; these are
              stored on your device and are not used to track you across websites. Disabling local
              storage or cookies will not affect your ability to read the Site.
            </p>
          </PolicySection>

          <PolicySection title="Third-party services">
            <p>
              The Site relies on the following third party, whose own privacy policy governs how it
              handles data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                GitHub Pages (hosting): see the{' '}
                <ExternalHref href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
                  GitHub Privacy Statement
                </ExternalHref>
                .
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Links to other websites">
            <p>
              The Site may link to websites that I do not operate or control. I am not responsible
              for the content or privacy practices of those websites. When you follow a link away
              from the Site, this Privacy Policy no longer applies, and you should review the privacy
              policy of any website you visit.
            </p>
          </PolicySection>

          <PolicySection title="Your rights under the GDPR">
            <p>
              If you are in the European Economic Area (EEA) or the United Kingdom, you have rights
              over your personal data under the GDPR and UK GDPR. These include the right to access,
              correct, delete, restrict, or object to the processing of your data, and the right to
              data portability. Any limited personal data described above is processed on the basis
              of my legitimate interest in operating and securing the Site, or on the basis of your
              consent where you choose to contact me.
            </p>
            <p>
              To exercise any of these rights, contact me at the email address below. You also have
              the right to lodge a complaint with your local data protection authority.
            </p>
          </PolicySection>

          <PolicySection title="Your rights under California law (CCPA and CalOPPA)">
            <p>
              I do not sell or share the personal information of any visitor, including California
              residents. California residents have the right to know what personal information is
              collected and to request its deletion. Because the Site collects only the limited
              information described above, there is very little personal information to disclose, but
              you may contact me with any request and I will respond as required by law. I will not
              discriminate against you for exercising these rights.
            </p>
            <p>
              Because there is no common industry standard for “Do Not Track” signals, the Site does
              not currently respond to them.
            </p>
          </PolicySection>

          <PolicySection title="Children’s privacy">
            <p>
              The Site is not directed to children under 13, and I do not knowingly collect personal
              information from children. If you believe a child has provided personal information
              through the Site, please contact me and I will delete it.
            </p>
          </PolicySection>

          <PolicySection title="Data retention">
            <p>
              Hosting logs are retained according to GitHub’s practices. I keep any email
              correspondence only for as long as needed to address your inquiry.
            </p>
          </PolicySection>

          <PolicySection title="Changes to this policy">
            <p>
              I may update this Privacy Policy from time to time. Any changes will be posted on this
              page along with an updated revision date.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              If you have any questions about this Privacy Policy or how your information is
              handled, contact me at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-fg underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:decoration-fg"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </PolicySection>
        </article>
      </Container>
    </section>
  );
};

const PolicySection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="space-y-3">
    <h2 className="font-display text-lg font-medium text-fg md:text-xl">{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
);

const ExternalHref: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-fg underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:decoration-fg"
  >
    {children}
  </a>
);
