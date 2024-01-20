
// Style
import styles from "@/app/styles/home/page.module.scss";
import { Major_Mono_Display } from "next/font/google";

// Lib
import joinClassName from "@/app/lib/joinClassName";

// Component

// Font
const major_mono_display = Major_Mono_Display({
  weight: "400",
})

// Icon
import { IconSearch, IconChevronsDown } from '@tabler/icons-react';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.firstSection}>
          <div className={styles.firstSectionFrame}>
            <div className={styles.firstSectionFrameSet}>
              <h1 className={joinClassName(styles.title, major_mono_display.className)}>
                Dev-in.tw
              </h1>
              <div className={styles.searchSection}>
                <form className={styles.searchForm}>
                  <input
                    placeholder="搜尋可用子網域"
                    className={styles.searchInput}
                  />
                  <p className={styles.searchSubTitle}>
                    .dev-in.tw
                  </p>
                  <div className={styles.searchIcon}>
                    <IconSearch color="white" size={30} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollSection}>
          <IconChevronsDown color="white" size={45} />
        </div>
      </div>
    </div>
  );
}
