const suited = [
    "ヨガを続けていて、もっとちゃんと知りたい方",
    "家で一人でも練習できるようになりたい方",
    "平日の日中に、自分のために90分とれる方",
    "先生になるつもりはないけれど、深めたい方",
];

const notSuited = [
    "資格の取得が目的の方",
    "リラックス目的で、汗をかきたくない方",
    "医師から運動を止められている方",
];

export function CourseAudience() {
    return (
        <section className="bg-surface py-20 md:py-28">
            <div className="mx-auto max-w-3xl px-6 md:px-10">
                <div className="mb-14 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        For You
                    </span>
                    <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
                        こんな方に
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl bg-mint/50 p-8">
                        <h3 className="mb-6 font-serif text-lg font-medium text-ink">
                            向いていると思います
                        </h3>
                        <ul className="space-y-3">
                            {suited.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-0.5 text-accent-deep">✓</span>
                                    <span className="text-sm leading-relaxed text-ink">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-line bg-cream p-8">
                        <h3 className="mb-6 font-serif text-lg font-medium text-ink">
                            向いていないかもしれません
                        </h3>
                        <ul className="space-y-3">
                            {notSuited.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-0.5 text-muted">—</span>
                                    <span className="text-sm leading-relaxed text-muted">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <p className="mt-10 text-center leading-loose text-muted">
                    ヨガ歴は問いません。太陽礼拝を知らなくても大丈夫です。
                    <br className="hidden sm:block" />
                    最初から一緒にやります。
                </p>
            </div>
        </section>
    );
}
