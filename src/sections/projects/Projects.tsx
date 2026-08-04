import React, { useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { getProjectsContent } from '../../content/projects';
import type { ProjectItem } from '../../content/projects';
import { useLocale } from '../../context/ThemeContext';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Modal } from '../../components/Modal';
import { Tag } from '../../components/ui/Tag';
import { Button } from '../../components/ui/Button';
import { ProjectGrid } from './ProjectGrid';

const isPersonalProject = (project: ProjectItem, personalProjects: ProjectItem[]) =>
  project.category === 'personal' || personalProjects.some((item) => item.id === project.id);

const ProjectModalLinks: React.FC<{
  project: ProjectItem;
  liveLabel: string;
  architectureLabel: string;
}> = ({ project, liveLabel, architectureLabel }) => {
  if (!project.liveUrl && !project.architectureUrl) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <Button className="text-xs">
            {liveLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </a>
      ) : null}
      {project.architectureUrl ? (
        <a href={project.architectureUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" className="text-xs">
            {architectureLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </a>
      ) : null}
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { locale } = useLocale();
  const content = getProjectsContent(locale);
  const t = content.section;

  const personalProjects = useMemo(() => content.personal || [], [content]);
  const professionalProjects = useMemo(() => content.professional || [], [content]);
  const allProjects = [...personalProjects, ...professionalProjects];
  const active = selectedId ? allProjects.find((p) => p.id === selectedId) : null;
  const isPersonal = active ? isPersonalProject(active, personalProjects) : false;

  return (
    <Section id="projects" tone="muted">
      <Container>
        <SectionHeader title={t.heading} />
        <div className="space-y-12">
          <ProjectGrid
            title={t.personal}
            projects={personalProjects}
            variant="personal"
            liveLabel={t.live}
            readMoreLabel={t.readMore}
            onReadMore={setSelectedId}
          />
          <ProjectGrid
            title={t.professional}
            projects={professionalProjects}
            variant="professional"
            liveLabel={t.live}
            readMoreLabel={t.readMore}
            onReadMore={setSelectedId}
          />
        </div>
      </Container>

      <Modal open={Boolean(active)} onClose={() => setSelectedId(null)} title={active?.title ?? ''}>
        {active ? (
          <div className="space-y-6">
            {active.company ? (
              <p className="font-mono text-xs tracking-wide text-subtle uppercase">{active.company}</p>
            ) : null}

            {isPersonal ? (
              <p className="text-sm leading-relaxed text-muted">{active.summary}</p>
            ) : null}

            {!isPersonal && active.caseStudy ? (
              <div>
                <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">{t.caseStudy}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">{active.caseStudy}</p>
              </div>
            ) : null}

            {active.fullDetails?.length ? (
              <div>
                <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">{t.highlights}</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {active.fullDetails.map((detail, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-[var(--border-focus)]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {active.allSkills?.length ? (
              <div>
                <h4 className="font-mono text-xs tracking-wide text-subtle uppercase">{t.skills}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.allSkills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ) : null}

            {isPersonal ? (
              <ProjectModalLinks
                project={active}
                liveLabel={t.live}
                architectureLabel={t.architecture}
              />
            ) : null}
          </div>
        ) : null}
      </Modal>
    </Section>
  );
};
