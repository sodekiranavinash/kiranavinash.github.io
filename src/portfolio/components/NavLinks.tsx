import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavLinksProps {
  items: NavItem[];
  onNavigate: (href: string) => void;
  className?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ items, onNavigate, className = '' }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => onNavigate(item.href)}
          className="link-underline rounded-md px-3 py-2 font-mono text-xs tracking-wide text-muted uppercase transition-colors hover:text-fg"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
