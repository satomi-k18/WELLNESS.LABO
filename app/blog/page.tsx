import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogPage() {
    const posts = await client.fetch(POSTS_QUERY);
    console.log("Blog Posts Data: ", JSON.stringify(posts, null, 2));

    return (
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
            <div className="mb-16 text-center">
                <h1 className="text-4xl font-bold text-slate-800 md:text-5xl">BLOG</h1>
                <p className="mt-4 text-slate-500">
                    日々の気づきや、ウェルネスな情報を発信しています。
                </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {posts.length > 0 ? (
                    posts.map((post: any) => (
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
                                <h2 className="mb-3 text-lg font-bold leading-snug text-slate-800 transition group-hover:text-pink-400">
                                    {post.title}
                                </h2>
                                <div className="mt-auto pt-4 text-sm font-semibold text-slate-500 group-hover:text-pink-400">
                                    Read More →
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center text-slate-500">
                        <p>記事がまだありません。</p>
                        <p className="mt-2 text-sm">
                            <Link href="/studio" className="text-pink-400 hover:underline">
                                管理画面
                            </Link>
                            から記事を作成してください。
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
