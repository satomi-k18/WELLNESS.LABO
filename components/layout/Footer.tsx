import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-50 pt-16 pb-8 text-slate-600">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold tracking-widest text-slate-800">
                            WELLNESS<span className="text-pink-400">.</span>LABO
                        </h2>
                        <p className="mt-2 text-sm text-slate-500">
                            こころとからだを整える、<br className="md:hidden" />美と健康のライフスタイル。
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-sm font-medium">
                        <Link href="/blog" className="hover:text-pink-400 transition">
                            BLOG
                        </Link>
                        <Link href="/about" className="hover:text-pink-400 transition">
                            PROFILE
                        </Link>
                        <Link href="/contact" className="hover:text-pink-400 transition">
                            CONTACT
                        </Link>
                    </div>

                    {/* SNS */}
                    <div className="flex gap-4">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-white p-3 shadow-sm transition hover:scale-110 hover:text-pink-500 hover:shadow-md"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-white p-3 shadow-sm transition hover:scale-110 hover:text-sky-500 hover:shadow-md"
                        >
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-white p-3 shadow-sm transition hover:scale-110 hover:text-red-500 hover:shadow-md"
                        >
                            <Youtube className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-8 text-center text-xs text-slate-400">
                    <p>&copy; {new Date().getFullYear()} WELLNESS.LABO All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
