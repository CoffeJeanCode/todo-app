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
    <div>
      <form onSubmit={handleAddTodo}>
        <input
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
      </form>
    </div>
  );
};

const InputStyled = styled.input`
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

export default Input;
