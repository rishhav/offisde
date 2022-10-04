import { ReactElement } from "react";
import Image from "next/image";

import { Card } from "../card";

import styles from "./Feature.module.css";
import Star from "./assets/stars.svg";

import { CARDS } from "../card/mockFeatureCards";

export const Feature = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        For sports fans, created by sports fans
      </div>
      <div className={styles.featureCardsContainer}>
        {CARDS.map((card) => (
          <Card key={card.id} header={card.header} subHeader={card.subHeader} />
        ))}
      </div>
      <div className={styles.star}>
        <Image src={Star} alt="feature sparkle icon" />
      </div>
    </div>
  );
};
