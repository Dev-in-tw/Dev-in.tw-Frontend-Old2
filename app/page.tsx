"use client";

// Style
import styles from "@/app/styles/home/page.module.scss";
import { Major_Mono_Display } from "next/font/google";

// Lib
import joinClassName from "@/app/lib/joinClassName";

// Font
const major_mono_display = Major_Mono_Display({
  weight: "400",
  subsets: ["latin"],
});

// Icon
import {
  IconSearch,
  IconChevronsDown,
  IconBrandDiscordFilled,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  function searchFormHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.querySelector("input");
    if (input) {
      const value = input.value;
      if (value) {
        window.location.href = `/find?sub=${value}`;
      }
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.searchPage}>
        <div className={styles.center}>
          <h1
            className={joinClassName(
              styles.title,
              major_mono_display.className
            )}
          >
            Dev-in.tw
          </h1>
          <h1
            className={joinClassName(
              styles.title_phone,
              major_mono_display.className
            )}
          >
            DIT
          </h1>
          <form
            className={styles.searchForm}
            onSubmit={e => searchFormHandle(e)}
          >
            <input placeholder="搜尋可用子網域" />
            <p>.dev-in.tw</p>
            <div>
              <IconSearch color="white" />
            </div>
          </form>
        </div>
        <div className={styles.scrollIcon}>
          <IconChevronsDown color="white" />
        </div>
      </div>
      {/* <div className={styles.frame1}></div> */}
      <div className={styles.frame2}>
        <div className={styles.helpFrame}>
          <h1 className={styles.helpTitle}>需要協助嗎</h1>
          <p className={styles.helpDescription}>我們隨時提供為您提供幫助</p>
          <div className={styles.joinDiscordFrame}>
            <Link
              className={styles.joinDiscordButton}
              href="https://discord.gg/ZvwTZqXjYf"
              target="_blank"
            >
              <p className={styles.joinDiscordButtonText}>
                <IconBrandDiscordFilled />
                Discord
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
