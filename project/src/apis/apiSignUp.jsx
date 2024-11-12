import { instance } from './instance';

export const apiSignUp = async ({ email, password, setModal }) => {
  try {
    const response = await instance.post('/auth/signup', {
      email,
      password,
    });

    if (response.status === 200) {
      console.log('회원가입 성공');
      setModal(true);
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        alert('비밀번호가 일치하지 않습니다.');
      } else if (error.response.status === 409) {
        alert('이미 가입된 유저입니다.');
      }
    }
  }
};
