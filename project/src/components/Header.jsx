import styled, { css } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { useState } from "react";

export const Header = () => {
  const [modal, setModal] = useState(false);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const MyPageClick = () => {
    navigate("/mypage");
  };

  const LogoClick = () => {
    navigate("/");
  };

  const LoginClick = () => {
    setModal("true");
  };

  // if (modal == "true") {
  // }

  return (
    <Container>
      <Logo onClick={LogoClick}></Logo>
      <Buttons>
        <Mypagebtn pathname={pathname} onClick={MyPageClick}>
          마이페이지
        </Mypagebtn>
        <Loginbtn onClick={LoginClick}>로그인</Loginbtn>
      </Buttons>
      {modal && (
        <ModalOverlay onClick={LoginClick}>
          <LoginPage />
        </ModalOverlay>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 8.9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1vh 1vh rgba(191, 191, 191, 0.25);
  background-color: #ffff;
`;

const Logo = styled.img.attrs({
  src: "/images/Q-int.svg",
  alt: "로고",
})`
  cursor: pointer;
  height: 3vh;
  margin-left: 2.6vw;
`;
const Buttons = styled.div`
  display: flex;
  gap: 2.6vw;
  align-items: center;
  background-color: transparent;
`;

const Mypagebtn = styled.div`
  background-color: transparent;
  font-size: 1.9vh;
  font-weight: 400;
  cursor: pointer;
  ${({ pathname }) =>
    pathname.includes("mypage")
      ? css`
          color: #00eda6;
          font-weight: 700;
        `
      : css`
          color: #000000;
          font-weight: 400;
        `}
`;

const Loginbtn = styled.button`
  width: 7.5vw;
  height: 4.8vh;
  background: #00eda6;
  box-shadow: 0px 4px 4px rgba(158, 158, 158, 0.25);
  border: none;
  font-size: 1.9vh;
  border-radius: 0.5vh;
  margin-right: 9.8vw;
  cursor: pointer;

  &:focus {
    border: none;
    outline: none;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
