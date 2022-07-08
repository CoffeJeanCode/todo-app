import { ThemeProvider } from "@emotion/react";
import React from "react";
import { useRecoilValue } from "recoil";
import Heading from "./components/Heading";
import TodoList from "./components/TodoList";
import { themeAtom } from "./state/atoms";
import { Global, css } from "@emotion/react";
import { normalize } from "polished";

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
      <Heading />
      <TodoList />
    </ThemeProvider>
  );
};

const darkTheme = {
  colors: {
    primaryColor: "hsl(235, 21%, 11%)",
    fontColor: "hsl(236, 33%, 92%)",
  },
};

const ligthTheme = {
  colors: {
    primaryColor: "hsl(0, 0%, 98%)",
    fontColor: "hsl(236, 33%, 92%)",
  },
};

export default App;
