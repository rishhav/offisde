import { ReactElement } from "react";
import Image from "next/image";

import { TestimonyCard } from "../testimonialCard/TestimonyCard";

import styles from "./Testimonial.module.css";

import Star from "./assets/star.svg";

import { CARDS } from "../testimonialCard/mockTestimony";

export const Testimonial = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerText}>Testimonials</div>
      </div>
      <div className={styles.testimonyContainer}>
        {CARDS.map(({ id, name, testimony }) => (
          <TestimonyCard key={id} name={name} testimony={testimony} />
        ))}
      </div>

      <div className={styles.star}>
        <Image src={Star} alt="star image" />
      </div>
    </div>
  );
};
