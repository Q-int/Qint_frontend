import styled, { css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [modal, setModal] = useState(false);
  const { pathname } = useLocation();
  const [isButton, setIsbutton] = useState('');
  const accessToken = localStorage.getItem('access_token');

  const navigate = useNavigate();

  const MyPageClick = () => {
    navigate('/mypage');
  };

  const LogoClick = () => {
    navigate('/');
  };

  const LoginClick = () => {
    setModal('true');
  };

  const LogoutClick = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsbutton('로그인');
    navigate('/');
  };

  useEffect(() => {
    setIsbutton(accessToken ? '로그아웃' : '로그인');
  }, [accessToken]);
  // if (modal == "true") {
  // }

  return (
    <Container>
      <Logo onClick={LogoClick}></Logo>
      <Buttons>
        {isButton === '로그아웃' && (
          <Mypagebtn pathname={pathname} onClick={MyPageClick}>
            마이페이지
          </Mypagebtn>
        )}
        <Loginbtn onClick={isButton === '로그아웃' ? LogoutClick : LoginClick}>
          {isButton}
        </Loginbtn>
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
  src: '/images/Q-int.svg',
  alt: '로고',
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
  white-space: nowrap;
  cursor: pointer;
  ${({ pathname }) =>
    pathname.includes('mypage')
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
  box-shadow: 0 0.4vh 0.4vw rgba(158, 158, 158, 0.25);
  border: none;
  font-size: 1.9vh;
  border-radius: 0.5vh;
  margin-right: 9.8vw;
  cursor: pointer;
  white-space: nowrap;
  min-width: 43px;

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
