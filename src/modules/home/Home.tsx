import React, { FC } from "react";
import styles from "./home.module.scss";
import { Search, TodoList } from "../../components";

interface Todo {
  title: string;
  date: string;
  favorite: boolean;
  complited: boolean;
  description: string;
}

const testTodos: Todo[] = [
  {
    title: "Task 1",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
  {
    title: "Task 2",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
  {
    title: "Task 3",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
  {
    title: "Task 4",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
  {
    title: "Task 5",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
  {
    title: "Task 6",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
  {
    title: "Task 7",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
  {
    title: "Task 8",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
  {
    title: "Task 9",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
  {
    title: "Task 10",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
  {
    title: "Task 11",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
  {
    title: "Task 12",
    date: "3rd Feb",
    favorite: false,
    complited: false,
    description:
      "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
  },
];

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Search />
        <TodoList todos={testTodos} />
      </div>
    </div>
  );
};

export { Home };
