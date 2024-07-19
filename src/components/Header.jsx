"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Header() {

  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Profile", href: "/profile" },
    { name: "Products", href: "/products" },
  ]

  return (
    <div>
      <header className='grid place-content-center bg-orange-300 py-6'>
        <h1 className='text-4xl font-bold'>My Header</h1>
        <div className='flex items-center justify-center'>

          {
            navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === link.href : pathname.startsWith(link.href);
              return (
                <Link key={link.name} href={link.href} className={isActive ? `font-bold mx-4` : `mx-4 italic`}>{link.name}</Link>
              )
            })
          }
        </div>
      </header>
    </div>
  )
}

export default Header;
