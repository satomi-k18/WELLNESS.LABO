import Link from "next/link";

export function ContactSection() {
    return (
        <section id="contact" className="bg-slate-800 py-24 text-center text-white md:py-36">
            <div className="mx-auto max-w-2xl px-6 md:px-10">
                <span className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] text-pink-300">
                    Contact
                </span>
                <h2 className="mb-4 text-2xl font-bold leading-relaxed md:text-4xl">
                    まずは、<br />
                    呼吸を整える時間を。
                </h2>
                <p className="mb-4 text-slate-300 leading-relaxed md:text-lg">
                    頑張るためではなく、<br />
                    自分に戻るために。
                </p>
                <p className="mb-10 text-sm text-slate-400">
                    お気軽にLINEからご相談ください。
                </p>
                <Link
                    href="https://lin.ee/r7oFd5g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-[#06C755] px-12 py-4 text-sm font-bold tracking-wider text-white shadow-lg transition-all hover:bg-[#05b04d] hover:shadow-xl"
                >
                    LINEで問い合わせる
                </Link>
            </div>
        </section>
    );
}
