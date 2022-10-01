import { ReactElement } from "react";
import Image from "next/image";

import styles from "./Benefits.module.css";

import Star from "../../assets/stars.svg";

export const Benefits = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        All your sports discussions at one place
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.referralCard}>
          <div className={styles.cardHeader}>Referral rewards</div>
          <div className={styles.referralSubHeader}>
            Refer friends to receive bi-weekly rewards
          </div>
        </div>
        <div className={styles.rewardsCard}>
          <div className={styles.cardHeader}>
            Use the platform & win rewards
          </div>
          <div className={styles.referralSubHeader}>
            Take part in various platform events during live matches to be
            eligible to win weekly prizes.
          </div>
        </div>
      </div>

      <div className={styles.star}>
        <Image src={Star} alt="star image" />
      </div>
    </div>
  );
};
