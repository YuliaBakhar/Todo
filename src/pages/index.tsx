import React, { FC } from "react";
import TaskPage from "./task";

const testTodo = {
  id: "1",
  title: "Task 1",
  date: "3rd Feb",
  favorite: false,
  complited: false,
  description:
    "The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder.",
};

const HomePage: FC = () => {
  return (
    // <Layout>
    //   <Home />

    <TaskPage todo={testTodo} />
  );
};

export default HomePage;
