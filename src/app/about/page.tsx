import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About page",
};

export default function Home() {
  return (
    <main className={styles.main}>
      teste about
    </main>
  );
}
