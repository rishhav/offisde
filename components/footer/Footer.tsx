import { ReactElement } from "react";
import Image from "next/image";

import styles from "./Footer.module.css";

import Email from "./assets/mail.svg";
import Whatsapp from "./assets/whatsapp.svg";

export const Footer = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.contactHeader}>Contact us</div>
        {/* <div className={styles.contactDetails}>
          <div
            style={{ marginTop: "auto", marginBottom: "auto" }}
            className={styles.ContactChannel}
          >
            <div className={styles.emailIcon}>
              <Image src={Email} alt="Email" />
            </div>
            <div className={styles.ContactChannelDetails}>
              <div className={styles.ContactChannelHeader}>Email Address</div>
              <div className={styles.ContactChannelContent}>
                info@offside.com
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: "auto", marginBottom: "auto" }}
            className={styles.ContactChannel}
          >
            <div className={styles.whatsappIcon}>
              <Image src={Whatsapp} alt="whatsapp" />
            </div>
            <div className={styles.ContactChannelDetails}>
              <div className={styles.ContactChannelHeader}>Phone Number</div>
              <div className={styles.ContactChannelContent}>+91-8826060074</div>
            </div>
          </div>
        </div> */}
      </div>
      <div className={styles.logos}></div>
    </div>
  );
};
