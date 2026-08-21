import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BorderBeam } from '@shared/ui/BorderBeam';
import { Tag } from '@shared/ui/Tag';
import type { TimelineItem } from '../../content/resume';

interface ExperienceCardProps {
  item: TimelineItem;
  readMoreLabel: string;
  onReadMore: (id: string) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  item,
  readMoreLabel,
  onReadMore,
}) => {
  return (
    <article className="card-surface group flex h-full flex-col p-6">
      <div className="mb-5">
        <h3 className="font-display text-lg font-medium text-fg">{item.roleOrDegree}</h3>
        <div className="mt-1 flex items-center justify-between gap-4">
          <p className="text-sm text-subtle">{item.organization}</p>
          <span className="shrink-0 font-mono text-xs text-subtle">{item.period}</span>
        </div>
      </div>

      <ul className="space-y-2 text-sm leading-relaxed text-muted">
        {item.description.map((line, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-2 h-px w-3 shrink-0 bg-[var(--border-focus)]" />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      {item.tags ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      ) : null}

      <BorderBeam activateOnGroupHover className="mt-6 self-start">
        <button
          type="button"
          onClick={() => onReadMore(item.id)}
          className="btn-secondary gap-2 px-4 py-2 font-mono text-xs tracking-wide uppercase"
        >
          {readMoreLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </BorderBeam>
    </article>
  );
};
