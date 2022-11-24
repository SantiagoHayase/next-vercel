// import { FC } from "react";
import Head from "next/head";
import styles from "../layouts/MainLayout.module.css";
import { Navbar } from "../Navbar";

export const MainLayout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Santiago</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
