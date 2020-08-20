import React, { FC } from "react";
import styles from "./task.module.scss";

interface Todo {
  id: string;
  title: string;
  date: string;
  favorite: boolean;
  complited: boolean;
  description: string;
}

interface Props {
  todo: Todo;
}
const NewTask: FC<Props> = () => {
  return (
    <div className={styles.container}>
      Create new task
      <div>
        <input />
      </div>
    </div>
  );
};

export { NewTask };
