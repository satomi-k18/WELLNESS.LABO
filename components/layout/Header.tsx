import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/40 bg-cream/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg tracking-[0.2em] text-ink transition-colors duration-300 hover:text-accent-deep"
        >
          WELLNESS<span className="text-accent-deep">.</span>LABO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-9 text-xs tracking-[0.15em] text-muted md:flex">
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-accent-deep"
          >
            HOME
          </Link>
          <a
            href="#profile"
            className="transition-colors duration-300 hover:text-accent-deep"
          >
            ABOUT
          </a>
          <Link
            href="/blog"
            className="transition-colors duration-300 hover:text-accent-deep"
          >
            BLOG
          </Link>
          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-accent-deep"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile menu */}
        <button
          aria-label="メニュー"
          className="rounded-full p-2 text-muted transition-colors duration-300 hover:text-accent-deep md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
