// note.com の RSS を読み込んで記事一覧にする。
// トップページの新着3件と、/blog の一覧の両方がここを使う。

export const NOTE_USERNAME = "yoga_satomi";

export interface NotePost {
  title: string;
  url: string;
  publishedAt: string;
  thumbnail: string | null;
  excerpt: string;
}

/** タグの中身を取得（CDATA対応） */
function extractTagContent(xml: string, tag: string): string | null {
  const cdataMatch = xml.match(
    new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*<\\/${tag}>`, "i")
  );
  if (cdataMatch) return cdataMatch[1].trim();

  const plainMatch = xml.match(new RegExp(`<${tag}[^>]*>([^<]*)<\\/${tag}>`, "i"));
  if (plainMatch) return plainMatch[1].trim();

  return null;
}

/** タグの属性値を取得 */
function extractAttrFromTag(xml: string, tag: string, attr: string): string | null {
  const match = xml.match(new RegExp(`<${tag}[^>]*\\s${attr}=["']([^"']+)["']`, "i"));
  return match ? match[1] : null;
}

/** HTML文字列から最初のimgのsrcを取得 */
function extractImgSrcFromHtml(html: string): string | null {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

/**
 * サムネイルURLを探す。
 * note の RSS は <media:thumbnail>URL</media:thumbnail> のように
 * タグの中身にURLを入れる形式なので、そちらを最優先で見る。
 */
function findThumbnail(item: string): string | null {
  const candidates = [
    extractTagContent(item, "media:thumbnail"),
    extractTagContent(item, "media:content"),
    extractAttrFromTag(item, "media:thumbnail", "url"),
    extractAttrFromTag(item, "media:content", "url"),
    extractAttrFromTag(item, "enclosure", "url"),
    extractImgSrcFromHtml(extractTagContent(item, "content:encoded") ?? ""),
    extractImgSrcFromHtml(extractTagContent(item, "description") ?? ""),
  ];

  for (const c of candidates) {
    if (c && /^https?:\/\//i.test(c.trim())) return c.trim();
  }
  return null;
}

/** description の HTML からタグを除いて要約文にする */
function toExcerpt(html: string, length = 90): string {
  const text = html
    .replace(/<a\b[^>]*>続きをみる<\/a>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > length ? `${text.slice(0, length)}…` : text;
}

/**
 * note の記事を取得する。
 * @param limit 取得件数。省略すると全件。
 */
export async function fetchNotePosts(limit?: number): Promise<NotePost[]> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(`https://note.com/${NOTE_USERNAME}/rss`, {
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 3600 }, // 1時間キャッシュ
    });
    clearTimeout(timer);

    if (!res.ok) return [];

    const xml = await res.text();
    const posts: NotePost[] = [];

    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match: RegExpExecArray | null;

    while ((match = itemRegex.exec(xml)) !== null) {
      const item = match[1];

      const title = extractTagContent(item, "title");

      const linkMatch =
        item.match(/<link>([^<]+)<\/link>/i) ||
        item.match(/<link[^>]+href=["']([^"']+)["']/i);
      const url = linkMatch ? linkMatch[1].trim() : null;

      if (!title || !url) continue;

      posts.push({
        title,
        url,
        publishedAt: extractTagContent(item, "pubDate") ?? "",
        thumbnail: findThumbnail(item),
        excerpt: toExcerpt(extractTagContent(item, "description") ?? ""),
      });
    }

    return limit ? posts.slice(0, limit) : posts;
  } catch {
    return [];
  }
}

/** 「2026年7月31日」の形にする */
export function formatDate(value: string): string {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
