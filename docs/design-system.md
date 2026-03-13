# Seven Elements デザインシステム

## カラーパレット

### ブランドカラー（アースオレンジ/テラコッタ）
| Token | Hex | 用途 |
|-------|-----|------|
| brand-50 | #fdf6f0 | セクション背景（淡） |
| brand-100 | #fae8d4 | カード背景（淡） |
| brand-200 | #f4cda8 | ホバー状態、選択色 |
| brand-300 | #eaab72 | アクセント（軽） |
| brand-400 | #e08c42 | ボタンホバー |
| brand-500 | #c97832 | **メインアクセント** — CTA、リンク |
| brand-600 | #a45f28 | アクティブ状態、ダークアクセント |
| brand-700 | #7d4820 | 強調テキスト |

### ニュートラル（ストーン系）
stone-50〜stone-900（Tailwind標準）を使用。温かみのあるグレー系。

### 7つの要素カラー
| 要素 | Hex |
|------|-----|
| Fire | #d4553a |
| Water | #4a8ba8 |
| Wind | #8fb8a0 |
| Wood | #6b8e5e |
| Earth | #b8956a |
| Light | #e8c856 |
| Darkness | #2d2d3d |

## タイポグラフィ

### フォントファミリー
- **英語見出し**: Cormorant Garamond（セリフ、エレガント）→ `font-serif`
- **日本語本文**: Noto Sans JP（クリーンなゴシック）→ `font-sans`

### フォントスケール
| 要素 | サイズ（mobile） | サイズ（desktop） |
|------|-----------------|------------------|
| Hero h1 | text-4xl (36px) | text-7xl (72px) |
| Section h2 | text-3xl (30px) | text-5xl (48px) |
| Card h3 | text-xl (20px) | text-xl (20px) |
| Body | text-base (16px) | text-lg (18px) |
| Caption | text-sm (14px) | text-sm (14px) |

## スペーシング
- セクション間: py-24 (96px) → lg:py-32 (128px)
- コンテンツ最大幅: max-w-7xl (80rem)
- 水平パディング: px-6 → lg:px-12

## コンポーネント

### ボタン
- **プライマリ（CTA）**: bg-brand-500, text-white, rounded-full, tracking-wider
- **ゴースト（Hero用）**: bg-white/10, backdrop-blur, border-white/30, rounded-full
- ホバー: 明度変化のみ、アニメーション不要

### カード（Seven Elements）
- bg-white, rounded-2xl, shadow-sm
- hover:shadow-md, hover:-translate-y-1
- 要素カラーのドットアイコン付き

### ナビゲーション
- 固定ヘッダー: bg-white/90, backdrop-blur-sm
- モバイル: ハンバーガー→フルスクリーンメニュー

## ロゴ
- **logo.svg**: 円形構造、7つの要素ドットを配置、中央にDarkness
- **favicon.svg**: 簡略版（同じ構造、小さいサイズ向け）
- テーマ: Organic Cosmology

## デザイン原則
1. **写真ファースト**: 写真を大きく見せ、テキストは控えめに
2. **余白を恐れない**: SANUのような贅沢な余白
3. **自然素材感**: アースカラー、温かみのある配色
4. **ミニマル**: 装飾を最小限に、コンテンツに集中
