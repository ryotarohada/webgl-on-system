# boilerplate_web-app / backend / api

Node.js + TypeScript を用いたAPIサーバー

expressを使用

## 環境変数について

dotenv を使用、`src/lib/env/`に記述している

### 環境変数を設定する際の手順

- `.env`ファイルをルートに作成、任意の内容を記述
- 型情報を`src/types/global.d.ts`に記述する

## OpenAPI (Swagger)について

http://localhost:8080/api/spec からAPI仕様書を確認できる
