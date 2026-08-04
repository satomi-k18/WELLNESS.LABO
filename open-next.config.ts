import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Cloudflare で Next.js を動かすための設定。
// まずは最小構成でデプロイする。ページのキャッシュ（revalidate）を
// Cloudflare 側に保存したくなったら、KV を使う設定を後から足せる。
export default defineCloudflareConfig();
