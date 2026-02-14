"use client";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function Header() {

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 ">
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
              aria-label="Open search"
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <FiSearch className="w-5 h-5" />
            </button>
            <Link
              href="/favorites"
              aria-label="Wishlist"
              className="p-2 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300 block"
            >
              <FiHeart className="w-5 h-5" />
            </Link>
            {/* Cart*/}
            <Link
              href="/cart"
              aria-label="Cart"
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 relative block"
            >
              <FiShoppingCart className="w-5 h-5" />
              {/* Badge */}
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
            {/* Account */}
            <Link
              href="/account"
              aria-label="account"
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 relative block"
            >
              <MdOutlineAccountCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
