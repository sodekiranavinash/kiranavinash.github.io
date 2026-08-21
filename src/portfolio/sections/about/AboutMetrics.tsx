import React from 'react';

interface Metric {
  label: string;
  value: string;
  description?: string;
}

interface AboutMetricsProps {
  metrics: Metric[];
}

export const AboutMetrics: React.FC<AboutMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-md border border-default bg-elevated p-4">
          <p className="font-display text-2xl font-medium text-fg">{metric.value}</p>
          <p className="mt-1 text-xs text-muted">{metric.label}</p>
          {metric.description ? (
            <p className="mt-0.5 text-[12px] text-subtle">{metric.description}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
};
