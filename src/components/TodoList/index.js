import styled from "@emotion/styled";
import { position } from "polished";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todosAtom } from "../../state/atoms";
import { todoStatsSelector } from "../../state/selectors";
import { Filter } from "../Filter";
import { CheckIcon, CrossIcon } from "../Icons";

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
    <TodoListContainerStyled>
      <TodoListStyled>
        {!todosFiltered.length && (
          <NoTodosTitleStyled>No there todos</NoTodosTitleStyled>
        )}
        {todosFiltered.map((todo) => (
          <TodoItemStyled key={todo.id}>
            <div style={{ ...position("relative") }}>
              <TodoItemCheckBoxContainerStyled>
                <TodoItemCheckBoxStyled
                  type="checkbox"
                  checked={todo.completed}
                  onChange={handleToggleTodo(todo.id)}
                  id={`check-${todo.id}`}
                  name={`check-${todo.id}`}
                />
                {todo.completed && <CheckIconStyled />}
              </TodoItemCheckBoxContainerStyled>
              <TodoItemTitleStyled htmlFor={`check-${todo.id}`}>
                {todo.title}
              </TodoItemTitleStyled>
            </div>
            <TodoItemButtonStyled onClick={handleRemoveTodo(todo.id)}>
              <CrossIcon />
            </TodoItemButtonStyled>
          </TodoItemStyled>
        ))}
      </TodoListStyled>
      <Filter />
    </TodoListContainerStyled>
  );
};

const TodoListContainerStyled = styled.section`
  max-width: 70vh;
  min-height: 16rem;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  box-shadow: 0 33px 50px -15px rgba(0, 0, 0, 0.2);

  border-radius: 5px;
  padding: 0 0 1rem 0;
  transform: translateY(-30px);
  overflow: hidden;
`;

const NoTodosTitleStyled = styled.h2`
  color: ${({ theme }) => theme.colors.auxialiary4};
  text-align: center;
  margin-top: 3rem;
`;
const TodoItemCheckBoxContainerStyled = styled.div``;

const TodoItemCheckBoxStyled = styled.input`
  border: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  margin: 0;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: ${({ theme }) => `0.1rem solid ${theme.colors.auxialiary1}`};
  border-radius: 50%;
  padding: 0.8rem;
  transform: translateY(-0.075em);
  &:checked {
    background: ${({ theme }) => theme.gradients.primaryGradient};
  }
`;

const CheckIconStyled = styled(CheckIcon)`
  position: absolute;
  top: 35%;
  left: 0.6rem;
  width: 0.7rem;
  height: 0.7rem;
`;

const TodoListStyled = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 2.5rem;
`;

const TodoItemStyled = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.colors.auxialiary1}`};
  color: ${({ theme }) => theme.colors.auxialiary3};
  &:first-of-type {
    border-top: ${({ theme }) => `0.1rem solid ${theme.colors.auxialiary1}`};
  }
  div {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  button {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  &:hover {
    button {
      opacity: 1;
    }
  }
`;

const TodoItemTitleStyled = styled.label`
  line-height: 30px;
`;
const TodoItemButtonStyled = styled.button`
  border: none;
  background: none;
`;
export default TodoList;
