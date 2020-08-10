import React, { FC } from "react";
import styles from "./footer.module.scss";
import { Plus } from "../../icons";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <button className={styles.addButton}>
        <Plus className={styles.plus} />
      </button>
    </footer>
  );
};

export { Footer };
