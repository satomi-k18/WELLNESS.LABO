import Link from "next/link";

export function ContactSection() {
    return (
        <section id="contact" className="bg-mint/60 py-24 text-center text-ink md:py-32">
            <div className="mx-auto max-w-2xl px-6 md:px-10">
                <span className="mb-6 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                    Contact
                </span>
                <h2 className="mb-4 font-serif text-2xl font-medium leading-relaxed text-ink md:text-4xl">
                    まずは、<br />
                    呼吸を整える時間を。
                </h2>
                <p className="mb-4 text-ink leading-relaxed md:text-lg">
                    頑張るためではなく、<br />
                    自分に戻るために。
                </p>
                <p className="mb-10 text-sm text-muted">
                    お気軽にLINEからご相談ください。
                </p>
                <Link
                    href="https://lin.ee/r7oFd5g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-[#06C755] px-12 py-4 text-sm font-bold tracking-wider text-white shadow-sm transition-all hover:bg-[#05b04d] hover:shadow-md"
                >
                    LINEで問い合わせる
                </Link>
            </div>
        </section>
    );
}
