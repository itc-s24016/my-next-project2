import type { Category } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
  category: Category;
};

// カテゴリ表示のコンポーネント
export default function CategoryCard({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
