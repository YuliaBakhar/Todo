import React, { FC } from "react";
import { TodoItem } from "../todoitem";
import styles from "./todolist.module.scss";

interface Todo {
  title: string;
  date: string;
  favorite: boolean;
  complited: boolean;
  description: string;
}

interface Props {
  todos: Todo[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
};

export { TodoList };
