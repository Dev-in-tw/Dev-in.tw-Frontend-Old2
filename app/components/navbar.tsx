"use client";

// Module
import Link from "next/link";
import Image from "next/image";

// Style
import styles from "@/app/styles/navbar.module.scss";

// module
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className={styles.main}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" height={45} width={45} alt="logo" />
        </Link>
        <div className={styles.frame}>
          <button
            className={styles.signInButton}
            onClick={() => router.push("/api/auth/login")}
          >
            <p className={styles.signInButtonText}>登入 / 註冊</p>
          </button>
          <button
            className={styles.plusButton}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            onMouseEnter={element => {
              if (menuOpen) {
                const svgElement = element.currentTarget.querySelector("svg");
                if (svgElement) {
                  svgElement.style.transform = "rotate(-135deg)";
                }
              }
            }}
            onMouseLeave={element => {
              if (menuOpen) {
                const svgElement = element.currentTarget.querySelector("svg");
                if (svgElement) {
                  svgElement.style.transform = "rotate(-315deg)";
                }
              }
            }}
          >
            {menuOpen ? (
              <div className={styles.plusButtonLeftBottomTriangle} />
            ) : (
              <div className={styles.plusButtonRightTopTriangle} />
            )}
            <svg
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.plusIcon}
              style={{
                transform: menuOpen ? "rotate(-135deg)" : "",
              }}
            >
              <g mask="url(#mask0_21_345)">
                <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z" />
              </g>
            </svg>
          </button>

          <div
            className={styles.menuOverlay}
            style={{
              backgroundColor: menuOpen
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(0, 0, 0, 0)",
              pointerEvents: menuOpen ? "auto" : "none",
              backdropFilter: menuOpen ? "blur(10px)" : "blur(0px)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            <div
              className={styles.menuFrame}
              style={{
                transform: menuOpen ? "" : "translateY(-100%)",
              }}
              onClick={event => event.stopPropagation()}
            >
              Menu Content
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
