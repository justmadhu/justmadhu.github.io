const careerData = [
  { year: '2024–present', title: 'Senior Product Manager @ AwesomeCo', summary: 'Driving user delight and +42% revenue growth.' },
  { year: '2021–2024', title: 'Product Manager @ ScaleUp', summary: 'Scaled ARR 2× and mentored 5 PMs.' },
];

export default function Career() {
  return (
    <main className="min-h-screen p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Career Highlights</h1>
      <div className="space-y-4">
        {careerData.map((c) => (
          <div key={c.year} className="rounded-lg shadow-lg p-4 bg-white/80 dark:bg-slate-800/60 backdrop-blur">
            <p className="text-sm text-gray-500 mb-1">{c.year}</p>
            <h2 className="font-semibold text-lg">{c.title}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{c.summary}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
