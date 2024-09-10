import styled from "styled-components";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Main = () => {
  const navigate = useNavigate();

  const startbtnHandle = () => {
    navigate("/category");
  };

  const imgSlideClick = () => {
    navigate("/description");
  };

  return (
    <Container>
      <Header />
      <Headimg onClick={imgSlideClick}></Headimg>
      <Mainbox>
        <Box1>
          <Logobox>
            <Logo1></Logo1>
            <Logo2></Logo2>
          </Logobox>
          <Text>
            기술 면접 대비 문제 풀어보고,
            <br />
            개발자 기술 면접 준비하기!
          </Text>
        </Box1>
        <Startbtn onClick={startbtnHandle}>시작하기</Startbtn>
      </Mainbox>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Headimg = styled.img.attrs({
  src: "/images/headerimg.jpg",
  alt: "이미지",
})`
  width: 100vw;
`;
const Logobox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7vw;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Mainbox = styled.div`
  box-sizing: border-box;
  height: 72.8vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const Logo1 = styled.img.attrs({
  src: "/images/Q-int.svg",
  alt: "로고",
})`
  height: 11vh;
`;

const Logo2 = styled.img.attrs({
  src: "/images/Quick interview.svg",
  alt: "Quick interview",
})`
  height: 4.6vh;
`;

const Text = styled.p`
  font-size: 4.5vh;
  text-align: left;
  font-weight: 800;
`;

const Startbtn = styled.button`
  width: 23vw;
  height: 8.3vh;
  border: none;
  background: #00eda6;
  box-shadow: 0px 1vh 1vh rgba(158, 158, 158, 0.25);
  border-radius: 10vw;
  font-size: 3vh;
  cursor: pointer;
  margin-top: 50.7vh;
  margin-right: 8.5vw;

  &:focus {
    border: none;
    outline: none;
  }
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4vh;
  margin-top: 9.6vh;
  margin-left: 6.5vw;
`;
