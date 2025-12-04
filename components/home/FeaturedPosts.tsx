import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { FEATURED_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export async function FeaturedPosts() {
    const posts = await client.fetch(FEATURED_POSTS_QUERY);

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
                        href="/blog"
                        className="hidden items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-pink-400 md:flex"
                    >
                        View All <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
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
                                    <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800 transition group-hover:text-pink-400">
                                        {post.title}
                                    </h3>
                                    <div className="mt-auto pt-2 text-sm font-semibold text-slate-500 group-hover:text-pink-400">
                                        Read More →
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
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500"
                    >
                        View All <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
