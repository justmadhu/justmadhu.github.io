import Link from 'next/link';
import { Music2, Briefcase, Image as ImageIcon } from 'lucide-react';

export default function IconNav() {
  const links = [
    { href: '/music', label: 'Music', icon: Music2, color: 'hover:text-blue-500' },
    { href: '/career', label: 'Career', icon: Briefcase, color: 'hover:text-green-500' },
    { href: '/photos', label: 'Photos', icon: ImageIcon, color: 'hover:text-pink-500' },
  ];
  return (
    <nav className="flex gap-8 text-gray-600 dark:text-gray-300 text-4xl">
      {links.map(({ href, label, icon: Icon, color }) => (
        <Link key={href} href={href} aria-label={label} className={\`\${color} transition\`}>
          <Icon size={32} />
        </Link>
      ))}
    </nav>
  );
}
