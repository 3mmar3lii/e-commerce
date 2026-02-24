"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
  Package,
  LogOut,
  Settings,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";
import NavigationLink from "@/shared/NavigationLink";
import { useAuthStore } from "@/stores/useAuthUser";
import { usePathname } from "next/navigation";

export function Header() {
  const { user, setUser } = useAuthStore();
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(10);

  const isAuthPage = pathName === "/login" || pathName === "/signup";
  if (isAuthPage) return null;

  const handleSearch = (e: React.FormEvent) => {
    console.log("The pathName is", e);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "Categories", path: "/shop" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X size={22} strokeWidth={1.5} />
            ) : (
              <Menu size={22} strokeWidth={1.5} />
            )}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center">
              <span className="text-white text-sm">N</span>
            </div>
            <span className="text-[#F5F5F5] hidden sm:block">NovaMart</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                className={`text-sm transition-colors ${
                  pathName === link.path
                    ? "text-[#A78BFA]"
                    : "text-[#A1A1AA] hover:text-[#F5F5F5]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className={`hidden md:flex items-center flex-1 max-w-md mx-6 bg-[#1C1C1F] rounded-xl border transition-all duration-300 ${
              searchFocused
                ? "border-[#7C3AED]/50 shadow-[0_0_15px_rgba(124,58,237,0.15)]"
                : "border-white/6"
            }`}
          >
            <Search
              size={16}
              strokeWidth={1.5}
              className="text-[#71717A] ml-3"
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="flex-1 bg-transparent text-[#F5F5F5] text-sm px-3 py-2 outline-none placeholder:text-[#71717A]"
            />
          </form>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Wishlist */}
            <NavigationLink
              route="/profile"
              className="hidden sm:flex w-9 h-9 rounded-xl items-center justify-center text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/5 transition-all cursor-pointer"
            >
              <button>
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </NavigationLink>
            {/* Cart */}
            <NavigationLink
              route="/cart"
              className="relative w-9 h-9 rounded-xl flex items-center justify-center text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/5 transition-all cursor-pointer"
            >
              <button>
                <ShoppingCart size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-[10px]">
                    {cartCount}
                  </span>
                )}
              </button>
            </NavigationLink>

            {/* User */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                {user ? (
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center text-white text-sm">
                    {user.name.charAt(0)}
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/5 transition-all">
                    <User size={20} strokeWidth={1.5} />
                  </div>
                )}
                <ChevronDown
                  size={14}
                  className="text-[#71717A] hidden sm:block"
                />
              </button>

              {userMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setUserMenuOpen(false)}
                  />

                  <div className="absolute right-0 top-12 z-50 w-56 bg-[#141416] border border-white/6 rounded-xl shadow-2xl overflow-hidden">
                    {user ? (
                      <>
                        <div className="p-3 border-b border-white/6">
                          <p className="text-[#F5F5F5] text-sm">{user.name}</p>
                          <p className="text-[#71717A] text-xs">{user.email}</p>
                        </div>

                        <div className="py-1">
                          <NavigationLink route="/profile">
                            <button
                              onClick={() => setUserMenuOpen(false)}
                              className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/5 transition-colors cursor-pointer"
                            >
                              <Settings size={15} strokeWidth={1.5} /> Profile
                            </button>
                          </NavigationLink>

                          <NavigationLink route="/orders">
                            <button
                              onClick={() => setUserMenuOpen(false)}
                              className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/5 transition-colors cursor-pointer"
                            >
                              <Package size={15} strokeWidth={1.5} /> My Orders
                            </button>
                          </NavigationLink>

                          {(user.role === "admin" ||
                            user.role === "seller") && (
                            <NavigationLink route="/admin">
                              <button
                                onClick={() => setUserMenuOpen(false)}
                                className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/5 transition-colors cursor-pointer"
                              >
                                <LayoutDashboard size={15} strokeWidth={1.5} />
                                Dashboard
                              </button>
                            </NavigationLink>
                          )}

                          <div className="border-t border-white/6 mt-1 pt-1">
                            <NavigationLink route="/login">
                              <button
                                onClick={() => {
                                  setUser(null);
                                  setUserMenuOpen(false);
                                }}
                                className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-[#EF4444] hover:bg-[#EF4444]/10 transition-colors cursor-pointer"
                              >
                                <LogOut size={15} strokeWidth={1.5} /> Log Out
                              </button>
                            </NavigationLink>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="py-1">
                        <NavigationLink route="/login">
                          <button
                            onClick={() => setUserMenuOpen(false)}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/5 transition-colors cursor-pointer"
                          >
                            Sign In
                          </button>
                        </NavigationLink>

                        <NavigationLink route="/signup">
                          <button
                            onClick={() => setUserMenuOpen(false)}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-[#A78BFA] hover:bg-[#7C3AED]/10 transition-colors cursor-pointer"
                          >
                            Create Account
                          </button>
                        </NavigationLink>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/6 bg-[#0A0A0B]/95 backdrop-blur-xl">
          {/* Mobile search */}
          <form onSubmit={handleSearch} className="px-4 pt-3">
            <div className="flex items-center bg-[#1C1C1F] rounded-xl border border-white/6">
              <Search
                size={16}
                strokeWidth={1.5}
                className="text-[#71717A] ml-3"
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-[#F5F5F5] text-sm px-3 py-2 outline-none placeholder:text-[#71717A]"
              />
            </div>
          </form>
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
