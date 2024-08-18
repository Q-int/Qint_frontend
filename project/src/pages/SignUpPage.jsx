import { styled } from "styled-components";
import { Header } from "./../components/Header";
import { Inputs } from "../components/Inputs";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { PasswordRegex } from "../components/Regex";

export const SignUpPage = () => {
  const navigate = useNavigate();

  const LoginClick = () => {
    navigate("/Login");
  };

  const [inputs, setInputs] = useState({
    email: "",
    code: "",
    password1: "",
    password2: "",
  });

  const { email, code, password1, password2 } = inputs;

  const passwordCheck = () => {
    if (password1 != password2) {
      console.log("비밀번호가 다릅니다. 다시 입력하세요.");
      return false;
    }
    if (!PasswordRegex.test(inputs.password1)) {
      //비밀번호 형식이 잘못 되었을 때
      console.log("비밀번호 형식이 잘못되었습니다. 다시 입력하세요.");
      return false;
    }
    return true;
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, //value값을 [name]에 넣어준다
    });
  };

  useEffect(() => {
    if (email !== "" && code !== "" && password1 !== "" && password2 !== "") {
      //signup의 내용이 공백이 아닐 때
      if (passwordCheck()) {
        //비밀번호 형식에 맞는지 확인한다.
        console.log(inputs);
      }
    }
  }, [email, code, password1, password2]);

  return (
    <SignUpContainer>
      <Header />
      <SignUpAll>
        <SignUpTitle>회원가입</SignUpTitle>
        <SignUpContent>
          <InputsContainer>
            <Inputs
              placeholder="이메일"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <CodeContainer>
              <SendBtn>Send</SendBtn>
              <Inputs
                placeholder="인증코드"
                type="text"
                name="code"
                value={code}
                onChange={onChange}
              />
            </CodeContainer>
            <Inputs
              placeholder="비밀번호"
              type="password"
              name="password1"
              value={password1}
              onChange={onChange}
            />
            <Inputs
              placeholder="비밀번호 재입력"
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
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
