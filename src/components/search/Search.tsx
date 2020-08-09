import React, { FC } from "react";
import { SearchIcon } from "../../icons";
import styles from "./search.module.scss";

const Search: FC = () => {
  return (
    <div className={styles.container}>
      <input placeholder="Search" />
      <SearchIcon className={styles.icon} />
    </div>
  );
};

export { Search };
