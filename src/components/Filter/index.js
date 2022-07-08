import React from "react";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { todosAtom, typeAtom } from "../../state/atoms";
import { todoStatsSelector } from "../../state/selectors";

export const Filter = () => {
  const { todosFiltered, stats } = useRecoilValue(todoStatsSelector);
  const [todos, setTodos] = useRecoilState(todosAtom);
  const setType = useSetRecoilState(typeAtom);

  const handleFilter = (type) => () => setType(type);

  const handleClearCompleted = () => {
    const todoUncompleted = todos.filter((todo) => !todo.completed);
    setTodos(todoUncompleted);
  };

  return (
    <div>
      <div>
        <span> {stats.itemsLeft}items left</span>
      </div>
      <div>
        <button onClick={handleFilter("all")}>All</button>
        <button onClick={handleFilter("active")}>Active</button>
        <button onClick={handleFilter("completed")}>Completed</button>
      </div>
      <div>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};
