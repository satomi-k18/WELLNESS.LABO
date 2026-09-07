const requests = [
    { text: "各回のあとに、短いアンケートに答えていただくこと" },
    { text: "修了後に、感想を書いていただくこと" },
    {
        text: "その感想を掲載させていただくこと",
        note: "（お名前は 実名・イニシャル・匿名 からお選びいただけます）",
    },
];

export function CourseMonitor() {
    return (
        <section className="bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-2xl px-6 md:px-10">
                <div className="mb-12 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        Monitor
                    </span>
                    <h2 className="font-serif text-2xl font-medium leading-relaxed text-ink md:text-3xl">
                        モニターとして
                        <br className="sm:hidden" />
                        お願いすること
                    </h2>
                </div>

                <p className="mb-8 leading-loose text-muted">
                    1期は、モニター価格でご参加いただきます。そのかわり、3つだけお願いがあります。
                </p>

                <ol className="mb-10 space-y-5">
                    {requests.map((request, i) => (
                        <li
                            key={request.text}
                            className="flex items-start gap-4 rounded-2xl border border-line bg-surface px-6 py-5"
                        >
                            <span className="font-serif text-lg text-accent-deep">{i + 1}</span>
                            <div>
                                <p className="leading-relaxed text-ink">{request.text}</p>
                                {request.note && (
                                    <p className="mt-1 text-xs leading-relaxed text-muted">
                                        {request.note}
                                    </p>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>

                <p className="leading-loose text-muted">
                    わたしにとって、この1期がはじめての講座です。みなさんの声が、次につながります。
                </p>
            </div>
        </section>
    );
}
