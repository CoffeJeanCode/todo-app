import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { todosAtom } from "../../state/atoms";
import { createID } from "../../utils/createId";

const Input = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const [todos, setTodos] = useRecoilState(todosAtom);

  const handleAddTodo = (evt) => {
    evt.preventDefault();

    const newTodo = {
      id: createID(),
      title,
      completed,
    };

    setTodos([...todos, newTodo]);

    setTitle("");
    setCompleted(false);
  };

  return (
    <InputContainerStyled onSubmit={handleAddTodo}>
      <InputCheckBoxStyled
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <InputStyled
        type="text"
        autoComplete="off"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
    </InputContainerStyled>
  );
};

const InputCheckBoxStyled = styled.input`
  border: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  margin: 0;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: ${({ theme }) => `0.1rem solid ${theme.colors.auxialiary}`};
  border-radius: 50%;
  padding: 0.8rem;
  transform: translateY(-0.075em);
  &:checked {
    background: ${({ theme }) => theme.gradients.primaryGradient};
  }
`;

const InputContainerStyled = styled.form`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  border-radius: 5px;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.fontColor};
  border: none;
  &:active,
  &:focus {
    outline: none;
  }
`;

export default Input;
