
import React, { useState, useEffect } from 'react';
import { 
  PROFILE_INFO, 
  THINKING_ITEMS, 
  TRAVEL_STATS,
  CAREER_HISTORY,
  ADVISORY_HISTORY
} from './constants';
import RamsSection from './components/RamsSection';
import { fetchTopAlbums } from './services/lastfm';
import { fetchBooks } from './services/books';
import { Track, Book, CareerItem } from './types';

const CompanyIcon: React.FC<{ item: CareerItem; className?: string }> = ({ item, className = "" }) => {
  const [error, setError] = useState(false);
  const initials = item.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();

  return (
    <div className={`aspect-square w-12 h-12 flex items-center justify-center bg-[#1a1a1a] transition-all overflow-hidden flex-shrink-0 rams-border ${className}`}>
      {item.icon && !error ? (
        <img 
          src={item.icon} 
          alt={item.name} 
          onError={() => {
            console.error(`Failed to load icon: ${item.icon}`);
            setError(true);
          }}
          className="w-full h-full object-contain p-2.5"
        />
      ) : (
        <span className="text-[11px] font-mono font-bold text-white tracking-tighter">
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
    <div className="min-h-screen selection:bg-accent selection:text-white pb-12">
      {/* Decorative Outer Frame */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] border-[12px] border-black"></div>

      <main className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        
        {/* Header / Hero */}
        <header className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[min-content_1fr] gap-x-12 gap-y-0 items-start">
            
            {/* Row 1: MADHU */}
            <div className="order-1 lg:order-1 text-5xl md:text-8xl font-bold font-mono tracking-tighter uppercase leading-none text-black whitespace-nowrap self-start">
              MADHU
            </div>
            
            {/* Subtitle 1 */}
            <div className="order-4 lg:order-2 lg:text-right lg:flex lg:justify-end self-start mt-10 lg:mt-0">
              <p className="text-xl md:text-3xl text-black font-bold tracking-tight lg:max-w-xl leading-tight">
                I help design and build products that hundreds of millions of people love.
              </p>
            </div>

            {/* Row 2: MUTHU */}
            <div className="order-2 lg:order-3 text-5xl md:text-8xl font-bold font-mono tracking-tighter uppercase leading-none text-gray-400 whitespace-nowrap self-start">
              MUTHU
            </div>
            
            {/* Subtitle 2 */}
            <div className="order-5 lg:order-4 lg:text-right lg:flex lg:justify-end self-start mt-4 lg:mt-0">
              <p className="text-xl md:text-3xl text-gray-400 font-light tracking-tight lg:max-w-xl leading-tight">
                I believe everyday products deserve to be simple, usable and delightful.
              </p>
            </div>

            {/* Row 3: KUMAR */}
            <div className="order-3 lg:order-5 text-5xl md:text-8xl font-bold font-mono tracking-tighter uppercase leading-none text-gray-400 whitespace-nowrap self-end">
              KUMAR
            </div>
            
            {/* Location */}
            <div className="hidden lg:flex order-6 lg:order-6 lg:text-right lg:justify-end self-end lg:mt-0">
              <div className="flex items-center gap-2 text-gray-500">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-[12px] font-mono font-bold uppercase tracking-widest">
                  {PROFILE_INFO.location}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Working Section */}
        <RamsSection title="Working" seeMoreUrl="https://www.linkedin.com/in/justmadhu">
          <div className="space-y-12">
            {/* Primary Career Row */}
            <div className="flex flex-nowrap items-center gap-x-12 md:gap-x-20 overflow-x-auto pb-6 no-scrollbar pr-12">
              {CAREER_HISTORY.map((item) => (
                <div key={item.id} className="flex items-center gap-5 group flex-shrink-0">
                  <CompanyIcon item={item} className="group-hover:bg-accent transition-colors" />
                  <div className="flex flex-col min-w-0">
                    <p className="text-[12px] font-mono font-bold uppercase tracking-tight leading-none text-black mb-1.5 whitespace-nowrap group-hover:text-accent transition-colors">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-gray-500 font-mono uppercase tracking-tighter leading-none whitespace-nowrap">
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary Advisory Row (Grayed Out) */}
            <div className="flex flex-nowrap items-center gap-x-12 md:gap-x-20 overflow-x-auto pb-6 no-scrollbar opacity-40 hover:opacity-100 transition-opacity duration-500 pr-12">
              {ADVISORY_HISTORY.map((item) => (
                <div key={item.id} className="flex items-center gap-5 group flex-shrink-0">
                  <CompanyIcon item={item} className="group-hover:bg-accent transition-colors" />
                  <div className="flex flex-col min-w-0">
                    <p className="text-[12px] font-mono font-bold uppercase tracking-tight leading-none text-black mb-1.5 whitespace-nowrap">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-gray-500 font-mono uppercase tracking-tighter leading-none whitespace-nowrap">
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RamsSection>

        {/* Thinking */}
        <RamsSection title="Thinking" seeMoreUrl="#">
          <div className="grid gap-4">
            {THINKING_ITEMS.map((item) => (
              <a 
                key={item.id} 
                href={item.url} 
                className="group block p-6 bg-white/40 backdrop-blur-sm rams-border hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="bg-accent/10 text-accent px-2 py-0.5 text-[11px] font-bold font-mono tracking-widest">{item.date}</span>
                      <span className="font-mono text-[11px] text-gray-500 font-bold uppercase tracking-widest">{item.type}</span>
                    </div>
                    <h3 className="text-xl font-medium tracking-tight leading-none group-hover:text-accent transition-colors">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform rotate-[-45deg]"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </RamsSection>

        {/* Traveling */}
        <RamsSection title="Traveling">
          <div className="flex gap-6 md:gap-10 overflow-x-auto pb-6 no-scrollbar pr-12">
            {TRAVEL_STATS.map((stat, index) => {
              const isActive = activeTravelIndex === index;
              const dotSize = 'w-3 h-3';
              const gapSize = 'gap-[4px]';
              
              return (
                <div 
                  key={stat.id} 
                  onMouseEnter={() => setActiveTravelIndex(index)}
                  className={`group flex-shrink-0 w-[80vw] sm:w-[260px] lg:w-[220px] p-6 backdrop-blur-sm rams-border space-y-6 transition-all duration-300 cursor-default ${isActive ? 'bg-white shadow-md' : 'bg-white/40 opacity-80'}`}
                >
                  <div className="border-b border-gray-100 pb-4">
                    <h4 className="text-[12px] font-mono font-bold text-black uppercase tracking-widest leading-none mb-2">{stat.label}</h4>
                    <div className="text-[12px] font-mono text-gray-500 leading-none font-medium">{stat.current} / {stat.total}</div>
                  </div>
                  <div className={`flex flex-wrap ${gapSize}`}>
                    {Array.from({ length: stat.total }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`${dotSize} rounded-none transition-colors duration-500 ${i < stat.current ? (isActive ? 'bg-accent' : 'bg-black') : 'bg-gray-200'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </RamsSection>

        {/* Listening */}
        {listeningData.length > 0 && (
          <RamsSection title="Listening" seeMoreUrl="https://www.last.fm/user/justmadhu">
            <div className="flex gap-8 md:gap-12 overflow-x-auto pb-6 no-scrollbar pr-12">
              {listeningData.map((track, index) => {
                const isActive = activeTrackIndex === index;
                return (
                  <a 
                    key={track.id} 
                    href={track.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onMouseEnter={() => setActiveTrackIndex(index)}
                    className="group cursor-pointer flex-shrink-0 w-36 md:w-48 block"
                  >
                    <div className={`relative aspect-square mb-4 bg-gray-200 overflow-hidden transition-all duration-500 rams-border shadow-sm ${isActive ? 'grayscale-0' : 'grayscale'}`}>
                      <img 
                        src={track.artUrl} 
                        alt={track.album} 
                        className={`object-cover w-full h-full transform transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100'}`} 
                      />
                    </div>
                    <h4 className={`font-bold text-[13px] tracking-tight leading-tight transition-colors ${isActive ? 'text-accent' : 'text-black'}`}>
                      {track.artist}
                    </h4>
                    <p className="text-[11px] text-gray-500 uppercase font-mono mt-2 leading-tight line-clamp-2 font-medium tracking-tight">
                      {track.title}
                    </p>
                  </a>
                );
              })}
            </div>
          </RamsSection>
        )}

        {/* Reading */}
        {readingData.length > 0 && (
          <RamsSection title="Reading" seeMoreUrl="https://openlibrary.org/people/madhu_muthukumar/books/already-read">
            <div className="flex gap-8 md:gap-12 overflow-x-auto pb-6 no-scrollbar pr-12">
              {readingData.map((book, index) => {
                const isActive = activeBookIndex === index;
                return (
                  <a 
                    key={book.id} 
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setActiveBookIndex(index)}
                    className="group cursor-pointer flex-shrink-0 w-36 md:w-48 block"
                  >
                    <div className={`aspect-[2/3] mb-4 bg-gray-200 overflow-hidden transition-all duration-500 rams-border shadow-sm ${isActive ? 'grayscale-0' : 'grayscale'}`}>
                       <img 
                        src={book.coverUrl} 
                        alt={book.title} 
                        className={`w-full h-full object-cover transform transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100'}`} 
                       />
                    </div>
                    <h4 className={`font-bold text-[13px] tracking-tight leading-tight transition-colors ${isActive ? 'text-accent' : 'text-black'}`}>
                      {book.author}
                    </h4>
                    <p className="text-[11px] text-gray-500 uppercase font-mono mt-2 leading-tight line-clamp-2 font-medium tracking-tight">
                      {book.title}
                    </p>
                  </a>
                );
              })}
            </div>
          </RamsSection>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-12 flex justify-center border-t border-gray-200">
          <p className="text-[11px] font-mono text-gray-500 font-bold tracking-[0.4em]">© 2026 MADHU MUTHUKUMAR</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
