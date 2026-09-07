const doing = [
    "アシュタンガ・ハーフプライマリーを、ひとつずつ覚える",
    "体の使い方と呼吸を、自分のものにする",
    "同じ型を通して、その日の自分の調子に気づけるようになる",
    "ヨガの考え方にふれて、日常の見方を変えていく",
];

export function CourseContent() {
    return (
        <section className="bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-2xl px-6 md:px-10">
                <div className="mb-14 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        Contents
                    </span>
                    <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
                        この講座で、やること
                    </h2>
                </div>

                {/* 軸はアシュタンガ */}
                <p className="mb-6 font-serif text-xl font-medium text-ink">
                    軸は、アシュタンガヨガです。
                </p>
                <div className="mb-14 space-y-6 leading-loose text-muted">
                    <p>
                        アシュタンガは、ポーズの順番が決まっているヨガ。だから「自分でシークエンスを組む」必要がありません。
                        決まった型を、ひとつずつ、体で覚えていく。
                        今回はその入り口、ハーフプライマリーまでを、じっくり一緒に進みます。
                    </p>
                </div>

                {/* ゴール */}
                <div className="mb-14">
                    <p className="mb-6 leading-loose text-ink">
                        いちばん伝えたいのは、この講座のゴールです。
                    </p>
                    <div className="rounded-2xl bg-mint/50 px-6 py-10 text-center md:px-12">
                        <p className="mb-4 leading-loose text-ink">
                            ポーズが上手になることではありません。
                        </p>
                        <p className="mb-8 font-serif text-xl font-medium leading-relaxed text-ink md:text-2xl">
                            自分ひとりで、
                            <br className="sm:hidden" />
                            最初から最後まで
                            <br className="hidden sm:block" />
                            通せるようになること。
                        </p>
                        <p className="mb-4 leading-loose text-ink">
                            そこまでいくと、マットを敷けばどこでも練習ができます。
                            <br />
                            旅先でも、朝の10分でも。
                        </p>
                        <p className="font-medium leading-loose text-ink">
                            一生使える自分の練習が、手に入るということです。
                        </p>
                    </div>
                </div>

                {/* 哲学 */}
                <div className="mb-14">
                    <p className="mb-6 font-serif text-xl font-medium leading-relaxed text-ink">
                        そしてもうひとつ、大事にしたいのが
                        <br className="sm:hidden" />
                        ヨガの考え方（哲学）です。
                    </p>
                    <div className="space-y-6 leading-loose text-muted">
                        <p>
                            「なぜヨガをすると心が整うのか」。その理由を知ると、ポーズの意味が変わります。
                            マットの上だけじゃなく、日常の考え方まで変わっていく。
                        </p>
                        <p className="font-medium text-ink">
                            ここが、この講座でいちばん届けたいところです。
                        </p>
                    </div>
                </div>

                {/* やることリスト */}
                <ul className="mb-10 space-y-3">
                    {doing.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-line bg-surface px-6 py-4"
                        >
                            <span className="mt-0.5 text-accent-deep">✓</span>
                            <span className="leading-relaxed text-ink">{item}</span>
                        </li>
                    ))}
                </ul>

                <p className="leading-loose text-muted">
                    先生になるための講座ではありません。あくまで、自分のための時間です。
                </p>
            </div>
        </section>
    );
}
