const yogaSchedule = [
    {
        day: "月曜",
        venue: "スポーツクラブNAS Vit Park札幌",
        classes: [
            { time: "10:45-11:30", name: "美姿勢ヨガ" },
            { time: "11:50-12:35", name: "フローヨガ" },
        ],
    },
    {
        day: "火曜",
        venue: "スポーツクラブNAS Vit Park札幌",
        classes: [
            { time: "12:45-13:30", name: "ストレッチポール" },
            { time: "13:50-14:35", name: "パワーヨガ" },
        ],
    },
    {
        day: "水曜",
        venue: "CALDO琴似",
        classes: [{ time: "15:00-16:00", name: "パワーヨガ" }],
    },
    {
        day: "木曜",
        venue: "CALDO琴似",
        classes: [{ time: "13:30-14:30", name: "ヴィンヤサヨガ" }],
    },
];

const aromaItems = [
    "アロマスプレー",
    "ミツロウクリーム",
    "リップクリーム",
    "トリートメントオイル",
    "ボディソープ",
];

export function ServiceSection() {
    return (
        <section className="bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-6 md:px-10">
                <div className="mb-16 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        Service
                    </span>
                    <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
                        Class & Service
                    </h2>
                </div>

                {/* Yoga Class Schedule */}
                <div className="mb-16">
                    <h3 className="mb-8 font-serif text-xl font-medium text-ink">ヨガクラス</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {yogaSchedule.map((day) => (
                            <div
                                key={day.day}
                                className="rounded-2xl border border-line bg-surface p-6"
                            >
                                <p className="mb-1 font-serif text-lg font-medium text-accent-deep">{day.day}</p>
                                <p className="mb-4 text-xs text-muted">{day.venue}</p>
                                <ul className="space-y-2">
                                    {day.classes.map((cls) => (
                                        <li
                                            key={cls.name}
                                            className="flex items-center justify-between text-sm"
                                        >
                                            <span className="font-medium text-ink">{cls.name}</span>
                                            <span className="text-muted">{cls.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Services */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* 出張ヨガ */}
                    <div className="rounded-2xl bg-mint/50 p-8">
                        <h3 className="mb-3 font-serif text-lg font-medium text-ink">出張ヨガ</h3>
                        <p className="mb-5 text-sm leading-relaxed text-ink">
                            ガチガチになった身体と心を、<br />
                            呼吸とやさしい動きでゆるめる時間。
                        </p>
                        <ul className="mb-5 space-y-1 text-sm text-muted">
                            <li>平日 10:00〜17:00</li>
                            <li>ママ向け ／ ご自宅OK</li>
                        </ul>
                        <p className="text-xl font-medium text-accent-deep">
                            1時間 <span className="text-2xl">3,000</span>円
                        </p>
                    </div>

                    {/* アロマ時間 */}
                    <div className="rounded-2xl bg-mint/50 p-8">
                        <h3 className="mb-3 font-serif text-lg font-medium text-ink">アロマ時間</h3>
                        <p className="mb-5 text-sm leading-relaxed text-ink">
                            香りでほっとひと息。<br />
                            お好きなクラフトを作れます。
                        </p>
                        <ul className="mb-5 space-y-1 text-sm text-muted">
                            {aromaItems.map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <span className="text-accent-deep">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-xl font-medium text-accent-deep">
                            材料費込み <span className="text-2xl">2,500</span>円
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
