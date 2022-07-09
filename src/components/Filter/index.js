import styled from "@emotion/styled";
import React from "react";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { todosAtom, typeAtom } from "../../state/atoms";
import { todoStatsSelector } from "../../state/selectors";

export const Filter = () => {
  const { todosFiltered, stats } = useRecoilValue(todoStatsSelector);
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [type, setType] = useRecoilState(typeAtom);

  const handleFilter = (type) => () => setType(type);

  const handleClearCompleted = () => {
    const todoUncompleted = todos.filter((todo) => !todo.completed);
    setTodos(todoUncompleted);
  };

  return (
    <FilterContainerStyled type={type}>
      <ItemLeftStyled>
        <span>{stats.itemsLeft}</span>
        <span>items left</span>
      </ItemLeftStyled>
      <FilterStyled>
        <button onClick={handleFilter("all")}>All</button>
        <button onClick={handleFilter("active")}>Active</button>
        <button onClick={handleFilter("completed")}>Completed</button>
      </FilterStyled>
      <div>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </FilterContainerStyled>
  );
};

const FilterContainerStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.auxialiary4};
    &:focus {
      color: ${({ theme }) => theme.colors.primaryColor};
    }
    &:hover {
      color: ${({ theme }) => theme.colors.auxialiary3};
    }
  }
  @media (max-width: 375px) {
    justify-content: space-between;
    padding: 1rem;
  }
`;
const FilterStyled = styled.div`
  @media (max-width: 375px) {
    order: 2;
    position: absolute;
    border-radius: 5px;
    padding: 1rem;
    left: 0;
    right: 0;
    text-align: center;
    bottom: -150%;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

const ItemLeftStyled = styled.div`
  color: ${({ theme }) => theme.colors.auxialiary4};
  font-size: 0.9rem;
  display: flex;
  column-gap: 0.5rem;
`;
