import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

export function SnsSection() {
    return (
        <section className="py-20 md:py-32">
            <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-pink-400">
                    Follow Me
                </span>
                <h2 className="mb-10 text-3xl font-bold text-slate-800 md:text-4xl">
                    日々のインスピレーションをシェア
                </h2>

                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <Link
                        href="https://www.instagram.com/wellnesslife.labo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full max-w-xs items-center justify-center gap-3 rounded-full border border-pink-100 bg-white px-8 py-4 text-sm font-bold text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-pink-200 hover:shadow-md"
                    >
                        <Instagram className="h-5 w-5 text-pink-400 transition-transform group-hover:scale-110" />
                        <span>Instagram</span>
                    </Link>
                    <Link
                        href="https://lin.ee/OfU5u0S"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full max-w-xs items-center justify-center gap-3 rounded-full border border-emerald-100 bg-white px-8 py-4 text-sm font-bold text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
                    >
                        <MessageCircle className="h-5 w-5 text-emerald-400 transition-transform group-hover:scale-110" />
                        <span>Official LINE</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
