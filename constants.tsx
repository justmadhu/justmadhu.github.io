
import { ThinkingItem, Track, Book, TravelStat, CareerItem } from './types';

// Profile Metadata
export const PROFILE_INFO = {
  name: "MADHU MUTHUKUMAR",
  role: "Chief Product Officer at Chime",
  location: "New York, NY",
  bio: "I help design and build products loved by hundreds of millions of people.",
};

// SVG Data URIs for reliable rendering in static environments
const ICONS = {
  chime: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='white' d='M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 19c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z'/%3E%3C/svg%3E",
  notion: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='white' d='M8 6v20h16V6H8zm2 2h2v14l6-14h2v16h-2V10l-6 14h-2V8z'/%3E%3C/svg%3E",
  robinhood: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='white' d='M16 6l10 18H6L16 6zm0 4.5L9.5 22h13L16 10.5z'/%3E%3C/svg%3E",
  oculus: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='none' stroke='white' stroke-width='3' d='M16 10c-5.52 0-10 2.68-10 6s4.48 6 10 6 10-2.68 10-6-4.48-6-10-6z'/%3E%3C/svg%3E",
  twitter: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='white' d='M24 6l-7.5 9L26 26h-5.2l-6.8-9.1L8.8 26H4l8.2-9.8L4 6h5.2l6.1 8.2L20.8 6H24z'/%3E%3C/svg%3E",
  mckinsey: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='none' stroke='white' stroke-width='2.5' d='M8 10l8 12 8-12'/%3E%3C/svg%3E"
};

// --- API CONFIGURATION ---
export const OPENLIBRARY_USERNAME = 'madhu_muthukumar'; 
// -------------------------

export const CAREER_HISTORY: CareerItem[] = [
  { id: 'h1', name: 'Chime', role: 'CPO', year: 'PRESENT', icon: ICONS.chime },
  { id: 'h2', name: 'Notion', role: 'CPO', year: 'PREV', icon: ICONS.notion },
  { id: 'h3', name: 'Robinhood', role: 'VP / Head of Product', year: 'PREV', icon: ICONS.robinhood },
  { id: 'h4', name: 'Oculus', role: 'Director', year: 'PREV', icon: ICONS.oculus },
  { id: 'h5', name: 'Twitter', role: 'Director', year: 'PREV', icon: ICONS.twitter },
  { id: 'h6', name: 'McKinsey & Company', role: 'Eng Mgr', year: 'PREV', icon: ICONS.mckinsey },
  { id: 'h7', name: 'Penn Law', role: 'Juris Doctor', year: 'PREV', icon: '' },
  { id: 'h8', name: 'Wharton School', role: 'Certificate of Business', year: 'PREV', icon: '' },
  { id: 'h9', name: 'The College of NJ', role: 'Biology, Statistics', year: 'PREV', icon: '' },
];

export const ADVISORY_HISTORY: CareerItem[] = [
  { id: 'a1', name: 'Decagon', role: 'Advisor', year: '2024', icon: '' },
  { id: 'a2', name: 'WealthSimple', role: 'Advisor', year: '2022', icon: '' },
  { id: 'a3', name: 'Oak HC/FT', role: 'Advisor', year: '2025', icon: '' },
  { id: 'a4', name: 'Acrew Capital', role: 'Advisor', year: '2025', icon: '' },
  { id: 'a5', name: 'Whatnot', role: 'Investor', year: '2022', icon: '' },
  { id: 'a6', name: 'Headway', role: 'Investor', year: '2022', icon: '' },
  { id: 'a7', name: 'CloudChef', role: 'Investor', year: '2022', icon: '' },
  { id: 'a8', name: 'Various', role: 'Investor', year: '2020', icon: '' },
];

export const THINKING_ITEMS: ThinkingItem[] = [
  {
    id: '1',
    title: "The Ethics of Generative Interfaces",
    date: "2024.11.12",
    type: 'POST',
    excerpt: "Exploring how we can maintain Dieter Rams' principles in the age of AI.",
    url: "#"
  },
  {
    id: '2',
    title: "Future of Human-Machine Symbiosis",
    date: "2024.10.15",
    type: 'TALK',
    excerpt: "Keynote at DesignSystems 2024, London.",
    url: "#"
  },
  {
    id: '3',
    title: "Synthesizing Reality",
    date: "2024.09.05",
    type: 'VIDEO',
    excerpt: "A visual essay on the blurring lines between digital and physical.",
    url: "#"
  },
  {
    id: '4',
    title: "Analogue Hardware in a Digital World",
    date: "2024.08.21",
    type: 'POST',
    excerpt: "Why the feel of a physical knob matters more than ever.",
    url: "#"
  }
];

export const MUSIC_LIST: Track[] = [
  { id: 'm1', title: "Aura", artist: "Bicep", album: "Aura", artUrl: "https://picsum.photos/seed/m1/300/300", status: 'Current' },
  { id: 'm2', title: "Windowlicker", artist: "Aphex Twin", album: "Windowlicker", artUrl: "https://picsum.photos/seed/m2/300/300", status: 'Recent' },
  { id: 'm3', title: "Music for Airports", artist: "Brian Eno", album: "Ambient 1", artUrl: "https://picsum.photos/seed/m3/300/300", status: 'Recent' },
  { id: 'm4', title: "Vordhosbn", artist: "Aphex Twin", album: "Drukqs", artUrl: "https://picsum.photos/seed/m4/300/300", status: 'Recent' },
  { id: 'm5', title: "Glue", artist: "Bicep", album: "Bicep", artUrl: "https://picsum.photos/seed/m5/300/300", status: 'Recent' },
  { id: 'm6', title: "Alberto Balsalm", artist: "Aphex Twin", album: "I Care Because You Do", artUrl: "https://picsum.photos/seed/m6/300/300", status: 'Recent' },
  { id: 'm7', title: "Midnight City", artist: "M83", album: "Hurry Up, We're Dreaming", artUrl: "https://picsum.photos/seed/m7/300/300", status: 'Recent' },
  { id: 'm8', title: "The Rip", artist: "Portishead", album: "Third", artUrl: "https://picsum.photos/seed/m8/300/300", status: 'Recent' },
  { id: 'm9', title: "Teardrop", artist: "Massive Attack", album: "Mezzanine", artUrl: "https://picsum.photos/seed/m9/300/300", status: 'Recent' },
  { id: 'm10', title: "Kelly Watch the Stars", artist: "Air", album: "Moon Safari", artUrl: "https://picsum.photos/seed/m10/300/300", status: 'Recent' },
];

export const BOOKS_READING: Book[] = [];

export const TRAVEL_STATS: TravelStat[] = [
  { id: 's1', label: 'Continents', current: 6, total: 7 },
  { id: 's2', label: 'World Wonders', current: 7, total: 8 },
  { id: 's3', label: 'US National Parks', current: 32, total: 63 },
  { id: 's4', label: 'UNESCO 1M Sites', current: 42, total: 108 },
  { id: 's5', label: 'Countries', current: 41, total: 196 },
];
