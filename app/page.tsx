// Style
import styles from "@/app/styles/home/page.module.scss";
import { Major_Mono_Display } from "next/font/google";

// Lib
import joinClassName from "@/app/lib/joinClassName";

// Component

// Font
const major_mono_display = Major_Mono_Display({
  weight: "400",
  subsets: ["latin"]
});

// Icon
import { IconSearch, IconChevronsDown } from "@tabler/icons-react";

export default function Home() {
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
          <form className={styles.searchForm}>
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
      <div className={styles.frame1}></div>
      <div className={styles.frame2}></div>
    </div>
  );
}