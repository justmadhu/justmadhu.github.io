
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
  
  // Get initials as a fallback
  const initials = item.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className={`w-8 h-8 flex items-center justify-center border rams-border bg-white transition-all text-[9px] font-bold font-mono overflow-hidden ${className}`}>
      {error || !item.icon ? (
        <span>{initials}</span>
      ) : (
        <img 
          src={item.icon} 
          alt={item.name} 
          onError={() => setError(true)}
          className="w-full h-full object-contain p-1.5"
        />
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [listeningData, setListeningData] = useState<Track[]>([]);
  const [readingData, setReadingData] = useState<Book[]>([]);

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
        <header className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Title Block (Left) */}
          <div className="flex-shrink-0">
            <h1 className="text-5xl md:text-8xl font-bold font-mono tracking-tighter leading-[0.72] uppercase">
              MADHU <br /> 
              <span className="text-gray-300">MUTHU</span> <br /> 
              <span className="text-gray-300">KUMAR</span>
            </h1>
            <div className="w-16 h-[2px] bg-accent mt-6"></div>
          </div>
          
          {/* Bio / Subtitle Block (Right) */}
          <div className="md:max-w-md md:text-right">
            <p className="text-xl md:text-2xl text-gray-600 leading-tight font-light tracking-tight">
              {PROFILE_INFO.bio}
            </p>
          </div>
        </header>

        {/* Working Section */}
        <RamsSection title="Working" seeMoreUrl="https://www.linkedin.com/in/justmadhu">
          <div className="space-y-8">
            <div className="flex flex-nowrap items-center gap-x-8 md:gap-x-12 overflow-x-auto pb-4 no-scrollbar">
              {CAREER_HISTORY.map((item) => (
                <div key={item.id} className="flex items-center gap-2.5 group flex-shrink-0">
                  <CompanyIcon item={item} className="group-hover:bg-accent group-hover:text-white group-hover:border-accent" />
                  <div className="whitespace-nowrap">
                    <p className="text-[9px] font-mono font-bold uppercase tracking-tighter leading-none mb-1">{item.name}</p>
                    <p className="text-[8px] text-gray-400 font-mono uppercase tracking-tighter leading-none">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-nowrap items-center gap-x-8 md:gap-x-12 overflow-x-auto pb-4 no-scrollbar">
              {ADVISORY_HISTORY.map((item) => (
                <div key={item.id} className="flex items-center gap-2.5 group flex-shrink-0">
                  <CompanyIcon item={item} className="opacity-60 group-hover:opacity-100 group-hover:bg-accent group-hover:text-white group-hover:border-accent" />
                  <div className="whitespace-nowrap">
                    <p className="text-[9px] font-mono font-bold uppercase tracking-tighter leading-none mb-1 opacity-60 group-hover:opacity-100">{item.name}</p>
                    <p className="text-[8px] text-gray-400 font-mono uppercase tracking-tighter leading-none">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RamsSection>

        {/* Thinking */}
        <RamsSection title="Thinking" seeMoreUrl="blog.html">
          <div className="grid gap-3">
            {THINKING_ITEMS.map((item) => (
              <a 
                key={item.id} 
                href={item.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-white/40 backdrop-blur-sm rams-border hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="bg-accent/10 text-accent px-1.5 py-0.5 text-[8px] font-bold font-mono tracking-widest">{item.date}</span>
                      <span className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.type}</span>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight leading-none group-hover:text-accent transition-colors">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform rotate-[-45deg]"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </RamsSection>

        {/* Traveling */}
        <RamsSection title="Traveling">
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 no-scrollbar">
            {TRAVEL_STATS.map((stat) => {
              const dotSize = 'w-2.5 h-2.5';
              const gapSize = 'gap-[3px]';
              
              return (
                <div 
                  key={stat.id} 
                  className="group flex-shrink-0 w-[70vw] sm:w-[240px] lg:w-[210px] p-5 bg-white/40 backdrop-blur-sm rams-border space-y-5"
                >
                  <div className="border-b border-gray-100 pb-3">
                    <h4 className="text-[10px] font-mono font-bold text-black uppercase tracking-widest leading-none mb-1.5">{stat.label}</h4>
                    <div className="text-[11px] font-mono font-bold text-gray-400 leading-none">{stat.current} / {stat.total}</div>
                  </div>
                  <div className={`flex flex-wrap ${gapSize}`}>
                    {Array.from({ length: stat.total }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`${dotSize} rounded-none transition-colors duration-500 ${i < stat.current ? 'bg-black group-hover:bg-accent' : 'bg-gray-200'}`}
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
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 no-scrollbar">
              {listeningData.map((track) => (
                <a 
                  key={track.id} 
                  href={track.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group cursor-pointer flex-shrink-0 w-32 md:w-44 block"
                >
                  <div className="relative aspect-square mb-3 bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 rams-border shadow-sm">
                    <img src={track.artUrl} alt={track.album} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h4 className="font-bold text-[11px] tracking-tight leading-tight group-hover:text-accent">
                    {track.artist}
                  </h4>
                  <p className="text-[9px] text-gray-400 uppercase font-mono mt-1 leading-tight line-clamp-2">
                    {track.title}
                  </p>
                </a>
              ))}
            </div>
          </RamsSection>
        )}

        {/* Reading */}
        {readingData.length > 0 && (
          <RamsSection title="Reading" seeMoreUrl="https://openlibrary.org/people/madhu_muthukumar/books/already-read">
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 no-scrollbar">
              {readingData.map((book) => (
                <a 
                  key={book.id} 
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer flex-shrink-0 w-32 md:w-44 block"
                >
                  <div className="aspect-[2/3] mb-3 bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 rams-border shadow-sm">
                     <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h4 className="font-bold text-[11px] tracking-tight leading-tight group-hover:text-accent">
                    {book.author}
                  </h4>
                  <p className="text-[9px] text-gray-400 uppercase font-mono mt-1 leading-tight line-clamp-2">
                    {book.title}
                  </p>
                </a>
              ))}
            </div>
          </RamsSection>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 flex justify-center border-t border-gray-100">
          <p className="text-[9px] font-mono text-gray-400 font-bold tracking-[0.3em]">© 2026 MADHU MUTHU KUMAR</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
