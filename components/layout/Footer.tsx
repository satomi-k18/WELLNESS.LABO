import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-cream pt-16 pb-8 text-muted">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-lg tracking-[0.2em] text-ink">
                            WELLNESS<span className="text-accent-deep">.</span>LABO
                        </h2>
                        <p className="mt-2 text-sm text-muted">
                            こころとからだを整える、<br className="md:hidden" />美と健康のライフスタイル。
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-sm font-medium">
                        <Link href="/about" className="hover:text-accent-deep transition">
                            PROFILE
                        </Link>
                        <Link href="/contact" className="hover:text-accent-deep transition">
                            CONTACT
                        </Link>
                    </div>

                    {/* SNS */}
                    <div className="flex gap-4">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-surface p-3 shadow-sm transition hover:scale-105 hover:text-accent-deep hover:shadow-md"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-surface p-3 shadow-sm transition hover:scale-105 hover:text-accent-deep hover:shadow-md"
                        >
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-surface p-3 shadow-sm transition hover:scale-105 hover:text-accent-deep hover:shadow-md"
                        >
                            <Youtube className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 border-t border-line pt-8 text-center text-xs text-muted">
                    <p>&copy; {new Date().getFullYear()} WELLNESS.LABO All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
