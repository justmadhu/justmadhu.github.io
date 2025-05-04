import { useEffect, useState } from 'react';

export default function Music() {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          \`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=\${process.env.NEXT_PUBLIC_LASTFM_USERNAME}&api_key=\${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=12\`
        );
        const json = await res.json();
        setTracks(json.recenttracks?.track || []);
      } catch (e) {
        setError('Could not fetch music.');
      }
    }
    load();
  }, []);

  return (
    <main className="min-h-screen p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Recently Listening</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <ul className="space-y-3">
        {tracks.map((t, i) => (
          <li key={i} className="flex items-center gap-4">
            <img src={t.image?.[1]?.['#text'] || 'https://placehold.co/64'} alt="album art" className="h-12 w-12 object-cover rounded shadow" />
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.artist['#text']}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
