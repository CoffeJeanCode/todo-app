import React from "react";
import { useRecoilState } from "recoil";
import { themeAtom } from "../../state/atoms";
import Input from "../Input";

const Heading = () => {
  const [theme, setAtom] = useRecoilState(themeAtom);

  const handleToggleTheme = () => setAtom(theme === "light" ? "dark" : "light");

  return (
    <header>
      TODO
      <Input />
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Heading;
