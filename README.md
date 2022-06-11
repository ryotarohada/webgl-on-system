# boilerplate_web-app

Web App 開発用のテンプレート (front + api + db)

フロントエンド & バックエンド で TypeScript を採用。

front: Next.js × Chakra UI

api: Express on Docker

DB: MySQL on Docker

## 環境構築の手順

環境構築に必要なソフトは以下

【必須】

- VSCode
- VSCode 各種 Plugin (`.vscode/extensions.json`の`recommendations`に記載)
- Node.js v14.17.1
- yarn v1.22.5
- vercel CLI

【任意】

- volta (Node.js と yarn のバージョン管理の為、導入を推奨)

### env

1. Google Driveから該当の`.env`をダウンロード

2. `root/backend/api`へ`.env`を配置

### frontend

1. `root/frontend`に移動

2. `yarn install`を実行してnpmパッケージをインストール

3. `yarn dev`を実行して開発サーバー起動

### backend

1. `root/backend/api`に移動

2. `yarn install`を実行してnpmパッケージをインストール

3. `root/backend`に移動

4. `docker-compose up -d --build`を実行
