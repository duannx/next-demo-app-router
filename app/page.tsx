"use client";

import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import WashingMachingImage from "@/assets/images/PSEEWM210PA0004D.avif";
// import BeachImage from "@/assets/images/beach.avif";

const LazyComponent = dynamic(() => import("@/components/LazyComponent"));
const LazyOnClickComponent = dynamic(
  () => import("@/components/LazyOnClickComponent")
);

export default function Home() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div className={styles.page}>
        <main className={styles.main}>
          <LazyComponent></LazyComponent>
          <button onClick={() => setIsShow(true)}>
            {" "}
            Show Lazy loaded component
          </button>
          {isShow && <LazyOnClickComponent></LazyOnClickComponent>}
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Get started by editing <code>app/page.tsx</code>.
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
        </main>
      </div>
      <div className={styles.grid}>
        <div className={styles.big_image}>
          <Image alt="Big Image" src={WashingMachingImage} sizes="75vw" placeholder="blur"></Image>
        </div>
        <div className={styles.small_image}>
          <Image alt="Big Image" src={WashingMachingImage} sizes="25vw" placeholder="blur"></Image>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.big_image}>
          <Image alt="Big Image" src="https://www.electrolux.it/services/eml/asset/597e9c7e-5aca-4693-aca5-9ad0927007ea/E4RM3Q/PSEEOV230PA0001L/WS_PN/PSEEOV230PA0001L.png" width={500} height={500} sizes="75vw"></Image>
        </div>
        <div className={styles.small_image}>
          <Image alt="Big Image" src="https://www.electrolux.it/services/eml/asset/597e9c7e-5aca-4693-aca5-9ad0927007ea/E4RM3Q/PSEEOV230PA0001L/WS_PN/PSEEOV230PA0001L.png" width={500} height={500} sizes="25vw"></Image>
        </div>
      </div>
    </div>
  );
}
