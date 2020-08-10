import React, { FC } from "react";
import styles from "./todoitem.module.scss";
import { CheckIcon, FavoriteItem, Trash } from "../../icons";

interface Todo {
  title: string;
  date: string;
  favorite: boolean;
  complited: boolean;
  description: string;
}

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  return (
    <li className={styles.todo}>
      <div className={styles.header}>
        <div className={styles.titleWrap}>
          <CheckIcon className={styles.check} />
          <h3 className={styles.title}>{todo.title}</h3>
        </div>
        <span>{todo.date}</span>
      </div>
      <div className={styles.footer}>
        <span>View details</span>
        <div className={styles.actions}>
          <FavoriteItem className={styles.favorite} />
          |
          <Trash className={styles.trash} />
        </div>
      </div>
    </li>
  );
};

export { TodoItem };
