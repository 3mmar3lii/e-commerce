"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

interface IRightIcons {
  setIsMenuOpen: (value: boolean) => void;
}

export function RightIcons({ setIsMenuOpen }: IRightIcons) {
  console.log("Rendered RightIcons from client");
  return (
    <div className="md:hidden py-4 border-t border-gray-100">
      <div className="flex flex-col space-y-3">
        <Link
          href="/"
          className="font-medium text-gray-700 hover:text-gray-900 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="font-medium text-gray-700 hover:text-gray-900 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="font-medium text-gray-700 hover:text-gray-900 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  console.log("Header RightIcons from client");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 ">
      {/* Desktop + Tablet */}
      <div className="mx-20 px-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" aria-label="Home" className="flex items-center">
              <Image
                src="/logo.png"
                className="object-cover rounded-t-xl"
                priority
                width={120}
                height={120}
                alt="logo"
              />
            </Link>
          </div>

          {/*  Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-medium text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              aria-label="Search"
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <FiSearch className="w-5 h-5" />
            </button>
            <button
              aria-label="Wishlist"
              className="p-2 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              <FiHeart className="w-5 h-5" />
            </button>
            <button
              aria-label="Cart"
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 relative"
            >
              <FiShoppingCart className="w-5 h-5" />
              {/*  badge  */}
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
            {/* Mobile menu button */}
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (collapsed by default) */}
        {isMenuOpen && <RightIcons setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </header>
  );
}
