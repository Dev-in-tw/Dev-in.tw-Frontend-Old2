"use client";

// Module
import { usePathname } from "next/navigation";

// Style
import styles from "@/app/styles/layout.module.scss";

export default function PathCheck({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <div
      className={styles.main}
      style={{
        display: pathname !== "/" ? "relative" : "",
        overflowY: pathname !== "/" ? "scroll" : "hidden",
      }}
    >
      {children}
    </div>
  );
}
