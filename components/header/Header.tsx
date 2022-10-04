// libs
import { ReactElement } from "react";

// styles
import styles from "./Header.module.css";

export const Header = () => (
  <div className={styles.container}>
    <div className={styles.title}>Launching Soon</div>
  </div>
);

export async function getServerSideProps({}) {
  return { props: {} };
}
