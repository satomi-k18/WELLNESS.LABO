import { courseTBD, tbd } from "./courseData";

type Row = {
    label: string;
    lines: string[];
    emphasis?: boolean;
};

const rows: Row[] = [
    {
        label: "内容",
        lines: ["アシュタンガヨガ ハーフプライマリー ＋ ヨガ哲学"],
    },
    { label: "形式", lines: ["オンライン（Zoom）"] },
    { label: "回数", lines: ["全20回 / 1回90分"] },
    {
        label: "日程",
        lines: [
            "週2回（約2.5ヶ月）または 週1回（約5ヶ月）",
            "曜日と時間は、説明会でみなさんのご都合をうかがってから決めます。",
            "平日の日中を予定しています。",
        ],
    },
    { label: "定員", lines: ["4〜5名"] },
    {
        label: "録画",
        lines: [
            "毎回お渡しします。受講期間中は何度でも見返せます。",
            "お休みした回も、録画で追いつけます。",
        ],
    },
    {
        label: "価格",
        lines: ["1期モニター価格 58,000円（税込）", "※ 2期目以降は 98,000円で開講します。"],
        emphasis: true,
    },
    {
        label: "お支払い",
        lines: ["一括 または 2回払い（29,000円 × 2）", `支払い方法：${tbd(courseTBD.paymentMethod)}`],
    },
    { label: "開講", lines: ["2026年10月"] },
];

export function CourseDetails() {
    return (
        <section id="details" className="bg-surface py-20 md:py-28">
            <div className="mx-auto max-w-3xl px-6 md:px-10">
                <div className="mb-14 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        Details
                    </span>
                    <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
                        講座の詳細
                    </h2>
                </div>

                <dl className="overflow-hidden rounded-2xl border border-line bg-cream">
                    {rows.map((row) => (
                        <div
                            key={row.label}
                            className="flex flex-col gap-1 border-b border-line px-6 py-5 last:border-b-0 sm:flex-row sm:gap-8 md:px-8"
                        >
                            <dt className="pt-0.5 text-xs tracking-[0.15em] text-accent-deep sm:w-40 sm:flex-shrink-0">
                                {row.label}
                            </dt>
                            <dd className="space-y-1">
                                {row.lines.map((line, i) => (
                                    <p
                                        key={i}
                                        className={
                                            row.emphasis && i === 0
                                                ? "text-base font-medium leading-relaxed text-ink"
                                                : "text-sm leading-relaxed text-muted"
                                        }
                                    >
                                        {line}
                                    </p>
                                ))}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
