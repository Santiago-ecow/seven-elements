# Seven Elements プロジェクト

## プロジェクト概要
Seven Elementsブランドサイト（Next.js 16 + Tailwind CSS + next-intl）

## ディレクトリ構造
- `src/app/[locale]/` — ページ（i18nルーティング）
- `src/components/` — 共通コンポーネント
- `src/i18n/` — next-intl設定
- `messages/ja.json`, `messages/en.json` — 翻訳ファイル
- `public/images/` — 画像素材
- `docs/` — デザインシステム、デプロイ手順書

## サブエージェント利用時のルール
- サブエージェントでファイルを書き込む場合、`.claude/settings.json` に許可が必要
- バックグラウンドエージェントはユーザーに許可プロンプトを出せない
- WebFetch / WebSearch は参考サイト調査に必須 — 必ず事前に許可設定しておくこと

## デザイン参考
- SANU (sa-nu.com) — 温かみ、自然素材感、オレンジアクセント
- NOT A HOTEL (notahotel.com) — 洗練、大型ヒーロー、シャープ
- 海外キャビン/リトリート系サイトも調査すること

## 開発コマンド
- `npm run dev` — 開発サーバー (localhost:3000)
- `npm run build` — 本番ビルド
