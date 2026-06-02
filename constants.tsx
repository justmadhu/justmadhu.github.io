
import { ThinkingItem, Track, Book, TravelStat, CareerItem } from './types';

// Profile Metadata
export const PROFILE_INFO = {
  name: "MADHU MUTHUKUMAR",
  role: "Chief Product Officer at Chime",
  location: "New York, NY",
  bio: "I design and build products hundreds of millions of people use and love.",
};

// Icon paths for career and advisory items
const ICONS = {
  chime: "/assets/icons/chime.png",
  notion: "/assets/icons/notion.png",
  acrew: "/assets/icons/acrew.png",
  cloudchef: "/assets/icons/cloudchef.png",
  decagon: "/assets/icons/decagon.png",
  headway: "/assets/icons/headway.png",
  mckinsey: "/assets/icons/mckinsey.png",
  oak: "/assets/icons/oak.png",
  oculus: "/assets/icons/oculus.png",
  penn: "/assets/icons/penn.png",
  robinhood: "/assets/icons/robinhood.png",
  tcnj: "/assets/icons/tcnj.png",
  twitter: "/assets/icons/twitter.png",
  wealthsimple: "/assets/icons/wealthsimple.png",
  whatnot: "/assets/icons/whatnot.png",
  first_harmonic: "/assets/icons/first_harmonic_logo.jpeg"
};

// --- API CONFIGURATION ---
export const OPENLIBRARY_USERNAME = 'madhu_muthukumar'; 
// -------------------------

export const CAREER_HISTORY: CareerItem[] = [
  { id: 'h1', name: 'Chime', role: 'CPO', year: '2023-2026', icon: ICONS.chime },
  { id: 'h2', name: 'Notion', role: 'CPO', year: '2022-2023', icon: ICONS.notion },
  { id: 'h3', name: 'Robinhood', role: 'Head of Product', year: '2018-2022', icon: ICONS.robinhood },
  { id: 'h4', name: 'Oculus', role: 'Director', year: '2016-2018', icon: ICONS.oculus },
  { id: 'h5', name: 'Twitter', role: 'Director', year: '2013-2016', icon: ICONS.twitter },
  { id: 'h6', name: 'McKinsey & Company', role: 'Eng Mgr', year: '2009-2013', icon: ICONS.mckinsey },
];

export const ADVISORY_HISTORY: CareerItem[] = [
  { id: 'a1', name: 'Decagon', role: 'Advisor', year: '2024', icon: ICONS.decagon },
  { id: 'a2', name: 'WealthSimple', role: 'Advisor', year: '2022', icon: ICONS.wealthsimple },
  { id: 'a3', name: 'Oak HC/FT', role: 'Advisor', year: '2025', icon: ICONS.oak },
  { id: 'a4', name: 'Acrew Capital', role: 'Advisor', year: '2025', icon: ICONS.acrew },
  { id: 'a5', name: 'First Harmonic', role: 'Advisor', year: '2025', icon: ICONS.first_harmonic }, 
  { id: 'a6', name: 'Whatnot', role: 'Investor', year: '2022', icon: ICONS.whatnot },
  { id: 'a7', name: 'Headway', role: 'Investor', year: '2022', icon: ICONS.headway },
  { id: 'a8', name: 'CloudChef', role: 'Investor', year: '2022', icon: ICONS.cloudchef },
  { id: 'a9', name: 'Various', role: 'Investor', year: '2020', icon: '' },
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
  { id: 's1', label: 'of all continents', current: 6, total: 7 },
  { id: 's2', label: 'of the wonders of the world', current: 8, total: 8 },
  { id: 's3', label: 'of all US states', current: 40, total: 50 },
  { id: 's4', label: 'of all US national parks', current: 37, total: 63 },
  { id: 's5', label: 'of all UNESCO 1M visitor sites', current: 44, total: 108 },
  { id: 's6', label: 'of all countries', current: 42, total: 196 }
];

