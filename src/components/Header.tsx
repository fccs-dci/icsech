"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "About 緣起", href: "/about/" },
  { name: "Browse 瀏覽", href: "/events/" },
  { name: "Search 搜尋", href: "/search/" },
  { name: "Digest 週報", href: "/weekly-digest/" },
  { name: "Submit 登記活動", href: "/submit/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between border-b border-gray-200 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Event Database</span>
              <img
                className="h-20 w-auto"
                src="/images/FC-PrimaryLogo-Red-2x.png"
                alt="Fairbank Center logo"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-red-800 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-red-800 hover:text-primary hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-b border-gray-200">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-red-800 hover:text-primary hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
