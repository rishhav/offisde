// libs
import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import { Feature } from "./components/feature/Feature";
import { Benefits } from "./components/benefits/Benefits";
import { Testimonial } from "./components/testimonial/Testimonial";

// styles
import styles from "./Body.module.css";

// svg
import Phone1 from "./assets/phone1.svg";
import Phone2 from "./assets/phone2.svg";
import AppStore from "./assets/AppStore.svg";
import GooglePlay from "./assets/GooglePlay.svg";
import Star from "./assets/stars.svg";

export const Body = (): ReactElement => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.brand}>
        <div className={styles.brandName}>Offside</div>
        <div className={styles.brandDesc}>
          Get offside & enjoy live matches with your friends like never before
        </div>
        <div className={styles.downloadOptions}>
          <Link href="">
            <a style={{ marginRight: 20, marginTop: 4 }}>
              <Image src={AppStore} alt="AppStore" width={170} />
            </a>
          </Link>
          <Link href="">
            <Image src={GooglePlay} alt="GooglePlay" width={170} />
          </Link>
        </div>
        <div className={styles.starIcon}>
          <Image src={Star} alt="header_star" width={150} />
        </div>
      </div>
      <div className={styles.logo}>
        <div className={styles.image1}>
          <Image src={Phone2} alt="Phone logo 1" />
        </div>
        <div className={styles.image2}>
          <Image src={Phone1} alt="Phone logo 2" />
        </div>
      </div>
    </div>
    <Feature />
    <Benefits />
    <Testimonial />
  </div>
);

export async function getServerSideProps({}) {
  return { props: {} };
}
