import { ReactElement } from "react";

import styles from "./Card.module.css";

export const Card = ({
  header,
  subHeader,
}: {
  header: string;
  subHeader: string;
}): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.header}>{header}</div>
      <div className={styles.subHeader}>{subHeader}</div>
    </div>
  );
};
