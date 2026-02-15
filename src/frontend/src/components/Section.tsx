import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'muted';
}

export function Section({ id, children, className = '', background = 'default' }: SectionProps) {
  const bgClass = background === 'muted' ? 'bg-muted/30' : '';
  
  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
