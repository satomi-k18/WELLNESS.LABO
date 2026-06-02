import Link from "next/link";

export function SubstackSection() {
    return (
        <section className="bg-white py-14 md:py-20">
            <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
                <div className="mb-10">
                    <Link
                        href="https://lin.ee/r7oFd5g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-10 py-4 text-sm font-bold tracking-wider text-white shadow-lg transition-all hover:bg-[#05b04d] hover:shadow-xl"
                    >
                        思考を整えるノートPDFをプレゼント
                    </Link>
                </div>
                <p className="mb-6 text-slate-600 leading-relaxed md:text-lg">
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
                    className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-8 py-3 text-sm font-bold tracking-wide text-pink-500 transition-all hover:bg-pink-100 hover:shadow-md"
                >
                    購読はこちら
                </Link>
            </div>
        </section>
    );
}
