import IconNav from '@/components/IconNav';
const PROFILE_PHOTO_URL = 'https://placehold.co/250x250.jpg'; // replace with your own

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <img src={PROFILE_PHOTO_URL} alt="Profile photo" className="h-40 w-40 rounded-full object-cover shadow-xl mb-6" />
      <IconNav />
    </main>
  );
}
