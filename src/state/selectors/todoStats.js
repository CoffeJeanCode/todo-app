import { selector } from "recoil";
import { todosAtom, typeAtom } from "../atoms";

export const todoStatsSelector = selector({
  key: "todoStats",
  get: ({ get }) => {
    const typeFilter = get(typeAtom);
    const todoList = get(todosAtom);

    const todosFiltered = {
      all: todoList,
      active: todoList.filter((todo) => !todo.completed),
      completed: todoList.filter((todo) => todo.completed),
    };

    const itemsLeft = todosFiltered.all.length - todosFiltered.completed.length;

    return { todosFiltered: todosFiltered[typeFilter], stats: { itemsLeft } };
  },
});
