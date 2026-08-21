import React from 'react';

interface AboutBioProps {
  paragraphs: string[];
}

export const AboutBio: React.FC<AboutBioProps> = ({ paragraphs }) => {
  return (
    <div className="max-w-3xl space-y-3 text-base leading-relaxed text-muted sm:text-lg">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};
