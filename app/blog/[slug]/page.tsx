import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

// Revalidate every 60 seconds
export const revalidate = 60;

// Portable Text components configuration
const components = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <div className="relative my-8 aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || "Article Image"}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        },
    },
    block: {
        h2: ({ children }: any) => (
            <h2 className="mb-6 mt-12 text-2xl font-bold text-slate-800 md:text-3xl">
                {children}
            </h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="mb-4 mt-8 text-xl font-bold text-slate-800 md:text-2xl">
                {children}
            </h3>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="my-8 border-l-4 border-pink-300 bg-pink-50 py-4 pl-4 italic text-slate-700">
                {children}
            </blockquote>
        ),
    },
};

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await client.fetch(POST_QUERY, { slug });

    if (!post) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-3xl px-6 py-20 md:px-10">
            {/* Header */}
            <header className="mb-12 text-center">
                <div className="mb-6 flex items-center justify-center gap-4 text-sm text-slate-500">
                    <span className="font-medium text-pink-400">
                        {Array.isArray(post.categories) && typeof post.categories[0] === "string"
                            ? post.categories[0]
                            : "Uncategorized"}
                    </span>
                    <span>{new Date(post.publishedAt).toLocaleDateString("ja-JP")}</span>
                </div>
                <h1 className="text-3xl font-bold leading-tight text-slate-800 md:text-4xl lg:text-5xl">
                    {post.title}
                </h1>
            </header>

            {/* Main Image */}
            {post.mainImage && (
                <div className="relative mb-16 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Content */}
            <div className="prose prose-lg prose-slate mx-auto prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline">
                <PortableText value={post.body} components={components} />
            </div>

            {/* Footer / Author */}
            <div className="mt-20 border-t border-slate-100 pt-12">
                <div className="flex items-center gap-6 rounded-2xl bg-slate-50 p-8">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-slate-200">
                        {/* Placeholder or static logo if available */}
                        <div className="flex h-full w-full items-center justify-center text-2xl">
                            🌿
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Written by
                        </p>
                        <p className="text-lg font-bold text-slate-800">
                            Wellness Labo
                        </p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center rounded-full border border-slate-200 px-8 py-3 text-sm font-semibold text-slate-600 transition hover:border-pink-300 hover:text-pink-400"
                    >
                        ← 記事一覧に戻る
                    </Link>
                </div>
            </div>
        </article>
    );
}
