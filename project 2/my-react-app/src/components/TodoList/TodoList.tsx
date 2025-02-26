import React, { FC } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Todo } from "../../types";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
