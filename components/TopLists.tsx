import React, { useState, useMemo } from 'react';
import RamsSection from './RamsSection';
import { TOP_LISTS } from '../constants';
import { StickyNote, MapPin } from 'lucide-react';

export const TopLists: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const shuffledLists = useMemo(() => {
    return [...TOP_LISTS].sort(() => 0.5 - Math.random());
  }, []);

  return (
    <RamsSection title="I love these places for their..." className="relative z-10 w-full shrink-0 min-w-0">
      <div className="flex gap-4 md:gap-8 pb-12 pt-4 min-h-[440px] sm:min-h-[480px] overflow-x-auto overflow-y-hidden min-w-0 no-scrollbar -mr-6 sm:-mr-8 lg:-mr-16 pr-6 sm:pr-8 lg:pr-16 w-[calc(100%+1.5rem)] sm:w-[calc(100%+2rem)] lg:w-[calc(100%+4rem)] snap-x relative z-10 items-start">
        {shuffledLists.map((list, listIndex) => (
          <div 
            key={list.id} 
            className="group shrink-0 w-[65vw] sm:w-[45vw] md:w-[32vw] lg:w-[22vw] xl:w-[18vw] snap-start relative z-10 min-w-0"
            onMouseEnter={() => setHoveredIndex(listIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div 
              className={`transition-opacity duration-300 ${hoveredIndex === null || hoveredIndex === listIndex ? 'opacity-100' : 'opacity-40'} w-full relative`}
            >
              <div 
                className="flex flex-col gap-1 sm:gap-2 lg:gap-3 w-full pr-4 sm:pr-8 md:pr-12 lg:pr-16 mb-2 lg:mb-4 cursor-pointer"
                onClick={() => setHoveredIndex(listIndex)}
              >
                <h3 className="text-xl sm:text-2xl font-serif text-paper truncate">{list.category}</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4 mt-2 w-full">
                {list.items.map((item) => {
                  return (
                  <div key={item.id} className="flex gap-2 items-start pr-2 w-full group/item relative">
                    <span className="text-xs font-mono text-paper/40 shrink-0 mt-[4px]">{item.rank}.</span>
                    <div className="flex flex-col min-w-0 w-full border-b border-paper/10 pb-2 sm:pb-3">
                      <div className="flex justify-between items-start w-full gap-2">
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm font-sans text-paper/90 truncate w-full group-hover/item:text-paper transition-colors">{item.title}</span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-paper/50 truncate w-full group-hover/item:text-paper/70 transition-colors">{item.subtitle}</span>
                        </div>
                        <div className="shrink-0 flex items-center gap-2 mt-[3px]">
                          {item.mapLink ? (
                            <div className="relative group/map">
                              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title + ', ' + item.subtitle)}`} target="_blank" rel="noopener noreferrer" className="text-paper/30 hover:text-paper transition-colors block" title="View on map">
                                <MapPin className="w-3.5 h-3.5" />
                              </a>
                              
                              {/* Map Preview Hover Card */}
                              <div className="absolute right-full top-0 mr-3 md:top-1/2 md:-translate-y-1/2 w-[200px] h-[150px] sm:w-[240px] sm:h-[180px] bg-paper p-1 rounded-[4px] shadow-2xl opacity-0 invisible group-hover/map:opacity-100 group-hover/map:visible transition-all duration-300 z-50 origin-right border border-bg/20 ring-1 ring-bg/5">
                                <div className="relative w-full h-full overflow-hidden rounded-[2px]">
                                  <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(item.title + ', ' + item.subtitle)}&t=&z=10&ie=UTF8&iwloc=&output=embed`}
                                    className="w-full h-full saturate-[0.85] brightness-[1.03] contrast-[0.93] pointer-events-none"
                                  />
                                  {/* Inner vignette for depth */}
                                  <div className="absolute inset-0 pointer-events-none rounded-[2px] shadow-[inset_0_0_14px_rgba(26,26,26,0.2)]"></div>
                                </div>
                                {/* Small triangle arrow at the right to point to the icon */}
                                <div className="absolute top-1.5 md:top-1/2 md:-translate-y-1/2 -right-1.5 w-3 h-3 bg-paper rotate-45 border-t border-r border-bg/20"></div>
                              </div>
                            </div>
                          ) : (
                            <div className="text-paper/10 block">
                              <MapPin className="w-3.5 h-3.5" />
                            </div>
                          )}
                          
                          {item.description ? (
                            <div className="relative group/note">
                              <StickyNote className="w-3.5 h-3.5 text-paper/30 group-hover/note:text-paper transition-colors cursor-default" />
                              
                              {/* Hover Card */}
                              <div className="absolute left-full top-0 ml-3 md:top-1/2 md:-translate-y-1/2 w-[200px] sm:w-[220px] bg-paper text-bg p-3 md:p-4 rounded-sm shadow-2xl opacity-0 invisible group-hover/note:opacity-100 group-hover/note:visible transition-all duration-300 z-50 border border-bg/10 origin-left">
                                <p className="text-[11px] md:text-xs font-serif leading-relaxed italic opacity-90 whitespace-normal">
                                  "{item.description}"
                                </p>
                                {/* Small triangle arrow at the left to point to the icon */}
                                <div className="absolute top-1.5 md:top-1/2 md:-translate-y-1/2 -left-1.5 w-3 h-3 bg-paper -rotate-45 border-l border-t border-bg/10"></div>
                              </div>
                            </div>
                          ) : (
                            <div className="text-paper/10 block">
                              <StickyNote className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )})}
              </div>
            </div>
          </div>
        ))}
      </div>
    </RamsSection>
  );
};
