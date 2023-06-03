import React from "react";
import styles from "./styles.module.scss";

interface ModalI {
  action: () => void;
  text: string;
}

const Modal = (props: ModalI) => {
  const { action, text } = props;
  return (
    <div className={styles.main}>
        <div onClick={() => action()} className={styles._background}>

        </div>
      <div className={styles._wrapper}>
        <h3>{text}</h3>
        <h3  onClick={() => action()} className={styles.__button}>
          Confirm
        </h3>
      </div>
    </div>
  );
};

export default Modal;
