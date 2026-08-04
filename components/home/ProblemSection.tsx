const problems = [
    "頭の中がずっと忙しい",
    "人の目が気になって疲れてしまう",
    "「ちゃんとしなきゃ」が頭から離れない",
    "気づくと、自分のことが後回し",
    "頑張っているのに満たされない",
    "休んでいるのに疲れが抜けない",
    "頭の中がずっと仕事モード",
    "気づくと「ちゃんとした自分」を演じている",
];

export function ProblemSection() {
    return (
        <section className="bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-2xl px-6 md:px-10">
                <div className="mb-12 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        Check
                    </span>
                    <h2 className="font-serif text-2xl font-medium leading-snug text-ink md:text-3xl">
                        こんな毎日になっていませんか？
                    </h2>
                </div>

                <ul className="space-y-4">
                    {problems.map((problem) => (
                        <li
                            key={problem}
                            className="flex items-start gap-4 rounded-2xl bg-surface px-6 py-4 shadow-sm"
                        >
                            <span className="mt-0.5 flex-shrink-0 text-accent-deep">✓</span>
                            <span className="text-ink">{problem}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
