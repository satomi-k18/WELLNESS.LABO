import Image from "next/image";

const pillars = [
    {
        number: "①",
        label: "呼吸を整える",
        sub: "Yoga",
        image: "/images/kokyuu.png",
        alt: "ヨガ",
        body: [
            "呼吸と身体をつなげるヴィンヤサ。",
            "ポーズの完成ではなく、\n「今ここ」に戻る練習。",
            "忙しい毎日の中で、\n浅くなった呼吸を思い出していきます。",
        ],
    },
    {
        number: "②",
        label: "思考を整える",
        sub: "書く瞑想・ノート時間",
        image: "/images/shikou.png",
        alt: "書く瞑想",
        body: [
            "頭の中の言葉を、\nただノートに書いてみる。",
            "書くことで、\n思考は静かになっていきます。",
            "自分が本当は何を感じているのか。\n何を望んでいるのか。",
            "「書く瞑想」は、\n自分の内側とつながる時間。",
        ],
        note: {
            label: "考え方に影響を受けた本",
            text: "『設定変更ノートブック』\n著：藤本さきこ",
            url: "https://amzn.to/4wRKGZX",
        },
    },
    {
        number: "③",
        label: "暮らしを香りで整える",
        sub: "Aroma Wellness",
        image: "/images/kaori.png",
        alt: "アロマ",
        body: [
            "香りは、\n0.2秒で脳に届くと言われています。",
            "嗅覚は、\n感情や本能を司る場所と深くつながっています。",
            "「この香り好きかも」\n\nそんな感覚が、\n思考を静かにし、\n深い呼吸を思い出させてくれます。",
            "香りは、\n記憶の扉を開く鍵でもあります。",
        ],
    },
];

export function ThreePillarsSection() {
    return (
        <section className="bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-6 md:px-10">
                <div className="mb-16 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        3 Pillars
                    </span>
                    <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
                        3つの「整える」
                    </h2>
                </div>

                <div className="space-y-20">
                    {pillars.map((pillar, i) => (
                        <div
                            key={pillar.number}
                            className={`flex flex-col gap-10 md:flex-row md:items-center md:gap-16 ${
                                i % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Image */}
                            <div className="relative aspect-video w-full max-w-sm mx-auto flex-shrink-0 md:w-96 md:max-w-none md:mx-0">
                                <div className="absolute -inset-3 rounded-3xl bg-mint/60" />
                                <div className="relative h-full overflow-hidden rounded-2xl shadow-md">
                                    <Image
                                        src={pillar.image}
                                        alt={pillar.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                                <p className="mb-1 font-serif text-3xl text-accent">{pillar.number}</p>
                                <h3 className="mb-1 font-serif text-xl font-medium text-ink md:text-2xl">
                                    {pillar.label}
                                </h3>
                                <p className="mb-6 text-sm tracking-wider text-accent-deep">
                                    {pillar.sub}
                                </p>
                                <div className="space-y-4 text-muted leading-relaxed">
                                    {pillar.body.map((text, j) => (
                                        <p key={j} style={{ whiteSpace: "pre-line" }}>
                                            {text}
                                        </p>
                                    ))}
                                </div>
                                {pillar.note && (
                                    <div className="mt-6 rounded-xl border border-line bg-surface px-5 py-4 text-sm text-muted">
                                        <p className="mb-1 font-medium text-accent-deep">
                                            {pillar.note.label}
                                        </p>
                                        {pillar.note.url ? (
                                            <a
                                                href={pillar.note.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline underline-offset-2 hover:text-accent-deep transition-colors"
                                                style={{ whiteSpace: "pre-line" }}
                                            >
                                                {pillar.note.text}
                                            </a>
                                        ) : (
                                            <span style={{ whiteSpace: "pre-line" }}>{pillar.note.text}</span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
