import React from 'react';
import type { SkillCategory, SkillItem } from '../../content/skills';
import { Tag } from '../../components/ui/Tag';

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category }) => {
  return (
    <div className="card-surface p-5">
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-medium text-fg">{category.categoryName}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill: SkillItem) => (
          <Tag key={skill.name}>{skill.name}</Tag>
        ))}
      </div>
    </div>
  );
};
