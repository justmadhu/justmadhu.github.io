
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
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-800 whitespace-nowrap">
            {title}
          </h2>
          <div className="h-[1px] flex-1 bg-gray-200 opacity-60"></div>
        </div>
        {seeMoreUrl && (
          <a 
            href={seeMoreUrl} 
            className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
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
