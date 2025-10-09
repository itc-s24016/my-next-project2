import Image from "next/image";
import styles from "./index.module.css";

// 日付表示のコンポーネント
type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
      {date}
    </span>
  );
}
