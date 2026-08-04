import Image from "next/image";
import Link from "next/link";
import { fetchNotePosts, formatDate } from "@/lib/note";

export async function NotePostsSection() {
  const posts = await fetchNotePosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-mint/60 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        {/* ヘッダー */}
        <div className="mb-14 text-center">
          <p className="text-xs tracking-[0.3em] text-accent-deep">BLOG</p>
          <h2 className="mt-4 font-serif text-2xl font-medium text-ink md:text-3xl">
            整えるための、記録
          </h2>
        </div>

        {/* 記事 */}
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col"
            >
              {/* noteのサムネイルは1280×670。枠を同じ比率にして見切れを防ぐ */}
              <div className="relative aspect-[1280/670] w-full overflow-hidden rounded-2xl bg-surface">
                {post.thumbnail && (
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    // note の画像は最適化を通さず直接表示する
                    // （NAT64環境で最適化APIが外部IPを内部IPと誤判定するため）
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

        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-full border border-line px-8 py-3 text-sm text-ink transition-colors duration-300 hover:border-accent-deep hover:text-accent-deep"
          >
            記事をもっと読む
          </Link>
        </div>
      </div>
    </section>
  );
}
