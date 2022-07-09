import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { css } from "@emotion/react";
import { themeAtom } from "../../state/atoms";
import { MoonIcon, SunIcon } from "../Icons";
import Input from "../Input";

const Heading = () => {
  const [theme, setAtom] = useRecoilState(themeAtom);

  const handleToggleTheme = () => setAtom(theme === "light" ? "dark" : "light");

  return (
    <HeaderStyle>
      <HeaderContentStyle>
        <HeadingTitleStyled>
          <TitleStyled>TODO</TitleStyled>
          <ButtonStyled onClick={handleToggleTheme}>
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </ButtonStyled>
        </HeadingTitleStyled>
        <Input />
      </HeaderContentStyle>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  ${({ theme }) => theme.gradients.primaryGradient};
  background-image: ${({ theme }) => `url(${theme.images.desktop})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
  color: ${({ theme }) => theme.colors.titleColor};
  display: grid;
  place-items: center;
  @media (max-width: 375px) {
    background-image: ${({ theme }) => `url(${theme.images.mobile})`};
  }
`;

const HeadingTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

const HeaderContentStyle = styled.div`
  min-width: 34.8vw;
  margin: 0 auto;
`;

const ButtonStyled = styled.button`
  background: none;
  border: none;
`;

const TitleStyled = styled.h1`
  margin: 0;
  font-size: 2.3rem;
  letter-spacing: 1rem;
  font-weight: 700;
`;

export default Heading;
