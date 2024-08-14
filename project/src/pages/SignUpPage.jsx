import { styled } from "styled-components";
import { Header } from "./../components/Header";
import { Inputs } from "../components/Inputs";
import { useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const [password, setPassword] = useState({
    password1: "",
    password2: "",
  });

  const navigate = useNavigate();

  const LoginClick = () => {
    navigate("/Login");
  };

  return (
    <SignUpContainer>
      <Header />
      <SignUpAll>
        <SignUpTitle>회원가입</SignUpTitle>
        <SignUpContent>
          <InputsContainer>
            <Inputs placeholder="이메일" type="email" />
            <CodeContainer>
              <SendBtn>Send</SendBtn>
              <Inputs placeholder="인증코드" type="text" />
            </CodeContainer>
            <Inputs
              placeholder="비밀번호"
              type="password"
              name="password1"
              value="password1"
              setPassword={setPassword}
            />
            <Inputs
              placeholder="비밀번호 재입력"
              type="password"
              name="password2"
              value="password2"
              setPassword={setPassword}
            />
          </InputsContainer>
          <Button
            value1="회원가입"
            value2="로그인하러 가기"
            onClick1={LoginClick}
            onClick2={LoginClick}
          />
        </SignUpContent>
      </SignUpAll>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const SignUpAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  height: 100%;
`;

const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 67px;
`;

const SignUpTitle = styled.h1`
  color: #00eda6;
  font-size: 35px;
`;

const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 16px;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 398px;
  height: 400px;
`;

const SendBtn = styled.button`
  cursor: pointer;
  width: 66px;
  height: 32px;
  border-radius: 5px;
  border: none;
  background-color: #00eda6;
  color: #ffffffff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
