import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MenuIcon } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

// type Props = {};

const Navbar = async () => {
  const user = await currentUser();
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Auto</p>
        <Image
          src="/mateBolt.png"
          alt="Logo"
          width={15}
          height={15}
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">Mate</p>
      </aside>
      <nav className="absolute left-[50%] top-[%50] transform translate-x-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#Products" className="text-white">
              Products
            </Link>
          </li>
          <li>
            <Link href="#Pricing" className="text-white">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#Clients" className="text-white">
              Clients
            </Link>
          </li>
          <li>
            <Link href="#Resources" className="text-white">
              Resources
            </Link>
          </li>
          <li>
            <Link href="#Docs" className="text-white">
              Docs
            </Link>
          </li>
          <li>
            <Link href="#Enterprise" className="text-white">
              Enterprise
            </Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          {user ? 'Dashboard' : 'Get Started'}
        </Link>
        {user ? <UserButton afterSignOutUrl="/" /> : null}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};
export default Navbar;
