import Link from "next/link";

const facts = [
    "全20回 / 1回90分",
    "定員4〜5名",
    "オンライン・平日日中",
    "1期モニター価格 58,000円",
];

export function CourseSection() {
    return (
        <section id="course" className="bg-surface py-20 md:py-28">
            <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
                <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                    Course
                </span>
                <h2 className="mb-8 font-serif text-2xl font-medium text-ink md:text-3xl">
                    わたしを整えるヨガ講座
                </h2>

                <p className="mb-4 font-serif text-lg font-medium leading-relaxed text-ink md:text-xl">
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
                            className="rounded-full border border-line bg-cream px-4 py-2 text-xs text-ink"
                        >
                            {fact}
                        </li>
                    ))}
                </ul>

                <Link
                    href="/course"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-deep px-10 py-4 text-sm font-medium tracking-wider text-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                    講座について詳しく見る
                </Link>
            </div>
        </section>
    );
}
