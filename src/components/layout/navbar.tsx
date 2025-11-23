use client;

import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/path/to/logo.png"
            alt="GSU Math Club logo"
            width={48}
            height={48}
            priority
            quality={100}
          />
          <span className="ml-2 font-semibold">GSU Math Club</span>
        </Link>

        <div className="space-x-4 hidden sm:flex">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}