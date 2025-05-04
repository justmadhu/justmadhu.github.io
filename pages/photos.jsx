const photoData = [
  { src: 'https://placehold.co/600x400?text=Peru', alt: 'Machu Picchu sunrise' },
  { src: 'https://placehold.co/600x400?text=Iceland', alt: 'Seljalandsfoss waterfall' },
];

export default function Photos() {
  return (
    <main className="min-h-screen p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Travel Snaps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photoData.map((p, i) => (
          <img key={i} src={p.src} alt={p.alt} className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform" />
        ))}
      </div>
    </main>
  );
}
