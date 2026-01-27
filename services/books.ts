import { Book } from '../types';
import { OPENLIBRARY_USERNAME } from '../constants';

export async function fetchBooks(): Promise<Book[]> {
  if (!OPENLIBRARY_USERNAME) {
    return [];
  }

  // We fetch the 'already-read' shelf for the user
  const url = `https://openlibrary.org/people/${OPENLIBRARY_USERNAME}/books/already-read.json`;

  try {
    const response = await fetch(url);
    if (!response.ok) return [];
    
    const data = await response.json();
    if (!data.reading_log_entries) return [];

    // Sort by 'Date added' (logged_date) starting with the oldest first
    const sortedEntries = data.reading_log_entries
      .sort((a: any, b: any) => {
        const dateA = a.logged_date ? new Date(a.logged_date).getTime() : 0;
        const dateB = b.logged_date ? new Date(b.logged_date).getTime() : 0;
        return dateA - dateB; // Ascending order: oldest first
      })
      .slice(0, 10); // Display a selection of 10 items

    // Map the sorted entries to our Book interface
    return sortedEntries.map((entry: any, index: number): Book => {
      const work = entry.work;
      const author = work.author_names ? work.author_names[0] : "Various Authors";
      
      return {
        id: work.key || `ol-${index}`,
        title: work.title,
        author: author,
        progress: 100,
        // Open Library Covers API: https://openlibrary.org/dev/docs/api/covers
        coverUrl: work.cover_id 
          ? `https://covers.openlibrary.org/b/id/${work.cover_id}-L.jpg` 
          : `https://picsum.photos/seed/${work.key}/300/450`,
        url: `https://openlibrary.org${work.key}`
      };
    });
  } catch (error) {
    console.error('Open Library Shelf Error:', error);
    return [];
  }
}