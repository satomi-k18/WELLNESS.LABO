const faqs = [
    {
        q: "体がかたいのですが、大丈夫でしょうか",
        a: "大丈夫です。というより、そのために20回かけます。できないポーズは、できる形に変えてお伝えします。7年やっているわたしにも、いまだにできないポーズがあります。",
    },
    {
        q: "アシュタンガはきついと聞きました",
        a: "ハーフプライマリーは、フルの半分です。それを20回に分けて進むので、1回あたりはゆっくりです。息が上がったら休んでください。休むことも練習です。",
    },
    {
        q: "都合が合わず、休んでしまったら",
        a: "録画をお渡しします。次の回までにご自分のペースで追いついてください。全部リアルタイムで出られなくても、修了できます。",
    },
    {
        q: "哲学って、むずかしくないですか",
        a: "ヨガには八支則という、8つの段階があります。ポーズは、そのうちのひとつでしかありません。残りの7つに何が書いてあるのか。少しずつお話しします。暗記することはありません。聞いて、なるほどと思って、忘れてもらって構いません。それでも残るものが、たぶん哲学です。",
    },
    {
        q: "20回のあと、続けられるか不安です",
        a: "そのために「ひとりで通せるようになること」をゴールにしています。修了後の練習の場も、いくつかご案内します。",
    },
    {
        q: "先生の資格は持っていますか",
        a: "アシュタンガのオーソライズは持っていません。ヨガを教えて9年、アシュタンガを練習して7年です。わたしが7年続けてきた習慣をお渡しする講座だと思ってください。",
    },
    {
        q: "週2と週1、どちらになりますか",
        a: "説明会で、みなさんのご都合をうかがってから決めます。少人数なので、それができます。",
    },
];

export function CourseFaq() {
    return (
        <section className="bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-2xl px-6 md:px-10">
                <div className="mb-14 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        FAQ
                    </span>
                    <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
                        よくある質問
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <details
                            key={faq.q}
                            className="group rounded-2xl border border-line bg-surface px-6 py-5 md:px-8"
                        >
                            <summary className="flex cursor-pointer list-none items-start gap-3 font-medium leading-relaxed text-ink marker:content-none">
                                <span className="mt-0.5 font-serif text-accent-deep">Q.</span>
                                <span className="flex-1">{faq.q}</span>
                                <span className="mt-1 text-xs text-muted transition-transform duration-300 group-open:rotate-180">
                                    ▾
                                </span>
                            </summary>
                            <p className="mt-4 flex gap-3 leading-loose text-muted">
                                <span className="font-serif text-accent-deep">A.</span>
                                <span className="flex-1">{faq.a}</span>
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
