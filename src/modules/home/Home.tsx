import React, { FC } from "react";
import { Search } from "../../components/search";
import styles from "./home.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Search />
    </div>
  );
};

export { Home };
