"use client";

// Style
import styles from "@/app/styles/find/page.module.scss";

// Module
import { useSearchParams } from "next/navigation";

export default function Find() {
  const searchParams = useSearchParams();
  const sub = searchParams.get("sub");

  return (
    <div className={styles.main}>
      <div className={styles.resultFrame}>
        <div className={styles.resultBox}>Domain 1</div>
        <div className={styles.resultBox}>Domain 2</div>
      </div>
    </div>
  );
}
