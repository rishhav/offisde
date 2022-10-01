import { ReactElement } from "react";

import styles from "./TestimonyCard.module.css";

export const TestimonyCard = ({
  name,
  testimony,
}: {
  name: string;
  testimony: string;
}): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.testimonyImage}></div>
      <div className={styles.testimonyName}>{name}</div>
      <div className={styles.testimony}>{testimony}</div>
    </div>
  );
};
