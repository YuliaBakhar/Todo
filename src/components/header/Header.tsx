import React, { FC } from "react";
import { Logo, Favorite } from "../../icons";
import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <Logo className={styles.logoIcon} />
        <h1 className={styles.title}>Todo</h1>
      </div>
      <Favorite className={styles.favoriteIcon} />
    </header>
  );
};

export { Header };
