# Seven Elements デプロイ手順書

## 推奨ホスティング: Vercel

Next.jsの開発元が運営。無料枠で十分に運用可能。

### デプロイ手順

#### 1. GitHubリポジトリの作成
```bash
cd /Users/shimomura/seven-elements
git add .
git commit -m "Initial commit: Seven Elements website"
```

GitHub上で `seven-elements` リポジトリを作成し、プッシュ：
```bash
git remote add origin https://github.com/YOUR_USERNAME/seven-elements.git
git push -u origin main
```

#### 2. Vercelでデプロイ
1. https://vercel.com にアクセス
2. GitHubアカウントでログイン
3. 「Import Project」→ `seven-elements` リポジトリを選択
4. 設定はデフォルトのまま「Deploy」をクリック
5. 数分でデプロイ完了

#### 3. カスタムドメイン設定
1. Vercelダッシュボード → Settings → Domains
2. `sevenelements.jp` を追加
3. ドメインレジストラでDNS設定：
   - Type: CNAME
   - Name: @
   - Value: cname.vercel-dns.com

### ローカル確認
```bash
npm run dev     # 開発サーバー http://localhost:3000
npm run build   # 本番ビルド
npm run start   # 本番サーバー
```

### 写真差し替え手順
1. `public/` フォルダに写真を配置
2. コンポーネント内のプレースホルダーを `<Image src="/photo-name.jpg" .../>` に差し替え
3. 推奨：WebP形式、幅2000px程度に最適化

### 環境変数（将来用）
- `NEXT_PUBLIC_AIRBNB_URL` — Airbnb予約ページURL
- `CONTACT_EMAIL` — 問い合わせフォーム送信先
