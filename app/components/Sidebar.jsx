"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[300px] min-w-[300px] min-h-[calc(100vh-4rem)] bg-black border-r border-neutral-900 p-6">
      <nav className="flex flex-col space-y-1 text-sm font-medium">
        <Link 
          href="/" 
          className={`p-3 rounded-md transition-colors ${pathname === '/' ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'}`}
        >
          Home
        </Link>
        
        <Link 
          href="/about" 
          className={`p-3 rounded-md transition-colors ${pathname === '/about' ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'}`}
        >
          About
        </Link>
        
        <Link 
          href="/contact" 
          className={`p-3 rounded-md transition-colors ${pathname === '/contact' ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'}`}
        >
          Contact
        </Link>
      </nav>
    </aside>
  );
}
