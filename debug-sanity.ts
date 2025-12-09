
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from './sanity/env'
import { POSTS_QUERY } from './sanity/lib/queries'

const client = createClient({
    projectId: "zgcmpent",
    dataset: "production",
    apiVersion: "2024-02-26",
    useCdn: false,
    perspective: 'published',
})

async function main() {
    const posts = await client.fetch(POSTS_QUERY);
    posts.forEach((post: any) => {
        console.log(`Title: ${post.title}, Slug: ${post.slug.current}`);
    });
}

main();
