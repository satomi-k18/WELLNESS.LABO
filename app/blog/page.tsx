import Image from "next/image";
import { fetchNotePosts, formatDate, NOTE_USERNAME } from "@/lib/note";

export const revalidate = 3600;

export const metadata = {
  title: "Blog | wellness.labo",
  description:
    "呼吸・思考・暮らしを整えるための記録。ヨガ、書く瞑想、アロマのこと。",
};

export default async function BlogPage() {
  const posts = await fetchNotePosts();
  const [lead, ...rest] = posts;

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
      {/* 見出し */}
      <header className="mb-16 text-center md:mb-20">
        <p className="text-xs tracking-[0.3em] text-accent-deep">BLOG</p>
        <h1 className="mt-4 font-serif text-3xl font-medium text-ink md:text-4xl">
          整えるための、記録
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-loose text-muted">
          ヨガ、書く瞑想、アロマ。
          <br />
          日々のなかで見つけた小さな気づきを、言葉にしています。
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="py-24 text-center text-sm text-muted">
          記事を読み込めませんでした。しばらくしてからお試しください。
        </p>
      ) : (
        <>
          {/* 最新記事は大きく見せる */}
          <a
            href={lead.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-16 grid gap-8 md:grid-cols-2 md:items-center"
          >
            {/* noteのサムネイルは1280×670。枠を同じ比率にして見切れを防ぐ */}
            <div className="relative aspect-[1280/670] w-full overflow-hidden rounded-2xl bg-mint/60">
              {lead.thumbnail && (
                <Image
                  src={lead.thumbnail}
                  alt={lead.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-accent-deep">LATEST</p>
              <h2 className="mt-3 font-serif text-xl leading-relaxed text-ink transition-colors duration-300 group-hover:text-accent-deep md:text-2xl">
                {lead.title}
              </h2>
              <p className="mt-4 text-sm leading-loose text-muted">
                {lead.excerpt}
              </p>
              <p className="mt-5 text-xs text-muted">
                {formatDate(lead.publishedAt)}
              </p>
            </div>
          </a>

          <div className="mb-14 h-px w-full bg-line" />

          {/* 以降は一覧 */}
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col"
              >
                <div className="relative aspect-[1280/670] w-full overflow-hidden rounded-2xl bg-mint/60">
                  {post.thumbnail && (
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <h3 className="mt-5 font-serif text-base leading-relaxed text-ink transition-colors duration-300 group-hover:text-accent-deep">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-loose text-muted">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-muted">
                  {formatDate(post.publishedAt)}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href={`https://note.com/${NOTE_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-line px-8 py-3 text-sm text-ink transition-colors duration-300 hover:border-accent-deep hover:text-accent-deep"
            >
              noteで読む
            </a>
          </div>
        </>
      )}
    </div>
  );
}
