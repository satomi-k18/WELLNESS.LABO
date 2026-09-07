export function CourseHabit() {
    return (
        <section className="bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-2xl px-6 md:px-10">
                <div className="mb-14 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        Habit
                    </span>
                    <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
                        才能ではなく、習慣
                    </h2>
                </div>

                <div className="space-y-6 leading-loose text-muted">
                    <p className="font-medium text-ink">
                        わたしは、人生は習慣で決まると思っています。
                    </p>
                    <p>やる気のある日も、ない日も、同じことを同じようにやる。</p>
                    <p>
                        毎回、同じ順番のポーズをやる。淡々と。
                        でもその「淡々と続ける」が体に入ると、ヨガ以外のことも続けられるようになります。
                    </p>
                    <p className="font-medium text-ink">
                        だからこの講座は、アシュタンガを覚える講座であると同時に、習慣をひとつ作りきる講座です。
                    </p>
                </div>

                <div className="mt-10 rounded-2xl border border-line bg-surface p-8 md:p-10">
                    <p className="mb-6 leading-loose text-ink">
                        初回に、なぜ受講しようと思ったのか。20回のあと、どうなっていたいか。
                        それを、シートに書くところから始めます。
                    </p>
                    <p className="mb-3 font-medium leading-relaxed text-ink">
                        そして最終回に、そのシートをもう一度見ます。
                    </p>
                    <p className="leading-loose text-muted">
                        20回続けられた自分を、目で見て確かめてほしいからです。
                    </p>
                </div>
            </div>
        </section>
    );
}
