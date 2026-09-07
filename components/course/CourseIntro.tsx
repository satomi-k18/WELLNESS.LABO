export function CourseIntro() {
    return (
        <section className="bg-surface py-20 md:py-28">
            <div className="mx-auto max-w-2xl px-6 md:px-10">
                <h2 className="mb-10 text-center font-serif text-2xl font-medium leading-relaxed text-ink md:text-3xl">
                    先生になるための
                    <br className="sm:hidden" />
                    講座ではありません
                </h2>

                <div className="space-y-6 leading-loose text-muted">
                    <p>
                        ヨガを学ぼうとすると、出てくるのは「インストラクター養成コース」ばかり。
                        先生になりたいわけじゃない。ただ、自分のためにヨガを深めたい。
                    </p>
                    <p className="font-medium text-ink">そんな人の行き場が、意外とないんです。</p>
                </div>

                <div className="mt-10 rounded-2xl bg-mint/50 px-6 py-10 text-center md:px-12">
                    <p className="mb-3 leading-loose text-ink">
                        この講座でお伝えするのは、
                    </p>
                    <p className="mb-4 font-serif text-xl font-medium leading-relaxed text-ink md:text-2xl">
                        アーサナと、ヨガの考え方。
                        <br />
                        その2つです。
                    </p>
                    <p className="leading-loose text-ink">
                        この2つで、ずいぶん生きやすくなりました。
                    </p>
                </div>
            </div>
        </section>
    );
}
