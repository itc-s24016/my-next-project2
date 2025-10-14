import styles from "@/app/_components/Sheet";
import Sheet from "../_components/Sheet";

// members 配下のページに共通のレイアウトを提供する
type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <Sheet>{children}</Sheet>;
}
