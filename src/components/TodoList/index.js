import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todosAtom } from "../../state/atoms";
import { todoStatsSelector } from "../../state/selectors";
import { Filter } from "../Filter";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const { todosFiltered } = useRecoilValue(todoStatsSelector);

  const handleRemoveTodo = (id) => () =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const handleToggleTodo = (id) => () => {
    const toggledTodo = todos.map((todo) => ({
      ...todo,
      completed: todo.id === id ? !todo.completed : todo.completed,
    }));

    setTodos(toggledTodo);
  };

  return (
    <div>
      <ul>
        {todosFiltered.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggleTodo(todo.id)}
              id={`check-${todo.id}`}
              name={`check-${todo.id}`}
            />
            <label htmlFor={`check-${todo.id}`}>{todo.title}</label>
            <button onClick={handleRemoveTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      <Filter />
    </div>
  );
};

export default TodoList;
