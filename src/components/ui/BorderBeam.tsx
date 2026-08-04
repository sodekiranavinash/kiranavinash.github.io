import React from 'react';

interface BorderBeamProps {
  children: React.ReactNode;
  className?: string;
  /** Activate when a parent element with `.group` is hovered */
  activateOnGroupHover?: boolean;
  /** Activate when this wrapper is hovered */
  activateOnHover?: boolean;
  /** Keep the beam animation running continuously */
  activateAlways?: boolean;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  children,
  className = '',
  activateOnGroupHover = false,
  activateOnHover = false,
  activateAlways = false,
}) => {
  const classes = [
    'border-beam',
    activateOnGroupHover ? 'border-beam-group-hover' : '',
    activateOnHover ? 'border-beam-hover' : '',
    activateAlways ? 'border-beam-active' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
};
