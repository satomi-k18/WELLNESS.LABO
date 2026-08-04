import Link from "next/link";

export function SubstackSection() {
    return (
        <section className="bg-surface py-14 md:py-20">
            <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
                <div className="mb-10">
                    <Link
                        href="https://lin.ee/r7oFd5g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block max-w-full rounded-full bg-[#06C755] px-8 py-4 text-center text-sm font-bold leading-relaxed tracking-wide text-white shadow-sm transition-all hover:bg-[#05b04d] hover:shadow-md md:px-10"
                    >
                        {/* スマホで単語の途中で折り返さないよう、区切り位置を指定する */}
                        <span className="block sm:inline">7日間の思考リセット</span>
                        <span className="block sm:inline">〈おかげさまワーク〉プレゼント</span>
                    </Link>
                </div>
                <p className="mb-6 text-ink leading-relaxed md:text-lg">
                    「自分を整える習慣」をお届けしています。<br />
                    <br />
                    ヨガやノート、アロマ、子育てを通して、<br />
                    <br />
                    私自身が実践していることを言葉にしています。<br />
                    <br />
                    忙しい毎日のなかでも、<br />
                    <br />
                    心地よく生きるためのヒントを受け取りたい方へ。
                </p>
                <Link
                    href="https://satomikonishi.substack.com/?utm_campaign=profile_chips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/20 px-8 py-3 text-sm tracking-wide text-accent-deep transition-all hover:bg-accent/40 hover:shadow-sm"
                >
                    購読はこちら
                </Link>
            </div>
        </section>
    );
}
