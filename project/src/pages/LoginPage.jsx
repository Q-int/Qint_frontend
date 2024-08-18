import styled from "styled-components";
import { Inputs } from "../components/Inputs";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();

  const LoginClearClick = () => {
    navigate("/category");
  };

  const SignUpClick = () => {
    navigate("/SignUp");
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    if (email !== "" && password != "") {
      console.log(inputs);
    }
  }, [email, password]);

  return (
    <>
      <LoginBackGround>
        <LoginModal>
          <LoginContents>
            <LoginTitleAll>
              <LoginTitle>로그인</LoginTitle>
              <LoginSubTitle>사용하시려면 로그인하세요</LoginSubTitle>
            </LoginTitleAll>
            <InputAll>
              <Inputs
                type="email"
                placeholder="이메일"
                name="email"
                value={email}
                onChange={onChange}
              />
              <Inputs
                type="password"
                placeholder="비밀번호"
                name="password"
                value={password}
                onChange={onChange}
              />
            </InputAll>
          </LoginContents>
          <Button
            value1="로그인"
            value2="회원가입하러  가기"
            onClick1={LoginClearClick}
            onClick2={SignUpClick}
          ></Button>
        </LoginModal>
      </LoginBackGround>
    </>
  );
};

const LoginContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

const LoginTitleAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const InputAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
`;

const LoginTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #00eda6;
`;

const LoginSubTitle = styled.div`
  font-size: 12px;
  color: #b4b4b4;
`;

const LoginBackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgb(136, 136, 136, 0.34);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginModal = styled.div`
  background-color: #ffffff;
  width: 489.74px;
  height: 610px;
  border-radius: 10px;
  box-shadow: 0 0 30 0 rgb(115, 115, 115, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;
