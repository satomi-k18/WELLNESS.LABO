import Image from "next/image";
import Link from "next/link";

export function ProfileSection() {
    return (
        <section id="profile" className="py-20 md:py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-10">
                <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-20">
                    {/* Image */}
                    <div className="relative w-full md:w-1/2 flex justify-center">
                        <div className="relative h-64 w-64 md:h-80 md:w-80">
                            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-xl">
                                <Image
                                    src="/images/profile.jpg"
                                    alt="Satomi Konishi"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-full border-2 border-pink-200/50" />
                            <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-full bg-slate-100" />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                        <span className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-pink-400">
                            About Me
                        </span>
                        <h2 className="mb-6 text-3xl font-bold text-slate-800 md:text-4xl">
                            Satomi Konishi
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                フリーヨガインストラクターとして活動しながら、
                                「おうちで整う美と健康」をテーマに情報を発信しています。
                            </p>
                            <p>
                                忙しい毎日の中でも、少しの工夫で心と体は変わります。
                                LiveGoodサプリメントや厳選したウェルネスアイテムを通じて、
                                無理なく続けられるヘルシーなライフスタイルをご提案します。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommended Items */}
            <div className="mx-auto mt-20 max-w-6xl px-6 md:px-10">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* LiveGood Card */}
                    <a
                        href="https://www.livegoodtour.com/s420281"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="relative aspect-[16/9] w-full bg-slate-200">
                            <Image
                                src="/images/LiveGood.png"
                                alt="LiveGood"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-3 flex items-center justify-between text-xs">
                                <span className="font-medium text-pink-400">LiveGood</span>
                            </div>
                            <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800 transition group-hover:text-pink-400">
                                アフィリエイター募集中
                            </h3>
                            <div className="mt-auto pt-2 text-sm font-semibold text-slate-500 group-hover:text-pink-400">
                                詳しく見る →
                            </div>
                        </div>
                    </a>

                    {/* Aroma Yoga Class Card */}
                    <Link
                        href="/blog/mama-aroma-yoga"
                        className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="relative aspect-[16/9] w-full bg-slate-200">
                            <Image
                                src="/images/aroma-yoga-class.png"
                                alt="Aroma Craft & Yoga Class"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-3 flex items-center justify-between text-xs">
                                <span className="font-medium text-pink-400">Yoga & Aroma</span>
                            </div>
                            <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800 transition group-hover:text-pink-400">
                                身体をゆるめる「ママの休憩室」
                            </h3>
                            <div className="mt-auto pt-2 text-sm font-semibold text-slate-500 group-hover:text-pink-400">
                                詳しく見る →
                            </div>
                        </div>
                    </Link>

                    {/* Instructor Course Card */}
                    <a
                        href="#contact"
                        className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="relative aspect-[16/9] w-full bg-slate-200">
                            <Image
                                src="/images/aroma-instructor-course.jpg"
                                alt="Aroma Yoga Instructor Training Course"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-3 flex items-center justify-between text-xs">
                                <span className="font-medium text-pink-400">Coming Soon</span>
                            </div>
                            <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800 transition group-hover:text-pink-400">
                                アロマヨガ講師養成講座
                            </h3>
                            <div className="mt-auto pt-2 text-sm font-semibold text-slate-500 group-hover:text-pink-400">
                                お問い合わせ →
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
