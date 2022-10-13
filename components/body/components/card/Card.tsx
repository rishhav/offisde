import { ReactElement } from "react";
import Image from "next/image";

import styles from "./Card.module.css";

import Chat from "./assets/chat.svg";
import Conversation from "./assets/conversation.svg";
import Thumb from "./assets/thumb.svg";

const CARD_ID_TO_IMAGE_MAP = {
  CHAT: Chat,
  CONVERSATION: Conversation,
  THUMB: Thumb,
};

export const Card = ({
  id,
  header,
  subHeader,
}: {
  id: string;
  header: string;
  subHeader: string;
}): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={CARD_ID_TO_IMAGE_MAP[id]} alt={header} />
      </div>
      <div className={styles.header}>{header}</div>
      <div className={styles.subHeader}>{subHeader}</div>
    </div>
  );
};
