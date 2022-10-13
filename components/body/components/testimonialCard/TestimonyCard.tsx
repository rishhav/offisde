import { ReactElement } from "react";
import Image from "next/image";

import styles from "./TestimonyCard.module.css";

export const TestimonyCard = ({
  id,
  name,
  testimony,
}: {
  id: string;
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
