import { styled } from 'styled-components';
import { Header } from './../components/Header';
import { Input } from '../components/Input';
import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { PasswordRegex } from '../components/Regex';
import { EmailRegex } from '../components/Regex';
import { LoginPage } from './LoginPage';
import { apiEmail } from '../apis/apiEmail';
import { instance } from '../apis/instance';
import { apiCodeSend } from '../apis/apiCodeSend';
import { apiCodeCheck } from '../apis/apiCodeCheck';
import { apiSignUp } from '../apis/apiSignUp';

export const SignUpPage = () => {
  //api가 맞나, 클릭했을 때 router 설정
  const signupClick = async () => {
    apiSignUp({ email, password: password1, setModal });
  };

  const loginPathClick = () => {
    setModal(true);
  };

  const [explainPswd1, setExplainPswd1] = useState('');
  const [explainPswd2, setExplainPswd2] = useState('');

  const [inputs, setInputs] = useState({
    email: '',
    code: '',
    password1: '',
    password2: '',
  });

  const { email, code, password1, password2 } = inputs;

  //비밀번호 형식 확인 및 pswd explain
  //비밀번호 두개가 맞는 지 확인 후 pswd Explain으로 내용 보내기
  const [getPswd1, setGetPswd1] = useState(false);
  const [getPswd2, setGetPswd2] = useState(false);

  const passwordCheck1 = () => {
    if (password1 !== password2) {
      setExplainPswd1('비밀번호가 다릅니다. 다시 입력하세요.');
      setGetPswd1(true);
    } else {
      setGetPswd1(false);
    }
  };

  useEffect(() => {
    passwordCheck1();
  }, [password1, password2]);

  const passwordCheck2 = () => {
    if (!PasswordRegex.test(inputs.password1)) {
      //비밀번호 형식이 잘못 되었을 때
      setExplainPswd2(
        '영어, 숫자, 특수기호를 모두 한 개 이상 포함한 8~64 문자 사이의 비밀번호'
      );
      setGetPswd2(true);
    } else {
      setGetPswd2(false);
    }
  };

  useEffect(() => {
    passwordCheck2();
  }, [password1]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, //value값을 [name]에 넣어준다
    });
  };

  //객체에 회원가입 내용 보내기
  useEffect(() => {
    if (email !== '' && code !== '' && password1 !== '' && password2 !== '') {
      //signup의 내용이 공백이 아닐 때
      if (passwordCheck1() && passwordCheck2()) {
        //비밀번호 형식에 맞는지 확인한다.
        console.log(inputs);
      }
    }
  }, [email, code, password1, password2]);

  // 아래 내용은 Email style, api에 대한 내용입니다.
  const [getUnion, setGetUnion] = useState(false);

  const [explainEmail, setExplainEmail] = useState('');
  const [emailColor, setEmailColor] = useState(false);

  const emailCheck = (e) => {
    //이메일 형식이 잘못되었을 때
    if (!EmailRegex.test(inputs.email)) {
      setExplainEmail('이메일 형식이 일치하지 않습니다.');
      setEmailColor(true);
    } else {
      setEmailColor(false);
    }
  };

  useEffect(() => {
    emailCheck();
  }, [email]);

  //중복된 이메일인지 확인하기
  const sendBtnClick = async () => {
    //api 이메일 중복
    await apiEmail({ setEmailColor, setExplainEmail, email });
    await apiCodeSend({ email, setGetCode });
  };

  const [getCode, setGetCode] = useState(false);
  const [explainCode, setExplainCode] = useState('');

  const codeCheck = () => {
    apiCodeCheck({ email, authCode: code, setExplainCode });
  };

  // useEffect(() => {
  //   codeCheck();
  // }, [code]);

  const [modal, setModal] = useState(false);

  return (
    <>
      <SignUpContainer>
        <Header />
        <SignUpAll>
          <SignUpTitle>회원가입</SignUpTitle>
          <SignUpContent>
            <InputsContainer>
              <Input
                placeholder="이메일"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                isError={emailColor}
                isSignUp
                errorMsg={explainEmail}
                successMsg="이메일 형식이 맞습니다."
              />
              <CodeContainer>
                <SendBtn
                  onClick={sendBtnClick}
                  isError={getUnion}
                  errorMsg={explainEmail}
                  successMsg={explainEmail}
                >
                  Send
                </SendBtn>
                <Input
                  placeholder="인증코드"
                  type="text"
                  name="code"
                  value={code}
                  onChange={onChange}
                  isError={getCode}
                  isSignUp
                  errorMsg={explainCode}
                  successMsg={explainCode}
                />
                <SendBtn onClick={codeCheck}>check</SendBtn>
              </CodeContainer>
              <Input
                placeholder="비밀번호"
                type="password"
                name="password1"
                value={password1}
                onChange={onChange}
                isError={getPswd2}
                isSignUp
                errorMsg={explainPswd2}
                successMsg="비밀번호 형식이 맞습니다."
              />
              <Input
                placeholder="비밀번호 재입력"
                type="password"
                name="password2"
                value={password2}
                onChange={onChange}
                pathname={'/SignUp'}
                isError={getPswd1}
                isSignUp
                errorMsg={explainPswd1}
                successMsg="비밀번호가 일치합니다."
              />
            </InputsContainer>
            <Button
              value1="회원가입"
              value2="로그인하러 가기"
              onClick1={signupClick}
              onClick2={loginPathClick}
              fontColor1="#ffffff"
              fontColor2="#00EDA6"
              backColor1="#00EDA6"
              backColor2="#E4F9F3"
              fontWeight="700"
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
  gap: 4.8vh;
  height: 100%;
`;

const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7vh;
`;

const SignUpTitle = styled.h1`
  color: #00eda6;
  font-size: 3.7vh;
`;

const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1.6vh;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  /* width: 27.6vw; */
  /* height: 40vh; */
`;

const SendBtn = styled.button`
  cursor: pointer;
  width: 3.4vw;
  height: 3.5vh;
  border-radius: 0.5vh;
  border: none;
  background-color: #00eda6;
  color: #ffffffff;
  font-size: 1.4vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
