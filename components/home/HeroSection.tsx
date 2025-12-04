import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero.png"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white">
                <p className="mb-4 text-sm font-medium tracking-[0.3em] text-pink-200 md:text-base">
                    BEAUTY & BALANCE
                </p>
                <h1 className="mb-8 text-4xl font-bold leading-tight tracking-wide md:text-6xl lg:text-7xl">
                    こころとからだを
                    <br />
                    整える暮らし
                </h1>
                <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-100 md:text-xl">
                    ヨガとアロマ、そして日々の小さな習慣で、
                    <br className="hidden md:block" />
                    あなたらしい美しさを引き出します。
                </p>
                <Link
                    href="/blog"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/10 px-8 py-4 text-sm font-bold tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-800"
                >
                    <span className="relative z-10">READ BLOG</span>
                    <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
                </Link>
            </div>
        </section>
    );
}
