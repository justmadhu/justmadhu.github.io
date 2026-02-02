
import React from 'react';

interface RamsSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  seeMoreUrl?: string;
}

const RamsSection: React.FC<RamsSectionProps> = ({ title, children, className = "", seeMoreUrl }) => {
  return (
    <section className={`mb-16 md:mb-20 ${className}`}>
      <div className="flex items-end justify-between gap-4 mb-8">
        <h2 className="text-[12px] font-bold tracking-[0.3em] uppercase text-black whitespace-nowrap leading-none">
          {title}
        </h2>
        {seeMoreUrl && (
          <a 
            href={seeMoreUrl} 
            className="text-[11px] font-mono font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors leading-none"
          >
            See More &gt;
          </a>
        )}
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};

export default RamsSection;
