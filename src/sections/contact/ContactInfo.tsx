import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactInfoProps {
  email: string;
  location: string;
  phone?: string;
  emailLabel: string;
  locationLabel: string;
  phoneLabel: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  email,
  location,
  phone,
  emailLabel,
  locationLabel,
  phoneLabel,
}) => {
  const items = [
    {
      icon: Mail,
      label: emailLabel,
      value: (
        <a href={`mailto:${email}`} className="link-underline break-all text-sm text-fg">
          {email}
        </a>
      ),
    },
    {
      icon: MapPin,
      label: locationLabel,
      value: <p className="text-sm text-fg">{location}</p>,
    },
    ...(phone
      ? [
          {
            icon: Phone,
            label: phoneLabel,
            value: <p className="text-sm text-fg">{phone}</p>,
          },
        ]
      : []),
  ];

  return (
    <div className="space-y-3">
      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="card-surface flex items-start gap-4 p-4">
          <div className="rounded-md border border-default p-2 text-muted">
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <p className="font-mono text-xs tracking-wide text-subtle uppercase">{label}</p>
            <div className="mt-1">{value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
