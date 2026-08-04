import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <header className="mb-12 flex flex-col gap-3 md:mb-16">
      <h2 className="font-display text-3xl font-medium tracking-tight text-fg md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </header>
  );
};
