import { ReactElement } from "react";

import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header";
import { Body } from "../components/body";
import { Footer } from "../components/footer";

import styles from "../styles/Home.module.css";

const Home = (): ReactElement => (
  <div>
    <Head>
      <title>Offside</title>
      <meta name="Offside" content="For sports fan, created by sports fan." />
    </Head>

    <div className={styles.container}>
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
);

export default Home;
