import React, { FC } from "react";
import styles from "./task.module.scss";
import { CheckIcon, FavoriteItem, Trash, Date } from "../../icons";

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
const Task: FC<Props> = ({ todo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>{todo.title}</p>
        <div className={styles.dateWrap}>
          <Date className={styles.dateIcon} />
          <p className={styles.date}>{`${todo.date}  `}</p>-
          <p className={styles.time}> 6 pm</p>
        </div>
        <p className={styles.description}>{todo.description}</p>
        <div className={styles.actions}>
          <div className={styles.complited}>
            <CheckIcon className={styles.check} />
            <span>{todo.complited ? "completed" : "not complited yet"}</span>
          </div>
          <FavoriteItem className={styles.favorite} />
        </div>
      </div>
      <button className={styles.deleteButton}>
        <Trash className={styles.trash} />
        <span>Delete</span>
      </button>
    </div>
  );
};

export { Task };
