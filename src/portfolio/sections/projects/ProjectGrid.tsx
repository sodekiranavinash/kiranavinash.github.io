import React from 'react';
import { ProjectCard } from './ProjectCard';

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

interface ProjectGridProps {
  title: string;
  projects: Project[];
  variant: 'personal' | 'professional';
  liveLabel: string;
  readMoreLabel: string;
  onReadMore: (id: string) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  title,
  projects,
  variant,
  liveLabel,
  readMoreLabel,
  onReadMore,
}) => {
  if (!projects.length) return null;

  return (
    <div className="space-y-6">
      <h3 className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">{title}</h3>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant={variant}
            liveLabel={liveLabel}
            readMoreLabel={readMoreLabel}
            onReadMore={onReadMore}
          />
        ))}
      </div>
    </div>
  );
};
