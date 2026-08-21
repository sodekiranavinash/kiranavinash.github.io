import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ value, label, description }) => {
  return (
    <div className="card-surface p-5">
      <p className="font-display text-3xl font-medium text-fg">{value}</p>
      <p className="mt-2 text-sm font-medium text-fg">{label}</p>
      {description ? <p className="mt-1 text-xs text-subtle">{description}</p> : null}
    </div>
  );
};
