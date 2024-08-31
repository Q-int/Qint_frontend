import { styled } from "styled-components";
import { Header } from "./../components/Header";
import { Inputs } from "../components/Inputs";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { PasswordRegex } from "../components/Regex";
import { EmailRegex } from "../components/Regex";
import { useLocation } from "react-router-dom";
import { LoginPage } from "./LoginPage";

export const SignUpPage = ({ pathname }) => {
  const navigate = useNavigate();

  //api가 맞나, 클릭했을 때 router 설정
  const signupClick = () => {
    //인증코드가 일치할 때 Login페이지로 넘어가게하기
    if (getCode === true) {
      setModal(true);
    }

    // apiCheckCode();
  };

  const loginPathClick = () => {
    setModal(true);
  };

  const [explainPswd1, setExplainPswd1] = useState("");
  const [explainPswd2, setExplainPswd2] = useState("");

  const [inputs, setInputs] = useState({
    email: "",
    code: "",
    password1: "",
    password2: "",
  });

  const { email, code, password1, password2 } = inputs;

  //비밀번호 형식 확인 및 pswd explain
  //비밀번호 두개가 맞는 지 확인 후 pswd Explain으로 내용 보내기
  const [getPswd, setGetPswd] = useState(false);

  const passwordCheck = () => {
    if (password1 != password2) {
      setExplainPswd2("비밀번호가 다릅니다. 다시 입력하세요.");
      setGetPswd(false);
      return false;
    } else {
      setExplainPswd2("비밀번호가 일치합니다.");
      setGetPswd(true);
    }
    if (!PasswordRegex.test(inputs.password1)) {
      //비밀번호 형식이 잘못 되었을 때
      setExplainPswd1(
        "영어, 숫자, 특수기호를 모두 한 개 이상 포함한 8~64 문자 사이의 비밀번호"
      );
      setGetPswd(false);
      return false;
    } else {
      setExplainPswd1("비밀번호 형식이 맞습니다.");
      setGetPswd(true);
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

  //객체에 회원가입 내용 보내기
  useEffect(() => {
    if (email !== "" && code !== "" && password1 !== "" && password2 !== "") {
      //signup의 내용이 공백이 아닐 때
      if (passwordCheck()) {
        //비밀번호 형식에 맞는지 확인한다.
        console.log(inputs);
      }
    }
  }, [email, code, password1, password2]);

  // 아래 내용은 Email style, api에 대한 내용입니다.
  const [getUnion, setGetUnion] = useState(false);

  const [explainEmail, setExplainEmail] = useState("");
  const [emailColor, setEmailColor] = useState(false);

  const emailCheck = (e) => {
    //이메일 형식이 잘못되었을 때
    if (!EmailRegex.test(inputs.email)) {
      setExplainEmail("이메일 형식이 일치하지 않습니다.");
      setEmailColor(false);
    } else {
      setExplainEmail("이메일 형식이 맞습니다.");
      setEmailColor(true);
    }
    return true;
  };

  //이메일 형식이 맞는지 아닌지 확인하기
  const sendBtnClick = () => {
    //Email Api 보내기
    setGetUnion(true);
  };

  //Email Explain 내용입니다. API 확인하고 중복이 있는지 확인한다.
  useEffect(() => {
    setExplainEmail(
      getUnion ? "사용 가능한 이메일입니다." : "중복된 이메일입니다."
    );
  }, [getUnion]);

  const [getCode, setGetCode] = useState(false);
  const [explainCode, setExplainCode] = useState("");

  //인증코드가 맞는지 아닌지 받아오기
  const sendObject = () => {
    setGetCode(true);
  };

  const codeCheck = () => {
    // sendObject();
    setGetCode(true);
    // setExplainCode(
    //   getCode ? "인증코드가 일치합니다." : "인증코드가 일치하지 않습니다."
    // );
  };

  const [modal, setModal] = useState(false);

  return (
    <>
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
                pathname={"/SignUp"}
                getUnion={getUnion}
                value3={explainEmail}
                onBlur={emailCheck}
                // borderColor={borderColor}
                emailColor={emailColor}
              />
              <CodeContainer>
                <SendBtn onClick={sendBtnClick}>Send</SendBtn>
                <Inputs
                  onBlur={codeCheck}
                  placeholder="인증코드"
                  type="text"
                  name="code"
                  value={code}
                  pathname={"/SignUp"}
                  onChange={onChange}
                  getCode={getCode}
                  value3={
                    getCode
                      ? "인증코드가 일치합니다."
                      : "인증코드가 일치하지 않습니다."
                  }
                  // borderColor={borderColor}
                />
              </CodeContainer>
              <Inputs
                placeholder="비밀번호"
                type="password"
                name="password1"
                value={password1}
                pathname={"/SignUp"}
                onChange={onChange}
                value3={explainPswd1}
                getPswd={getPswd}
                // borderColor={borderColor}
              />
              <Inputs
                placeholder="비밀번호 재입력"
                type="password"
                name="password2"
                value={password2}
                pathname={"/SignUp"}
                onChange={onChange}
                value3={explainPswd2}
                getPswd={getPswd}
                // borderColor={borderColor}
              />
            </InputsContainer>
            <Button
              value1="회원가입"
              value2="로그인하러 가기"
              onClick1={signupClick}
              onClick2={loginPathClick}
            />
            {modal && (
              <ModalOverlay onClick={signupClick}>
                <LoginPage />
              </ModalOverlay>
            )}
          </SignUpContent>
        </SignUpAll>
      </SignUpContainer>
    </>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100vw;
  height: calc(100vh - 8.9vh);
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
