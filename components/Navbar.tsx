"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brewfi-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-3xl">☕</div>
            <span className="text-2xl font-bold font-grotesk text-brewfi-green glow-text-subtle group-hover:glow-text transition-all duration-300">
              BrewFi
            </span>
          </Link>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/waitlist" className="btn-primary">
              Únete a la Lista de Espera
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brewfi-green hover:text-brewfi-green/80 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/waitlist"
              className="block w-full text-center btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Únete a la Lista de Espera
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
