import styled from 'styled-components';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { instance } from '../apis/instance';


export const LoginPage = () => {
  const navigate = useNavigate();

  const SignUpClick = () => {
    navigate('/SignUp');
  };

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
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
    if (email !== '' && password != '') {
      console.log(inputs);
    }
  }, [email, password]);

  const handleLogin = async () => {
    try {
      const response = await instance.post(
        '/auth/login',
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;
        console.log(accessToken);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        navigate('/category');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          alert('이메일 또는 비밀번호가 일치하지 않습니다 401');
        } else if (error.response.status === 404) {
          alert('유저를 찾을 수 없습니다. 404');
        } else {
          alert('로그인 요청 실패');
        }
      }
    }
  };

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
              <Input
                type="email"
                placeholder="이메일"
                name="email"
                value={email}
                onChange={onChange}
              />
              <Input
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
            onClick1={handleLogin}
            onClick2={SignUpClick}
            fontColor1="#ffffff"
            fontColor2="#00EDA6"
            backColor1="#00EDA6"
            backColor2="#E4F9F3"
            fontWeight="700"
          ></Button>
        </LoginModal>
      </LoginBackGround>
    </>
  );
};

const LoginContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.4vh;
`;

const LoginTitleAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2vh;
`;

const InputAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5vh;
`;

const LoginTitle = styled.div`
  font-size: 3.1vh;
  font-weight: 700;
  color: #00eda6;
`;

const LoginSubTitle = styled.div`
  font-size: 1.3vh;
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
  width: 29.5vw;
  height: 62vh;
  border-radius: 1vh;
  box-shadow: 0 0 30 0 rgb(115, 115, 115, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8.3vh;
`;
