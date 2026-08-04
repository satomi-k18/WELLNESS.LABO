import { getImageProps } from "next/image";

const ALT =
    "「ちゃんとしなきゃ」と疲れてしまう女性へ。呼吸と思考を整える、やさしい習慣。ヨガ × 書く瞑想 × 香り";

export function HeroSection() {
    const common = { alt: ALT, priority: true, quality: 85 };

    // スマホ用（縦長 4:5）とPC用（横長 2:1）で画像を出し分ける。
    // getImageProps を使うことで、Next.jsの最適化（WebP変換・リサイズ）を
    // 効かせたまま、実際に表示する側の画像だけを読み込ませられる。
    const { props: sp } = getImageProps({
        ...common,
        src: "/images/hero-sp.png",
        width: 1122,
        height: 1402,
        sizes: "100vw",
    });
    const { props: pc } = getImageProps({
        ...common,
        src: "/images/hero.png",
        width: 1774,
        height: 887,
        sizes: "100vw",
    });

    return (
        <section className="w-full bg-cream">
            <picture>
                <source media="(min-width: 768px)" srcSet={pc.srcSet} sizes={pc.sizes} />
                <source media="(max-width: 767px)" srcSet={sp.srcSet} sizes={sp.sizes} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    {...pc}
                    alt={ALT}
                    className="h-auto w-full"
                />
            </picture>

            {/* 画像にキャッチコピーが入っているため、画面上の文字は重ねない。
                見出しは読み上げ・検索エンジン用にだけ残す。 */}
            <h1 className="sr-only">
                がんばりすぎるあなたが、もっと軽く、自分らしく生きるために。呼吸と思考を整える、やさしい習慣。
            </h1>
        </section>
    );
}
