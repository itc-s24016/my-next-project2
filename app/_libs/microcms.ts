import { createClient } from "microcms-js-sdk";
// microCMSから取得するデータの型を定義
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

// メンバーの型を定義
export type Member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

// カテゴリの型を定義
export type Category = {
  name: string;
} & MicroCMSListContent;

// 記事の型を定義
export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail: MicroCMSImage;
  category: Category;
} & MicroCMSListContent;

// サービスドメインが設定されていない場合
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
// APIキーが設定されていない場合
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// SDK に用意されている createClient を使ってクライアントを作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// メンバー一覧を取得する関数
export const getMembersList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Member>({
    endpoint: "members",
    queries,
  });
  return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
};
