"use client";

// Style
import styles from "@/app/styles/find/page.module.scss";

// Module
import { useSearchParams } from "next/navigation";

export default function Find() {
  const searchParams = useSearchParams();
  const sub = searchParams.get("sub");

  return sub;
}
