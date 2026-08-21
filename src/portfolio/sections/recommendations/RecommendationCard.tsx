import React from 'react';

interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  experience: string;
  quote: string;
  profileUrl: string;
}

interface RecommendationCardProps {
  item: Recommendation;
  number: number;
  profileAriaLabel: string;
  style?: React.CSSProperties;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  item,
  number,
  profileAriaLabel,
  style,
}) => {
  return (
    <a
      href={item.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-recommendation-card
      aria-label={profileAriaLabel}
      style={style}
      className="card-surface group relative flex shrink-0 cursor-pointer flex-col p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]"
    >
      <span className="absolute right-4 top-4 font-mono text-xs text-subtle">{number}</span>
      <div className="mb-5">
        <span className="link-underline link-underline-on-group-hover font-display text-lg font-medium text-fg">
          {item.name}
        </span>
        <p className="mt-1 text-sm text-subtle">{item.role}</p>
        <p className="mt-2 inline-block rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted">
          {item.company}
        </p>
      </div>

      <span className="tag mb-4 w-fit">{item.experience}</span>

      <blockquote className="flex-1 border-l border-default pl-4 text-sm leading-relaxed text-muted">
        {item.quote}
      </blockquote>
    </a>
  );
};
