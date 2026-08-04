import React from 'react';

interface AboutBioProps {
  paragraphs: string[];
}

export const AboutBio: React.FC<AboutBioProps> = ({ paragraphs }) => {
  return (
    <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-muted sm:text-base">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};
