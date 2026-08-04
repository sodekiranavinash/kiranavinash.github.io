import React from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  period?: string;
  degree?: string;
  organization?: string;
  college?: string;
}

interface AboutEducationProps {
  label: string;
  education?: EducationItem;
}

export const AboutEducation: React.FC<AboutEducationProps> = ({ label, education }) => {
  if (!education) return null;

  return (
    <div className="rounded-md border border-default bg-base p-4">
      <div className="mb-2 flex items-center gap-2 text-subtle">
        <GraduationCap className="h-3.5 w-3.5" />
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase">{label}</span>
      </div>
      <p className="text-sm font-medium text-fg">{education.degree}</p>
      <p className="text-xs text-muted">{education.organization}</p>
      {education.college ? (
        <p className="text-[11px] text-subtle">{education.college}</p>
      ) : null}
      <p className="mt-1 font-mono text-[12px] text-subtle">{education.period}</p>
    </div>
  );
};
