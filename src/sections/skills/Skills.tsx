import React from 'react';
import { getSkillsContent } from '../../content/skills';
import { useLocale } from '../../context/ThemeContext';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { SkillCategoryCard } from './SkillCategoryCard';

export const Skills: React.FC = () => {
  const { locale } = useLocale();
  const content = getSkillsContent(locale);
  const t = content.section;

  return (
    <Section id="skills" tone="muted">
      <Container>
        <SectionHeader title={t.heading} description={t.description} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.categories.map((category) => (
            <SkillCategoryCard key={category.categoryName} category={category} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
