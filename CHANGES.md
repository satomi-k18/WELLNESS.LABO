# wellness.labo 変更ログ

## 2026-07-31 の作業

### 1. HeroSection にキャッチコピーを追加
**ファイル:** `components/home/HeroSection.tsx`

追加したコピー：
- 大見出し：「忙しい毎日に、深呼吸の余白を。」
- サブコピー：「頭の中がずっと忙しい、自分を後回しにしてきたあなたへ。ヨガとアロマで、ほっとひと息つく時間を。」

---

### 2. note RSS 連携（新着記事セクション）
**新規ファイル:** `components/home/NotePostsSection.tsx`

- `yoga_satomi` の RSS フィードから最新3件を自動取得
- サムネイル・タイトル・日付・リンク付きカードで表示
- 記事投稿後、1時間以内に自動反映（`revalidate: 3600`）
- ページ構成：`ServiceSection` の後に追加

**ファイル:** `app/page.tsx`
- `NotePostsSection` をインポート・追加

**ファイル:** `next.config.ts`
- 画像ドメインに `assets.st-note.com`、`*.st-note.com`、`note.com` を追加

---

### 確認方法
```bash
npm run dev
# → http://localhost:3000 を開く
```
