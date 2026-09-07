/* TODO: 実際の進み方に合わせて、順番・配分を調整する（lp_content.md の「たたき台」） */
const curriculum = [
    { no: 1, asana: "オリエンテーション", philosophy: "目標シートを書く" },
    { no: 2, asana: "ヨガの言葉の説明", philosophy: "ヨガとは何か（1.2）" },
    { no: 3, asana: "太陽礼拝A ／ 呼吸（ウジャイ）", philosophy: "心はなぜ乱れるのか" },
    { no: 4, asana: "太陽礼拝A 続き", philosophy: "八支則の全体像（2.29）" },
    { no: 5, asana: "太陽礼拝B", philosophy: "ヤマ① アヒンサー" },
    { no: 6, asana: "太陽礼拝A・B 通し ／ ドリシュティ", philosophy: "ヤマ② サティヤ" },
    { no: 7, asana: "立位①", philosophy: "ヤマ③ アステーヤ" },
    { no: 8, asana: "立位②", philosophy: "ヤマ④ ブラフマチャリヤ" },
    { no: 9, asana: "立位③", philosophy: "ヤマ⑤ アパリグラハ" },
    { no: 10, asana: "立位④", philosophy: "ニヤマ① シャウチャ" },
    { no: 11, asana: "立位 通し", philosophy: "ニヤマ② サントーシャ" },
    { no: 12, asana: "坐位①", philosophy: "ニヤマ③ タパス" },
    { no: 13, asana: "坐位②", philosophy: "ニヤマ④ スヴァーディヤーヤ" },
    { no: 14, asana: "坐位③", philosophy: "ニヤマ⑤ イーシュヴァラ・プラニダーナ" },
    { no: 15, asana: "坐位④", philosophy: "アーサナとは何か（2.46）" },
    { no: 16, asana: "坐位⑤", philosophy: "プラーナーヤーマ" },
    { no: 17, asana: "坐位⑥ ／ 坐位 通し", philosophy: "プラティヤーハーラ" },
    { no: 18, asana: "フィニッシング①・②", philosophy: "ダーラナー／ディヤーナ／サマーディ" },
    { no: 19, asana: "全体を通す", philosophy: "練習が続かない9つの理由（1.30）" },
    { no: 20, asana: "全体を通す", philosophy: "振り返り／目標シートを見返す" },
];

export function CourseCurriculum() {
    return (
        <section className="bg-surface py-20 md:py-28">
            <div className="mx-auto max-w-3xl px-6 md:px-10">
                <div className="mb-16 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        Curriculum
                    </span>
                    <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
                        全20回の流れ
                    </h2>
                </div>

                <div className="overflow-hidden rounded-2xl border border-line">
                    {/* ヘッダー行（sm以上） */}
                    <div className="hidden bg-cream px-6 py-4 text-xs tracking-[0.15em] text-accent-deep sm:grid sm:grid-cols-[4rem_1fr_1fr] sm:gap-6">
                        <span>回</span>
                        <span>アーサナ</span>
                        <span>ヨガの考え方</span>
                    </div>

                    {curriculum.map((row) => (
                        <div
                            key={row.no}
                            className="grid gap-1 border-t border-line px-6 py-4 sm:grid-cols-[4rem_1fr_1fr] sm:items-baseline sm:gap-6"
                        >
                            <p className="font-serif text-base font-medium text-accent-deep">
                                第{row.no}回
                            </p>
                            <p className="text-sm leading-relaxed text-ink">{row.asana}</p>
                            <p className="text-sm leading-relaxed text-muted">
                                <span className="sm:hidden">考え方：</span>
                                {row.philosophy}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-center font-medium leading-relaxed text-ink">
                    20回で、ハーフプライマリーをひとりで通せるところまで行きます。
                </p>
            </div>
        </section>
    );
}
