
import React, { useState, useEffect } from 'react';
import { 
  PROFILE_INFO, 
  THINKING_ITEMS, 
  TRAVEL_STATS,
  CAREER_HISTORY,
  ADVISORY_HISTORY
} from './constants';
import RamsSection from './components/RamsSection';
import { TopLists } from './components/TopLists';
import { fetchTopAlbums } from './services/lastfm';
import { fetchBooks } from './services/books';
import { Track, Book, CareerItem } from './types';

const CompanyIcon: React.FC<{ item: CareerItem; className?: string }> = ({ item, className = "" }) => {
  const [error, setError] = useState(false);
  const initials = item.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();

  return (
    <div className={`aspect-square flex items-center justify-center bg-paper transition-all overflow-hidden flex-shrink-0 rounded-full ${className}`}>
      {item.icon && !error ? (
        <img 
          src={item.icon} 
          alt={item.name} 
          onError={() => {
            console.error(`Failed to load icon: ${item.icon}`);
            setError(true);
          }}
          className="w-full h-full object-contain p-2.5 mix-blend-multiply opacity-90"
        />
      ) : (
        <span className="text-xl font-display font-bold text-bg tracking-widest uppercase">
          {initials}
        </span>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [listeningData, setListeningData] = useState<Track[]>([]);
  const [readingData, setReadingData] = useState<Book[]>([]);
  const [activeTravelIndex, setActiveTravelIndex] = useState(0);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [activeBookIndex, setActiveBookIndex] = useState(0);

  useEffect(() => {
    async function loadData() {
      const [music, books] = await Promise.all([
        fetchTopAlbums(),
        fetchBooks()
      ]);
      setListeningData(music);
      setReadingData(books);
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen selection:bg-ink selection:text-bg pb-12 relative overflow-hidden">
      {/* Editorial Background Photo */}
      <div className="absolute -top-2 -right-2 w-[40vw] sm:-top-4 sm:-right-4 sm:w-[40vw] md:-top-12 md:-right-8 md:w-[45vw] lg:-top-12 lg:-right-8 lg:w-[49vw] max-w-[735px] pointer-events-none transition-opacity duration-1000 ease-out z-30">
        <div className="w-full aspect-square relative" style={{ isolation: 'isolate' }}>
          {/* Base shape blocker (solid border/square fix) to block elements sliding behind the translucent image */}
          <div 
            className="absolute inset-0 bg-bg scale-110 origin-top-right pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            style={{
              WebkitMaskImage: 'url("/assets/me.png")',
              WebkitMaskSize: 'cover',
              WebkitMaskPosition: 'center',
              maskImage: 'url("/assets/me.png")',
              maskSize: 'cover',
              maskPosition: 'center',
            }}
          ></div>

          {/* Actual image, blending with the bg-bg blocker layer */}
          <img 
            src="/assets/me.png" 
            alt="Profile Background" 
            className="absolute inset-0 w-full h-full object-cover object-center grayscale brightness-[1.6] contrast-[0.8] opacity-80 scale-110 origin-top-right mix-blend-luminosity pointer-events-none" 
          />

          {/* Tint overlay layer */}
          <div 
            className="absolute inset-0 bg-paper mix-blend-color scale-110 origin-top-right pointer-events-none opacity-20"
            style={{
              WebkitMaskImage: 'url("/assets/me.png")',
              WebkitMaskSize: 'cover',
              WebkitMaskPosition: 'center',
              maskImage: 'url("/assets/me.png")',
              maskSize: 'cover',
              maskPosition: 'center',
            }}
          ></div>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 pt-10 pb-8 md:py-12">
        
        {/* Header / Hero */}
        <header className="mb-12 md:mb-16 relative z-50">
          
          <div className="flex flex-col md:text-left items-start justify-center mt-6">
            
            {/* Desktop & Mobile Title */}
            <div className="flex flex-col z-10 overflow-visible w-full mt-8 sm:mt-12 lg:mt-0 relative">
              <h1 className="text-[14.5vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw] font-display font-extrabold uppercase leading-[0.75] text-paper opacity-30 sm:opacity-25 lg:opacity-20 transform -skew-x-6 whitespace-nowrap drop-shadow-md md:drop-shadow-none">
                MADHU
              </h1>
              <h1 className="text-[14.5vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw] font-inline font-extrabold uppercase leading-[0.75] text-paper transform -skew-x-6 whitespace-nowrap -mt-3 md:-mt-6 drop-shadow-md md:drop-shadow-none">
                MUTHUKUMAR
              </h1>
            </div>

            <div className="mt-8 sm:mt-16 md:mt-12 lg:mt-12 max-w-[85%] sm:max-w-[55vw] md:max-w-[45vw] lg:max-w-2xl px-0 relative z-40">
              <p className="font-serif text-lg md:text-2xl italic font-light text-paper leading-[1.2]">
                I design and build everyday products that hundreds of millions of people use and love.
              </p>
            </div>
          </div>
        </header>

        {/* Working Section */}
        <RamsSection title="I've helped build..." className="relative z-0">
          <div className="space-y-0 -mr-6 sm:-mr-8 lg:-mr-16">
            {/* Primary Career Row */}
            <div className="flex overflow-hidden group py-3 md:py-6 -mt-6 mask-image-edges">
              <div className="flex w-max animate-marquee md:animate-marquee-fast group-hover:pause-animation items-center">
                <div className="flex items-center gap-x-8 sm:gap-x-12 md:gap-x-24 pr-8 sm:pr-12 md:pr-24">
                  {CAREER_HISTORY.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-shrink-0 cursor-default">
                      <CompanyIcon item={item} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 group-hover:scale-110 transition-transform duration-500 shadow-sm" />
                      <div className="flex flex-col min-w-0">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-paper mb-0.5 md:mb-1 lg:mb-2 whitespace-nowrap transition-all">
                          {item.name}
                        </p>
                        <p className="text-[7.5px] sm:text-[8px] md:text-[9px] lg:text-[10px] text-paper/60 font-mono uppercase tracking-[0.2em] leading-none whitespace-nowrap">
                          {item.role}<span className="mx-1 md:mx-1.5 lg:mx-2">&bull;</span>{item.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-x-8 sm:gap-x-12 md:gap-x-24 pr-8 sm:pr-12 md:pr-24">
                  {CAREER_HISTORY.map((item, index) => (
                    <div key={`dup-${item.id}-${index}`} className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-shrink-0 cursor-default">
                      <CompanyIcon item={item} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 group-hover:scale-110 transition-transform duration-500 shadow-sm" />
                      <div className="flex flex-col min-w-0">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-paper mb-0.5 md:mb-1 lg:mb-2 whitespace-nowrap transition-all">
                          {item.name}
                        </p>
                        <p className="text-[7.5px] sm:text-[8px] md:text-[9px] lg:text-[10px] text-paper/60 font-mono uppercase tracking-[0.2em] leading-none whitespace-nowrap">
                          {item.role}<span className="mx-1 md:mx-1.5 lg:mx-2">&bull;</span>{item.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary Advisory Row */}
            <div className="flex overflow-hidden group py-3 md:py-6 -my-2 md:-my-2 mask-image-edges">
              <div className="flex w-max animate-marquee-reverse md:animate-marquee-reverse-fast group-hover:pause-animation items-center">
                <div className="flex items-center gap-x-8 sm:gap-x-12 md:gap-x-24 pr-8 sm:pr-12 md:pr-24">
                  {ADVISORY_HISTORY.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-shrink-0 cursor-default">
                      <CompanyIcon item={item} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 group-hover:scale-110 transition-transform duration-500 shadow-sm" />
                      <div className="flex flex-col min-w-0">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-paper mb-0.5 md:mb-1 lg:mb-2 whitespace-nowrap transition-all">
                          {item.name}
                        </p>
                        <p className="text-[7.5px] sm:text-[8px] md:text-[9px] lg:text-[10px] text-paper/60 font-mono uppercase tracking-[0.2em] leading-none whitespace-nowrap">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-x-8 sm:gap-x-12 md:gap-x-24 pr-8 sm:pr-12 md:pr-24">
                  {ADVISORY_HISTORY.map((item, index) => (
                    <div key={`dup-${item.id}-${index}`} className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-shrink-0 cursor-default">
                      <CompanyIcon item={item} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 group-hover:scale-110 transition-transform duration-500 shadow-sm" />
                      <div className="flex flex-col min-w-0">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-paper mb-0.5 md:mb-1 lg:mb-2 whitespace-nowrap transition-all">
                          {item.name}
                        </p>
                        <p className="text-[7.5px] sm:text-[8px] md:text-[9px] lg:text-[10px] text-paper/60 font-mono uppercase tracking-[0.2em] leading-none whitespace-nowrap">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RamsSection>

        {/* Traveling */}
        <RamsSection title="I've been to..." className="relative z-10">
          <div className="flex gap-4 md:gap-12 overflow-x-auto pb-6 no-scrollbar -mr-6 sm:-mr-8 lg:-mr-16 pr-6 sm:pr-8 lg:pr-16 w-[calc(100%+1.5rem)] sm:w-[calc(100%+2rem)] lg:w-[calc(100%+4rem)]">
            {TRAVEL_STATS.map((stat, index) => {
              const isActive = activeTravelIndex === index;
              return (
                <div 
                  key={stat.id}
                  onMouseEnter={() => setActiveTravelIndex(index)}
                  className={`group flex-shrink-0 w-[55vw] sm:w-[35vw] md:w-[26vw] lg:w-[18vw] xl:w-[14vw] border border-paper/20 p-4 sm:p-6 transition-all duration-500 cursor-default ${isActive ? 'bg-paper text-bg sm:scale-[1.02]' : 'bg-transparent text-paper opacity-70'}`}
                >
                  <div className="mb-4 sm:mb-8">
                    <div className={`text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-display font-black leading-[0.8] tracking-tighter mb-4 sm:mb-6 ${isActive ? 'text-bg' : 'text-paper'}`}>
                       {Math.round((stat.current / stat.total)*100)}<span className="text-[1.2rem] sm:text-[1.5rem] lg:text-[2rem] ml-1 sm:ml-2">%</span>
                    </div>
                    <h4 className="text-[10px] sm:text-[12px] font-sans font-bold uppercase tracking-[0.2em] leading-none mb-3">{stat.label}</h4>
                    <div className="flex flex-wrap gap-1 mb-4 hidden sm:flex">
                      {Array.from({ length: stat.total }).map((_, i) => (
                        <div 
                           key={i} 
                           className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${i < stat.current ? (isActive ? 'bg-bg' : 'bg-paper') : (isActive ? 'bg-bg/20' : 'bg-paper/10')}`}
                        ></div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-[2px] mb-3 sm:hidden">
                      {Array.from({ length: Math.min(stat.total, 50) }).map((_, i) => (
                        <div 
                           key={i} 
                           className={`w-1 h-1 rounded-full transition-colors duration-500 ${i < stat.current ? (isActive ? 'bg-bg' : 'bg-paper') : (isActive ? 'bg-bg/20' : 'bg-paper/10')}`}
                        ></div>
                      ))}
                      {stat.total > 50 && <span className={`text-[8px] ml-1 leading-none ${isActive ? 'text-bg' : 'text-paper/40'}`}>+</span>}
                    </div>
                    <div className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-widest ${isActive ? 'text-bg/60' : 'text-paper/50'}`}>{stat.current} out of {stat.total} visited</div>
                  </div>
                </div>
              );
            })}
          </div>
        </RamsSection>

        {/* Listening */}
        {listeningData.length > 0 && (
          <RamsSection title="I've been listening to...">
            <div className="flex gap-4 md:gap-16 overflow-x-auto pb-6 no-scrollbar -mr-6 sm:-mr-8 lg:-mr-16 pr-6 sm:pr-8 lg:pr-16 w-[calc(100%+1.5rem)] sm:w-[calc(100%+2rem)] lg:w-[calc(100%+4rem)]">
              {listeningData.map((track, index) => {
                const isActive = activeTrackIndex === index;
                return (
                  <a 
                    key={track.id} 
                    href={track.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onMouseEnter={() => setActiveTrackIndex(index)}
                    className="group cursor-pointer flex-shrink-0 w-[55vw] sm:w-[35vw] md:w-[26vw] lg:w-[18vw] xl:w-[14vw] block"
                  >
                    <div className={`relative aspect-square mb-6 overflow-hidden transition-all duration-700 shadow-2xl ${isActive ? 'filter-none scale-[1.02]' : 'grayscale contrast-[0.9] brightness-[1.2]'}`}>
                      <img 
                        src={track.artUrl} 
                        alt={track.album} 
                        className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-110" 
                      />
                      <div className={`absolute inset-0 bg-paper mix-blend-color pointer-events-none transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-20'}`}></div>
                    </div>
                    <h4 className={`font-serif text-xl sm:text-2xl md:text-3xl italic leading-none mb-2 md:mb-3 transition-colors ${isActive ? 'text-paper' : 'text-paper/80'}`}>
                      {track.artist}
                    </h4>
                    <p className="text-[8px] sm:text-[10px] text-paper/60 uppercase font-mono leading-relaxed tracking-[0.2em] line-clamp-2">
                      {track.title}
                    </p>
                  </a>
                );
              })}
            </div>
          </RamsSection>
        )}

        {/* Top Lists */}
        <TopLists />

        {/* Reading */}
        {readingData.length > 0 && (
          <RamsSection title="I just finished reading...">
            <div className="flex gap-4 md:gap-16 overflow-x-auto pb-6 no-scrollbar -mr-6 sm:-mr-8 lg:-mr-16 pr-6 sm:pr-8 lg:pr-16 w-[calc(100%+1.5rem)] sm:w-[calc(100%+2rem)] lg:w-[calc(100%+4rem)]">
              {readingData.map((book, index) => {
                const isActive = activeBookIndex === index;
                return (
                  <a 
                    key={book.id} 
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setActiveBookIndex(index)}
                    className="group cursor-pointer flex-shrink-0 w-[55vw] sm:w-[35vw] md:w-[26vw] lg:w-[18vw] xl:w-[14vw] block"
                  >
                    <div className={`relative aspect-[2/3] mb-6 overflow-hidden transition-all duration-700 shadow-2xl ${isActive ? 'filter-none scale-[1.02]' : 'grayscale contrast-[0.9] brightness-[1.2]'}`}>
                       <img 
                        src={book.coverUrl} 
                        alt={book.title} 
                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" 
                       />
                       <div className={`absolute inset-0 bg-paper mix-blend-color pointer-events-none transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-20'}`}></div>
                    </div>
                    <h4 className={`font-serif text-xl sm:text-2xl md:text-3xl italic leading-none mb-2 md:mb-3 transition-colors ${isActive ? 'text-paper' : 'text-paper/80'}`}>
                      {book.title}
                    </h4>
                    <p className="text-[8px] sm:text-[10px] text-paper/60 uppercase font-mono leading-relaxed tracking-[0.2em] line-clamp-2">
                      {book.author}
                    </p>
                  </a>
                );
              })}
            </div>
          </RamsSection>
        )}

        {/* Footer */}
        <footer className="mt-24 pt-16 flex justify-center border-t border-paper/20">
          <p className="text-[11px] font-mono text-paper/40 font-bold tracking-[0.4em]">© 2026 MADHU MUTHUKUMAR</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
