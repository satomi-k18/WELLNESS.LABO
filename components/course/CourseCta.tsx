import { BRIEFING_APPLY_URL, courseTBD, tbd } from "./courseData";

const dates = [
    { date: "9月10日（木）", time: "10:00" },
    { date: "9月24日（木）", time: "10:00" },
];

// 法定表示。申込ボタンより「上」に置く
// TODO: courseData.ts の tokushohoUrl / refundPolicyUrl にページのURLを入れる
const legalLinks = [
    { label: "特定商取引法に基づく表記", href: courseTBD.tokushohoUrl },
    { label: "キャンセル・返金規定", href: courseTBD.refundPolicyUrl },
];

export function CourseCta() {
    return (
        <section id="briefing" className="bg-mint/60 py-20 md:py-28">
            <div className="mx-auto max-w-2xl px-6 md:px-10">
                <div className="mb-10 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        Briefing
                    </span>
                    <h2 className="mb-6 font-serif text-2xl font-medium leading-relaxed text-ink md:text-3xl">
                        まずは、説明会から
                    </h2>
                    <p className="leading-loose text-ink">
                        いきなり申し込むのは、勇気がいりますよね。
                        <br className="hidden sm:block" />
                        だから、説明会からはじめます。
                    </p>
                </div>

                {/* 日程 */}
                <div className="mb-8 rounded-2xl bg-surface px-6 py-8 md:px-8">
                    <p className="mb-6 text-center text-sm tracking-wider text-accent-deep">
                        説明会（60分・無料・オンライン）
                    </p>
                    <ul className="mb-6 space-y-3">
                        {dates.map((d) => (
                            <li
                                key={d.date}
                                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3 last:border-b-0 last:pb-0"
                            >
                                <span className="font-serif text-lg font-medium text-ink">
                                    {d.date}
                                </span>
                                <span className="text-sm text-muted">{d.time}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mb-2 text-sm leading-relaxed text-muted">
                        どちらも同じ内容です。都合のよいほうにお越しください。
                    </p>
                    <p className="text-sm leading-relaxed text-muted">
                        都合の合わない場合はご相談ください。平日の日中であれば調整します。
                    </p>
                </div>

                <p className="mb-10 text-xs leading-relaxed text-muted">
                    ※ どちらの日も都合が合わない方は、平日の日中で個別に日程を調整します。遠慮なくお声かけください。
                </p>

                <div className="mb-10 space-y-3 leading-loose">
                    <p className="text-ink">
                        「ちょっと気になる」「話だけ聞いてみたい」。それで十分です。
                    </p>
                    <p className="font-medium text-ink">
                        その場で決めていただく必要は、まったくありません。
                    </p>
                </div>

                <div className="mb-10 text-center">
                    <p className="mb-4 font-serif text-xl font-medium leading-relaxed text-ink md:text-2xl">
                        先生にならなくていい。上手じゃなくていい。
                        <br />
                        ただ、わたしを整えるために。
                    </p>
                    <p className="leading-loose text-ink">
                        一緒にヨガを、習慣にしていきませんか。
                    </p>
                </div>

                {/* 法定表示（申込ボタンより上） */}
                <div className="mb-8 rounded-2xl border border-line bg-surface px-6 py-5">
                    <p className="mb-3 text-xs tracking-[0.15em] text-accent-deep">
                        お申し込みの前に
                    </p>
                    <ul className="space-y-2">
                        {legalLinks.map((link) => (
                            <li key={link.label} className="text-sm">
                                {link.href ? (
                                    <a
                                        href={link.href}
                                        className="text-accent-deep underline underline-offset-4 transition-colors duration-300 hover:text-ink"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <span className="text-muted">
                                        {link.label}（{tbd(null)}）
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTAは1種類だけ */}
                <div className="text-center">
                    <a
                        href={BRIEFING_APPLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-accent-deep px-12 py-5 text-base font-medium tracking-wider text-white shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                        説明会に申し込む
                    </a>
                    <p className="mt-6 leading-loose text-ink">よろしくお願いします。</p>
                    <p className="mt-4 text-xs leading-relaxed text-muted">
                        ※ 日程が合わない方も、上のリンクからご連絡ください。
                        <br />
                        次回のご案内をお送りします。
                    </p>
                </div>
            </div>
        </section>
    );
}
