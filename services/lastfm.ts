
import { Track } from '../types';

// Placeholder credentials - Replace these with your actual Last.fm details
const LASTFM_API_KEY = '829c6539a1510b3c8f784d8be97d4223'; 
const LASTFM_USERNAME = 'justmadhu';

export async function fetchTopAlbums(): Promise<Track[]> {
  if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
    return [];
  }

  // period=3month corresponds to approximately 90 days
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&period=3month&limit=10&format=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) return [];
    
    const data = await response.json();
    if (!data.topalbums || !data.topalbums.album) return [];
    
    const albums = data.topalbums.album;

    return albums.map((album: any, index: number) => {
      const albumName = album.name;
      const artistName = album.artist.name;
      // Construct a Spotify search URL for the specific album and artist
      const spotifySearchUrl = `https://open.spotify.com/search/${encodeURIComponent(artistName + ' ' + albumName)}`;

      return {
        id: `lfm-${index}`,
        title: albumName,
        artist: artistName,
        album: albumName,
        artUrl: album.image[3]['#text'] || `https://picsum.photos/seed/music-${index}/300/300`,
        status: index === 0 ? 'Current' : 'Recent',
        url: spotifySearchUrl
      };
    });
  } catch (error) {
    console.error('Last.fm Error:', error);
    return [];
  }
}
