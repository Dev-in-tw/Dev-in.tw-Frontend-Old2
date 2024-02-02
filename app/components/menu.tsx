// Styles
import styles from "@/app/styles/menu.module.scss";

// Module
import Image from "next/image";
import { useRouter } from "next/navigation";

// Icons
import { IconHome, IconDashboard } from "@tabler/icons-react";

export default function Menu() {
  const router = useRouter();

  return (
    <div className={styles.frame}>
      <div className={styles.logo}>
        <div className={styles.logoFrame}>
          <Image
            src="/images/logo.png"
            width={60}
            height={60}
            alt="menu_logo"
            className={styles.logoImage}
          />
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.listFrame}>
          <button
            className={styles.listItemFrame}
            onClick={() => router.replace("/")}
          >
            <p className={styles.listItem}>首頁</p>
            <IconHome size={38} stroke={2.5} className={styles.listItemIcon} />
          </button>
          <button
            className={styles.listItemFrame}
            onClick={() => router.replace("/dashboard")}
          >
            <p className={styles.listItem}>面板</p>
            <IconDashboard
              size={38}
              stroke={2.5}
              className={styles.listItemIcon}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
