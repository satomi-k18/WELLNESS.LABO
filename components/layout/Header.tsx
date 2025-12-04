import Link from "next/link";
import { Search, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-widest text-slate-800">
          WELLNESS<span className="text-pink-400">.</span>LABO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="transition hover:text-pink-400">
            HOME
          </Link>
          <Link href="/blog" className="transition hover:text-pink-400">
            BLOG
          </Link>
          <a href="#profile" className="transition hover:text-pink-400">
            PROFILE
          </a>
          <a
            href="https://lin.ee/OfU5u0S"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-pink-400"
          >
            CONTACT
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-pink-400"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Menu"
            className="md:hidden rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-pink-400"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
