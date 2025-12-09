import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  "categories": categories[]->title,
  body
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  "categories": categories[]->title,
  body
}`;

export const FEATURED_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  categories,
  body
}`;
