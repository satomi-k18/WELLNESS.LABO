import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { FEATURED_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

// ===================================================
// ↓ あなたのnoteユーザー名に変更してください
// 例: https://note.com/satomi_wellness → 'satomi_wellness'
// ===================================================
const NOTE_USERNAME = 'yoga_satomi';
const NOTE_FEED_URL = `https://note.com/${NOTE_USERNAME}/rss`;

interface NotePost {
    title: string;
    link: string;
    pubDate: string;
    thumbnail: string | null;
}

function extractCdata(str: string): string {
    const cdata = str.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
    return cdata ? cdata[1].trim() : str.trim();
}

async function fetchNotePosts(): Promise<NotePost[]> {
    try {
        const res = await fetch(NOTE_FEED_URL, {
            next: { revalidate: 3600 }, // 1時間キャッシュ
        });
        if (!res.ok) return [];
        const xml = await res.text();

        const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];

        return itemMatches.slice(0, 3).map((match) => {
            const item = match[1];

            // タイトル
            const titleRaw = item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '';
            const title = extractCdata(titleRaw);

            // リンク
            const linkRaw = item.match(/<link>([\s\S]*?)<\/link>|<link\s[^>]*\/>[\s\S]*?<link>([\s\S]*?)<\/link>/)?.[1] ?? '';
            // <link> の後に直接テキストがある場合（RSSによって異なる）
            const linkAlt = item.match(/<guid[^>]*>([\s\S]*?)<\/guid>/)?.[1] ?? '';
            const link = extractCdata(linkRaw) || extractCdata(linkAlt);

            // 投稿日
            const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() ?? '';

            // サムネイル（media:thumbnail → enclosure の順に探す）
            const thumbnail =
                item.match(/<media:thumbnail[^>]+url="([^"]+)"/)?.[1] ??
                item.match(/<enclosure[^>]+url="([^"]+)"/)?.[1] ??
                null;

            return { title, link, pubDate, thumbnail };
        });
    } catch {
        return [];
    }
}

export async function FeaturedPosts() {
    // まずSanityから記事を取得
    const sanityPosts = await client.fetch(FEATURED_POSTS_QUERY);

    // Sanityに記事があればそちらを使う、なければnote RSSを使う
    const useNote = !sanityPosts || sanityPosts.length === 0;
    const notePosts: NotePost[] = useNote ? await fetchNotePosts() : [];

    return (
        <section className="bg-slate-50 py-20 md:py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-10">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-pink-400">
                            Latest Blog
                        </span>
                        <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
                            新着記事
                        </h2>
                    </div>
                    <Link
                        href={useNote ? `https://note.com/${NOTE_USERNAME}` : "/blog"}
                        target={useNote ? "_blank" : undefined}
                        rel={useNote ? "noopener noreferrer" : undefined}
                        className="hidden items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-pink-400 md:flex"
                    >
                        {useNote ? "noteをもっと見る" : "View All"} <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {!useNote && sanityPosts.length > 0 ? (
                        // Sanityの記事を表示
                        sanityPosts.map((post: any) => (
                            <Link
                                key={post._id}
                                href={`/blog/${post.slug.current}`}
                                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative aspect-[16/9] w-full bg-slate-200">
                                    {post.mainImage ? (
                                        <Image
                                            src={urlFor(post.mainImage).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="mb-3 flex items-center justify-between text-xs">
                                        <span className="font-medium text-pink-400">
                                            {Array.isArray(post.categories) && typeof post.categories[0] === "string"
                                                ? post.categories[0]
                                                : "Uncategorized"}
                                        </span>
                                        <span className="text-slate-400">
                                            {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
                                        </span>
                                    </div>
                                    <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800 transition group-hover:text-pink-400">
                                        {post.title}
                                    </h3>
                                    <div className="mt-auto pt-2 text-sm font-semibold text-slate-500 group-hover:text-pink-400">
                                        Read More →
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : notePosts.length > 0 ? (
                        // noteのRSS記事を表示
                        notePosts.map((post, i) => (
                            <Link
                                key={i}
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative aspect-[16/9] w-full bg-slate-200">
                                    {post.thumbnail ? (
                                        <Image
                                            src={post.thumbnail}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-pink-50 text-pink-300">
                                            <span className="text-3xl">🌿</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="mb-3 flex items-center justify-between text-xs">
                                        <span className="font-medium text-pink-400">note</span>
                                        <span className="text-slate-400">
                                            {post.pubDate
                                                ? new Date(post.pubDate).toLocaleDateString("ja-JP")
                                                : ""}
                                        </span>
                                    </div>
                                    <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800 transition group-hover:text-pink-400">
                                        {post.title}
                                    </h3>
                                    <div className="mt-auto pt-2 text-sm font-semibold text-slate-500 group-hover:text-pink-400">
                                        noteで読む →
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-slate-500">
                            記事がまだありません。
                        </div>
                    )}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <Link
                        href={useNote ? `https://note.com/${NOTE_USERNAME}` : "/blog"}
                        target={useNote ? "_blank" : undefined}
                        rel={useNote ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500"
                    >
                        {useNote ? "noteをもっと見る" : "View All"} <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
