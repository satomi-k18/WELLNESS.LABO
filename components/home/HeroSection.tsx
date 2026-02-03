import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-end overflow-hidden pb-12 md:pb-20">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero.png"
                    alt="Hero Background"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white">
                <p className="mb-4 text-sm font-medium tracking-[0.3em] text-pink-200 md:text-base">
                    Breathe & Release
                </p>
                <h1 className="mb-8 text-3xl font-bold leading-tight tracking-wide md:text-5xl lg:text-6xl drop-shadow-lg">
                    頑張らなくていい。
                    <br />
                    ただ、呼吸をする場所。
                </h1>
                <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-100 md:text-xl">
                    毎日、誰かのために頑張るあなたへ。
                    <br className="hidden md:block" />
                    ここは、あなたが「ヨガ」と「香り」で、
                    <br className="hidden md:block" />
                    固まった心をそっと解くための小さな休憩室です。
                </p>
                <Link
                    href="/blog"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/10 px-8 py-4 text-sm font-bold tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-800"
                >
                    <span className="relative z-10">ブログを読む</span>
                    <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
                </Link>
            </div>
        </section>
    );
}
