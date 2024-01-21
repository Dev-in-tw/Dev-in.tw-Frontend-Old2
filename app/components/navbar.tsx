"use client";

// Module
import Link from "next/link";
import Image from "next/image";

// Style
import styles from "@/app/styles/navbar.module.scss";

// module
import { signIn } from "next-auth/react";

export default function Navbar() {
  return (
    <div className={styles.main}>
      <Link href="/" className={styles.logo}>
        <Image src="/images/logo.png" height={45} width={45} alt="logo" />
      </Link>
      <div className={styles.frame}>
        <button className={styles.signInButton} onClick={() => signIn("discord")}>
          <p className={styles.signInButtonText}>登入 / 註冊</p>
        </button>
        <button className={styles.plusButton}>
          <svg
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.plusIcon}
          >
            <g mask="url(#mask0_21_345)">
              <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z" />
            </g>
          </svg>
        </button>
      </div>
    </div >
  );
}