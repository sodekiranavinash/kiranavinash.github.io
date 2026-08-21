import React from 'react';
import { motion } from 'framer-motion';

type SectionTone = 'base' | 'muted';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: SectionTone;
  divider?: boolean;
}

const toneClasses: Record<SectionTone, string> = {
  base: 'bg-base',
  muted: 'bg-muted',
};

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  tone = 'base',
  divider = false,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`py-24 md:py-32 transition-colors duration-300 ${toneClasses[tone]} ${divider ? 'section-divider' : ''} ${className}`}
    >
      {children}
    </motion.section>
  );
};
