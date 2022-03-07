import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PhishingEmail from "https://framer.com/m/Google-doc-6KGN.js@EVUBfIbo67022ATiDUNz";

const Phishing: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <PhishingEmail
          userEmailAddress="jane@sirius-cybernetics.com"
          userLastName="Doe"
          userFirstName="Jane"
          ceoFirstName="Theo"
          ceoLastName="Rouer"
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Phishing;
