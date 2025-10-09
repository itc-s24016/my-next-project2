export type Category = {
  // カテゴリの型を定義
  name: string;
};

export type News = {
  // 記事の型を定義
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};
