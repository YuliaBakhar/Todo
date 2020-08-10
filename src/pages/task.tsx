import React, { FC } from "react";
import { Task } from "../modules/task";

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

const TaskPage: FC<Props> = ({ todo }) => {
  return <Task todo={todo} />;
};

export default TaskPage;
