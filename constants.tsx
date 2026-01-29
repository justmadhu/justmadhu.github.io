
import { ThinkingItem, Track, Book, TravelStat, CareerItem } from './types';

// Profile Metadata
export const PROFILE_INFO = {
  name: "MADHU MUTHUKUMAR",
  role: "Chief Product Officer at Chime",
  location: "New York, NY",
  bio: "I help design and build products loved by hundreds of millions of people.",
};

// --- API CONFIGURATION ---
export const OPENLIBRARY_USERNAME = 'madhu_muthukumar'; 
// -------------------------

export const CAREER_HISTORY: CareerItem[] = [
  { id: 'h1', name: 'Chime', role: 'CPO', year: 'PRESENT', icon: 'assets/icons/chime.png' },
  { id: 'h2', name: 'Notion', role: 'CPO', year: 'PREV', icon: 'assets/icons/notion.png' },
  { id: 'h3', name: 'Robinhood', role: 'VP / Head of Product', year: 'PREV', icon: 'assets/icons/robinhood.png' },
  { id: 'h4', name: 'Oculus', role: 'Director', year: 'PREV', icon: 'assets/icons/oculus.png' },
  { id: 'h5', name: 'Twitter', role: 'Director', year: 'PREV', icon: 'assets/icons/twitter.png' },
  { id: 'h6', name: 'McKinsey & Company', role: 'Eng Mgr', year: 'PREV', icon: 'assets/icons/mckinsey.png' },
  { id: 'h7', name: 'Penn Law', role: 'Juris Doctor', year: 'PREV', icon: 'assets/icons/penn.png' },
  { id: 'h8', name: 'Wharton School', role: 'Certificate of Business', year: 'PREV', icon: 'assets/icons/penn.png' },
  { id: 'h9', name: 'The College of NJ', role: 'Biology, Statistics', year: 'PREV', icon: 'assets/icons/tcnj.png' },
];

export const ADVISORY_HISTORY: CareerItem[] = [
  { id: 'a1', name: 'Decagon', role: 'Advisor', year: '2024', icon: 'assets/icons/decagon.png' },
  { id: 'a2', name: 'WealthSimple', role: 'Advisor', year: '2022', icon: 'assets/icons/wealthsimple.png' },
  { id: 'a3', name: 'Oak HC/FT', role: 'Advisor', year: '2025', icon: 'assets/icons/oak.png' },
  { id: 'a4', name: 'Acrew Capital', role: 'Advisor', year: '2025', icon: 'assets/icons/acrew.png' },
  { id: 'a5', name: 'Whatnot', role: 'Investor', year: '2022', icon: 'assets/icons/whatnot.png' },
  { id: 'a6', name: 'Headway', role: 'Investor', year: '2022', icon: 'assets/icons/headway.png' },
  { id: 'a7', name: 'CloudChef', role: 'Investor', year: '2022', icon: 'assets/icons/cloudchef.png' },
  { id: 'a8', name: 'Various', role: 'Investor', year: '2020', icon: 'assets/icons/various.png' },
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
