import { ReactElement } from "react";
import Image from "next/image";

import styles from "./Footer.module.css";

import Email from "./assets/mail.svg";
import Whatsapp from "./assets/whatsapp.svg";
import Cricket from "./assets/Cricket.svg";
import Tennis from "./assets/Tennis.svg";
import BasketBall from "./assets/BasketBall.svg";

export const Footer = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.contactHeader}>Contact us</div>
        <div className={styles.contactDetails}>
          <a
            style={{ marginTop: "auto", marginBottom: "auto" }}
            className={styles.ContactEmailChannel}
            href="mailto:info@offside.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.emailIcon}>
              <Image src={Email} alt="Email" />
            </div>
            <div className={styles.ContactChannelDetails}>
              <div className={styles.ContactChannelHeader}>Email Address</div>
              <div className={styles.ContactChannelContent}>
                info@offside.club
              </div>
            </div>
          </a>
          <a
            style={{ marginTop: "auto", marginBottom: "auto" }}
            className={styles.ContactWhatsappChannel}
            href="https://wa.me/918826060074"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.whatsappIcon}>
              <Image src={Whatsapp} alt="whatsapp" />
            </div>
            <div className={styles.ContactChannelDetails}>
              <div className={styles.ContactChannelHeader}>Phone Number</div>
              <div className={styles.ContactChannelContent}>+91-8826060074</div>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.logos}>
        <div className={styles.logos_row}>
          <div className={styles.logos_row_item}>
            <Image src={Tennis} alt="tennis logo" />
          </div>
          <div className={styles.logos_row_item}>
            <Image src={Cricket} alt="cricket logo" />
          </div>
        </div>
        <div className={styles.logos_row}>
          <div className={styles.logos_row_item}>
            <Image src={BasketBall} alt="basketball" />
          </div>
        </div>
        <div className={styles.logoFooter}>Launching Soon</div>
      </div>
    </div>
  );
};
