import Link from "next/link";

export function ContactSection() {
    return (
        <section id="contact" className="bg-slate-800 py-20 text-center text-white md:py-32">
            <div className="mx-auto max-w-4xl px-6 md:px-10">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                    お問い合わせ
                </h2>
                <p className="mb-10 text-slate-300">
                    お仕事のご依頼やご相談は、<br className="md:hidden" />
                    こちらからお気軽にご連絡ください。
                </p>
                <Link
                    href="https://lin.ee/OfU5u0S"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-white px-10 py-4 text-sm font-bold tracking-widest text-slate-800 transition-colors hover:bg-pink-50"
                >
                    LINEで問い合わせる
                </Link>
            </div>
        </section>
    );
}
