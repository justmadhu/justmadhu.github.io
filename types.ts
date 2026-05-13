
export interface CareerItem {
  id: string;
  name: string;
  role: string;
  year: string;
  icon: string; // Could be a simple SVG path or name
}

export interface ThinkingItem {
  id: string;
  title: string;
  date: string;
  type: 'POST' | 'VIDEO' | 'TALK' | 'PAPER';
  excerpt: string;
  url: string;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  artUrl: string;
  status: 'Recent' | 'Current';
  url?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  progress: number;
  coverUrl: string;
  url?: string;
}

export interface TravelStat {
  id: string;
  label: string;
  current: number;
  total: number;
}
