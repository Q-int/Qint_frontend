import styled from "styled-components";
import { useLocation } from "react-router-dom";

export const Header = ({path}) => {
  return (
    <Container>
      <Logo></Logo>
      <Buttons>
        <Mypagebtn>마이페이지</Mypagebtn>
        <Loginbtn>로그인</Loginbtn>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(191, 191, 191, 0.25);
  background-color: #ffff;
`;

const Logo = styled.img.attrs({
  src: "/images/Q-int.svg",
  alt: "로고",
})`
  height: 22px;
  margin-left: 40px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  background-color: transparent;
`;

const Mypagebtn = styled.h1`
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const Loginbtn = styled.button`
  width: 114px;
  height: 36px;
  background: #00eda6;
  box-shadow: 0px 4px 4px rgba(158, 158, 158, 0.25);
  border: none;
  font-size: 14px;
  border-radius: 5px;
  margin-right: 150px;
  cursor: pointer;

  &:focus {
    border: none;
    outline: none;
  }
`;
