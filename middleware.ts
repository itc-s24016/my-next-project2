import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

// マッチャー(特定のパスにマッチすると動作する)
// このパッケージでは環境変数( .env.local )にユーザー名とパスワードを定義すると Basic 認証が有効になる
export const config = {
  matcher: ["/(.*)"],
};

/*
Basic 認証とは、特定の Web ページにアクセスする際に、ユーザー名とパスワードの入力を求める認証方式のこと
ただし、Basic 認証は通信内容が暗号化されないため、セキュリティ上のリスクがあるので、
Basic 認証と SSL/TLS（暗号化技術の併用）、OAuth などの使用が推奨される
*/
