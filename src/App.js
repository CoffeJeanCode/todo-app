import { css, Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { normalize } from "polished";
import React from "react";
import { useRecoilValue } from "recoil";
import Heading from "./components/Heading";
import TodoList from "./components/TodoList";
import { themeAtom } from "./state/atoms";
import { darkTheme, ligthTheme } from "./theme";

const App = () => {
  const theme = useRecoilValue(themeAtom);
  return (
    <ThemeProvider theme={theme === "light" ? ligthTheme : darkTheme}>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");
          ${normalize()}
          :root {
            font-size: 18px;
            font-family: "Josefin Sans", sans-serif;
          }
        `}
      />
      <ContainerStyled>
        <Heading />
        <TodoList />
      </ContainerStyled>
    </ThemeProvider>
  );
};

const ContainerStyled = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`;

export default App;
