
import React from 'react';

interface RamsSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const RamsSection: React.FC<RamsSectionProps> = ({ title, children, className = "" }) => {
  return (
    <section className={`mb-12 md:mb-20 ${className}`}>
      <div className="mb-8 border-b border-paper/20 pb-4">
        <h2 className="text-xs md:text-sm font-mono font-medium tracking-[0.25em] uppercase text-paper/80 whitespace-nowrap leading-none">
          {title}
        </h2>
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};

export default RamsSection;