export interface TopListItem {
  id: string;
  rank: number;
  title: string;
  subtitle: string;
  description?: string;
  mapLink?: string;
}

export interface TopListCategory {
  id: string;
  category: string;
  items: TopListItem[];
}

export const TOP_LISTS: TopListCategory[] = [
  {
    id: 'l1',
    category: 'Pizza',
    items: [
      { id: '1', rank: 1, title: 'Modern Apizza' , subtitle: 'New Haven, CT', description: 'Perfection. Thin crust, great sauce and a bit of char. Meatball and hot cherry pepper is the go-to.', mapLink: 'https://maps.app.goo.gl/9ZpLSk2LpY4TjSna8' },
      { id: '2', rank: 2, title: 'Di Fara Pizza', subtitle: 'Brooklyn, NY', description: '*The* NY Pizza. Watch Domenico make a pie and then comment.', mapLink: 'https://maps.app.goo.gl/uX7E3xP6ZpXfA8f76' },
      { id: '3', rank: 3, title: 'Rubirosa', subtitle: 'SoHo, New York, NY', description: 'Light and airy thin crust, with an incredible sauce. Can never go wrong.', mapLink: 'https://maps.app.goo.gl/3m1NfQ7D6S6W8Z8p7' },
      { id: '4', rank: 4, title: 'Da Michele', subtitle: 'Naples, IT', description: 'Simple construction, flawless execution. Crispy yet chewy. Deserves UNESCO-level recognition.', mapLink: 'https://maps.app.goo.gl/pL2f7JvV1Q8M6R9x8' },
      { id: '5', rank: 5, title: 'Pequod\'s Pizza', subtitle: 'Chicago, IL', description: 'If you are going to eat deep dish pizza, you want this one. Not a cheese bomb. Not a dry crust.', mapLink: 'https://maps.app.goo.gl/yP9V7K2L5W8vX1S4Z' }
    ]
  },
  {
    id: 'l2',
    category: 'Ramen',
    items: [
      { id: '1', rank: 1, title: 'Kikanbo', subtitle: 'Kanda, Tokyo, JP', description: 'Spicy Miso Tsukemen is outstanding. Spicy, numbing, umami-y, rich broth with thick bouncy noodles.', mapLink: 'https://maps.app.goo.gl/X8v1m7S8B1qZ9V6Y7' },
      { id: '2', rank: 2, title: 'Tsuta', subtitle: 'Yoyogi, Tokyo, JP', description: 'The original Michelin-starred ramen. Soba with Black Truffle Oil feels simple but refined.', mapLink: 'https://maps.app.goo.gl/8vX9Y6T3m5L1A7X9A' },
      { id: '3', rank: 3, title: 'Afuri', subtitle: 'Ebisu, Tokyo, JP', description: 'The yuzu spicy shio ramen is light and citrusy with a punch. Just a fun and refreshing bowl.', mapLink: 'https://maps.app.goo.gl/9T7m2L5W8vX1S4Z9A' },
      { id: '4', rank: 4, title: 'Ramen Hayashida', subtitle: 'Shinjuku, Tokyo, JP', description: 'Exceptional duck and chicken-based shoyu broth with perfectly chewy noodles.', mapLink: 'https://maps.app.goo.gl/yXp9R2hH7uYvW5N88' },
      { id: '5', rank: 5, title: 'Ramen Ishida', subtitle: 'Lower East Side, New York, NY', description: 'Small shop, unexpectedly good ramen and karaage. The Tokyo Shoyu ramen with truffle oil is a gem.', mapLink: 'https://maps.app.goo.gl/3Z8Vv6UvM9vXy5K8A' }
    ]
  },
  {
    id: 'l3',
    category: 'Service',
    items: [
      { id: '1', rank: 1, title: 'Chef\'s Table at Brooklyn Fare', subtitle: 'Midtown, New York, NY', description: 'I still remember every minute of this dinner. Service was incredible.', mapLink: 'https://maps.app.goo.gl/kXp9R2hH7uYvW5N88' },
      { id: '4', rank: 4, title: 'Le Bernardin', subtitle: 'Theater District, NY', description: 'The gold standard for seafood and service. You feel like royalty.', mapLink: 'https://maps.app.goo.gl/mX1m7S8B1qZ9V6Y7A' },
      { id: '3', rank: 3, title: 'Quince', subtitle: 'San Francisco, CA', description: 'Sitting in the kitchen for a course and seeing the attention to detail makes you appreciate it even more.', mapLink: 'https://maps.app.goo.gl/pZ8vV9T6m5L1A7X9A' },
      { id: '2', rank: 2, title: 'The Catbird Seat', subtitle: 'Nashville, TN', description: 'A small space with a rotating set of resident chefs who serve you (and talk to you!)', mapLink: 'https://maps.app.goo.gl/9T7m2L5W8vX1S4Z9A' },
      { id: '5', rank: 5, title: 'The River Cafe', subtitle: 'Brooklyn Heights, Brooklyn, NY', description: 'The quintessential "only in NY" feel. Classic waterfront elegance with skyline views of the city.', mapLink: 'https://maps.app.goo.gl/3Z8Vv6UvM9vXy5K8A' }
    ]
  },
  {
    id: 'l4',
    category: 'Cocktails',
    items: [
      { id: '1', rank: 1, title: 'Little Branch', subtitle: 'West Village, New York, NY', description: 'Hidden door. 3-piece live jazz. Incredible cocktail depth.', mapLink: 'https://maps.app.goo.gl/yXp9R2hH7uYvW5N88' },
      { id: '2', rank: 2, title: 'Attaboy', subtitle: 'Lower East Side, New York, NY', description: 'Non-descript place. Outrageously high-craft drinks. No frills.', mapLink: 'https://maps.app.goo.gl/mX1m7S8B1qZ9V6Y7A' },
      { id: '3', rank: 3, title: 'Bar Martha', subtitle: 'Ebisu, Tokyo, JP', description: 'Vinyl records, highballs, and a no talking policy. ', mapLink: 'https://maps.app.goo.gl/pZ8vV9T6m5L1A7X9A' },
      { id: '4', rank: 4, title: 'True Laurel', subtitle: 'San Francisco, CA', description: 'Get an "In the Pines." Hard not to like it.', mapLink: 'https://maps.app.goo.gl/9T7m2L5W8vX1S4Z9A' },
      { id: '5', rank: 5, title: 'The American Bar at The Savoy', subtitle: 'London, UK', description: 'You feel like James Bond. In the 1950s. It exudes cool.', mapLink: 'https://maps.app.goo.gl/3Z8Vv6UvM9vXy5K8A' }
    ]
  },
  {
  id: 'l5',
  category: 'View',
  items: [
    { 
      id: '1', 
      rank: 1, 
      title: 'Khufu\'s', 
      subtitle: 'Giza, EG', 
      description: '3-course meals within the Great Pyramids complex', 
      mapLink: 'https://maps.app.goo.gl/Yp4A3LAn8PAnS6q77' 
    },
    { 
      id: '2', 
      rank: 2, 
      title: 'Dionysos Zonar\'s', 
      subtitle: 'Athens, GR', 
      description: 'Open air patio at the foot of the Acropolis', 
      mapLink: 'https://maps.app.goo.gl/w9uGzRj9R8v7fA8p9' 
    },
    { 
      id: '3', 
      rank: 3, 
      title: 'Aprazível', 
      subtitle: 'Rio de Janeiro, BR', 
      description: 'Like a series of treehouses overlooking city of Rio.', 
      mapLink: 'https://maps.app.goo.gl/hGzN6xL8v9A8r6vU7' 
    },
    { 
      id: '4', 
      rank: 4, 
      title: 'Geoffrey\'s', 
      subtitle: 'Malibu, CA', 
      description: 'Brunch on the patio overlooking the Pacific Ocean.', 
      mapLink: 'https://maps.app.goo.gl/mX7S8B1qZ9V6Y7A1S' 
    },
    { 
      id: '5', 
      rank: 5, 
      title: 'Osprey\'s Nest', 
      subtitle: 'Wangetti, AU', 
      description: 'A sweeping overlook of the Daintree Rainforest meeting the Great Barrier Reef.', 
      mapLink: 'https://maps.app.goo.gl/pZ8vV9T6m5L1A7X9A' 
    }
  ]
  },
  {
    id: 'l6',
    category: 'Raw bar',
    items: [
      { id: '1', rank: 1, title: 'Neptune Oyster Bar', subtitle: 'Boston, MA', description: 'Line out the door, and the cold lobster roll alone is worth it.', mapLink: 'https://maps.app.goo.gl/yXp9R2hH7uYvW5N88' },
      { id: '2', rank: 2, title: 'Cal Pep', subtitle: 'Barcelona, ES', description: 'Incredible counter service. Fresh catch from boat to griddle.', mapLink: 'https://maps.app.goo.gl/mX1m7S8B1qZ9V6Y7A' },
      { id: '3', rank: 3, title: 'Hog Island Oyster Co.', subtitle: 'Marshall, CA', description: 'Shuck your own oysters right on the edge of the bay.', mapLink: 'https://maps.app.goo.gl/pZ8vV9T6m5L1A7X9A' },
      { id: '4', rank: 4, title: 'Pearl Oyster Bar', subtitle: 'West Village, New York, NY', description: 'Lobster rolls, fresh oysters and shoestring fries belong together.', mapLink: 'https://maps.app.goo.gl/9T7m2L5W8vX1S4Z9A' },
      { id: '5', rank: 5, title: 'Seaworthy', subtitle: 'New Orleans, LA', description: 'Smallish place, with a good selection and attention to detail. Feels underhyped.', mapLink: 'https://maps.app.goo.gl/3Z8Vv6UvM9vXy5K8A' }
    ]
  },
  {
    id: 'l7',
    category: 'BBQ',
    items: [
      { id: '1', rank: 1, title: 'Joe\'s Kansas City B-B-Q', subtitle: 'Kansas City, MO', description: 'The Z-Man sandwich and ribs are astounding.', mapLink: 'https://maps.app.goo.gl/yXp9R2hH7uYvW5N88' },
      { id: '2', rank: 2, title: 'Peg Leg Porker', subtitle: 'Nashville, TN', description: 'Chicken, ribs and the best spicy barbeque sauce I\'ve ever had.', mapLink: 'https://maps.app.goo.gl/mX1m7S8B1qZ9V6Y7A' },
      { id: '3', rank: 3, title: 'Bogart\'s Smokehouse', subtitle: 'St. Louis, MO', description: 'If you like a saucy rib, you\'ll love this place.', mapLink: 'https://maps.app.goo.gl/pZ8vV9T6m5L1A7X9A' },
      { id: '4', rank: 4, title: 'Central BBQ', subtitle: 'Memphis, TN', description: 'The best dry rub. Sad that I tried other places in town.', mapLink: 'https://maps.app.goo.gl/9T7m2L5W8vX1S4Z9A' },
      { id: '5', rank: 5, title: 'Brantley Creek Barbecue', subtitle: 'Odessa, TX', description: 'Family outdoor setting with incredible brisket. Make a day of it.', mapLink: 'https://maps.app.goo.gl/3Z8Vv6UvM9vXy5K8A' }
    ]
  },
  {
    id: 'l8',
    category: 'Steak',
    items: [
      { id: '1', rank: 1, title: 'Don Julio', subtitle: 'Buenos Aires, AR', description: 'A huge parrilla and steak so tender they cut it with a spoon.', mapLink: 'https://maps.app.goo.gl/yXp9R2hH7uYvW5N88' },
      { id: '2', rank: 2, title: 'COTE', subtitle: 'Flatiron, New York, NY', description: 'Reimagined Korean BBQ with amazing cuts of steak.', mapLink: 'https://maps.app.goo.gl/mX1m7S8B1qZ9V6Y7A' },
      { id: '3', rank: 3, title: 'Peter Luger\'s', subtitle: 'Brooklyn, NY', description: 'A NY staple. Get the porterhouse and a bacon and onion salad.', mapLink: 'https://maps.app.goo.gl/pZ8vV9T6m5L1A7X9A' },
      { id: '4', rank: 4, title: 'Assador', subtitle: 'Rio de Janeiro, BR', description: 'Could not stop eating the Picanha.' , mapLink: 'https://maps.app.goo.gl/9T7m2L5W8vX1S4Z9A' },
      { id: '5', rank: 5, title: 'Hawksmoor', subtitle: 'London, UK', description: 'Classy upscale steakhouse that only the Brits could pull off.', mapLink: 'https://maps.app.goo.gl/3Z8Vv6UvM9vXy5K8A' }
    ]
  },
  {
    id: 'l9',
    category: 'Sandwiches',
    items: [
      { 
        id: '1', 
        rank: 1, 
        title: 'DiNic’s Roast Pork', 
        subtitle: 'Philadelphia, PA', 
        description: 'The definitive Philly sandwich: slow-roasted pork, sharp provolone, and sautéed broccoli rabe.', 
        mapLink: 'https://maps.app.goo.gl/yLzY7vB1p9N8z9A76' 
      },
      { 
        id: '2', 
        rank: 2, 
        title: 'John’s Roast Pork', 
        subtitle: 'Philadelphia, PA', 
        description: 'The best cheesesteak. It\'s so good, that a counter service spot with plastic tables got a James Beard award.', 
        mapLink: 'https://maps.app.goo.gl/9m2FpEaB7mU5v6vU8' 
      },
      { 
        id: '3', 
        rank: 3, 
        title: 'Parkway Bakery & Tavern', 
        subtitle: 'New Orleans, LA', 
        description: 'If you like a po\' boy, go there. If you want to like a po\' boy, go there.', 
        mapLink: 'https://maps.app.goo.gl/w9uGzRj9R8v7fA8p9' 
      },
      { 
        id: '4', 
        rank: 4, 
        title: 'Hoagie Haven', 
        subtitle: 'Princeton, NJ', 
        description: 'IYKYK. Get a "Phat Lady" or a chicken cutlet with their signature Sanchez sauce and hot peppers.', 
        mapLink: 'https://maps.app.goo.gl/hGzN6xL8v9A8r6vU7' 
      },
      { 
        id: '5', 
        rank: 5, 
        title: 'Johnnie’s Beef', 
        subtitle: 'Elmwood Park, IL', 
        description: 'This is a delicious and messy sandwich. Ask for it "juicy" at your own risk... and the hot giardiniera is hot.', 
        mapLink: 'https://maps.app.goo.gl/N9MvL7Yv9U7eP6X89' 
      }
    ]
  },
  {
    id: 'l10',
    category: 'Lobster Roll',
    items: [
      { id: '1', rank: 1, title: 'McLoon\'s Lobster Shack', subtitle: 'South Thomaston, ME', description: 'The defining experience of what a great lobster roll and seaside shack should be.' },
      { id: '2', rank: 2, title: 'Beal\'s Lobster Pier', subtitle: 'Southwest Harbor, ME', description: 'Garlic Lovah\'s Lobster Roll was outstanding full of slightly sweet lobster on a great Brioche roll.' },
      { id: '3', rank: 3, title: 'Neptune Oyster Bar', subtitle: 'Boston, MA', description: 'Hot Roll, Cold Roll, who cares, it\'s all excellent.' },
      { id: '4', rank: 4, title: 'Off The Hook', subtitle: 'Mystic, CT', description: 'Lobster Tempura with Scallions sounded like an unnecessary modern twist, but it was great.' },
      { id: '5', rank: 5, title: 'James Hook Lobster Co', subtitle: 'Boston, MA', description: 'Hard to say anything negative. Good amount of lobster, good roll, easy to get to.' }
    ]
  },
];