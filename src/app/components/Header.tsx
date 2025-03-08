"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full backdrop-blur-xl bg-white/70 z-50 border-b border-gray-200/30">
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-medium text-gray-900">
            Bodrum Ambar
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Ana Sayfa</Link>
            <Link href="/hizmetler" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Hizmetler</Link>
            <Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Hakkımızda</Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">İletişim</Link>
          </div>
          <button 
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobil Menü */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200/30">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/hizmetler" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetler
              </Link>
              <Link 
                href="/hakkimizda" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link 
                href="/iletisim" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 