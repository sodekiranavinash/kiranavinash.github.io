import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { BorderBeam } from '@shared/ui/BorderBeam';
import { Tag } from '@shared/ui/Tag';
import { Button } from '@shared/ui/Button';

interface Project {
  id: string;
  title: string;
  company?: string;
  summary: string;
  bullets?: string[];
  topSkills?: string[];
  liveUrl?: string;
  architectureUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  variant: 'personal' | 'professional';
  liveLabel: string;
  readMoreLabel: string;
  onReadMore: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant,
  liveLabel,
  readMoreLabel,
  onReadMore,
}) => {
  const isPersonal = variant === 'personal';

  return (
    <article className="card-surface group flex h-full flex-col p-6">
      <div className="mb-4">
        {project.company ? (
          <p className="font-mono text-xs tracking-wide text-subtle uppercase">{project.company}</p>
        ) : null}
        <h3 className="mt-2 font-display text-xl font-medium text-fg">{project.title}</h3>
      </div>

      <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

      {project.bullets ? (
        <ul className="mt-4 space-y-2 text-sm text-subtle">
          {project.bullets.map((bullet, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-2 h-px w-3 shrink-0 bg-[var(--border-focus)]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {project.topSkills?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.topSkills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {isPersonal && project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button className="text-xs">
              {liveLabel}
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </a>
        ) : null}
        <BorderBeam activateOnGroupHover>
          <Button variant="secondary" className="text-xs" onClick={() => onReadMore(project.id)}>
            {readMoreLabel}
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </BorderBeam>
      </div>
    </article>
  );
};
