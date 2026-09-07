const facts = [
    "全20回 / 1回90分",
    "定員4〜5名",
    "オンライン・平日日中",
    "1期モニター価格 58,000円",
];

export function CourseHero() {
    return (
        <section className="bg-cream py-16 md:py-24">
            <div className="mx-auto max-w-2xl px-6 md:px-10">
                <div className="mb-14 text-center">
                    <span className="mb-5 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        Course
                    </span>
                    <h1 className="mb-6 font-serif text-3xl font-medium leading-relaxed text-ink md:text-4xl">
                        わたしを整えるヨガ講座
                    </h1>
                    <p className="mb-5 font-serif text-lg font-medium leading-relaxed text-ink md:text-xl">
                        先生にならなくていい。上手じゃなくていい。
                        <br />
                        ただ、わたしを整えるために。
                    </p>
                    <p className="mb-8 leading-loose text-muted">
                        アシュタンガヨガ ハーフプライマリーを、全20回かけて。
                        <br className="hidden sm:block" />
                        一生使える「自分の練習」を手に入れる、少人数オンライン講座です。
                    </p>

                    <ul className="mb-10 flex flex-wrap justify-center gap-2">
                        {facts.map((fact) => (
                            <li
                                key={fact}
                                className="rounded-full border border-line bg-surface px-4 py-2 text-xs text-ink"
                            >
                                {fact}
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#briefing"
                        className="inline-flex items-center gap-2 rounded-full bg-accent-deep px-10 py-4 text-sm font-medium tracking-wider text-white shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                        まずは説明会へ（60分・無料）
                    </a>
                </div>

                {/* 導入 */}
                <div className="space-y-6 leading-loose text-muted">
                    <p>
                        ここ数年は家で、一人でオンラインで練習してきました。
                        マットを敷いて、同じ順番のポーズを、同じようにやる。それだけです。
                    </p>
                    <p>
                        ヨガを教えて9年、アシュタンガを練習して7年になります。
                        オーソライズは持っていません。いまも、オンラインの講座で学び続けています。
                    </p>
                    <p className="font-medium text-ink">
                        その7年で、いちばん変わったのは、体ではありません。
                    </p>
                    <p className="font-serif text-lg font-medium text-ink md:text-xl">
                        だから、つくりました。「わたしを整えるヨガ講座」です。
                    </p>
                </div>
            </div>
        </section>
    );
}
