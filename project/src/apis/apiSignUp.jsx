import { instance } from './instance';

export const apiSignUp = async ({ email, password, setModal, setInputs }) => {
  try {
    const response = await instance.post('/auth/signup', {
      email,
      password,
    });

    if (response.status === 200) {
      console.log('회원가입 성공');

      setInputs({
        email: '',
        code: '',
        password1: '',
        password2: '',
      });
      setModal(true);
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        alert('비밀번호는 최대 64글자이고, 특수문자 한개가 포함되어야 합니다.');
      } else if (error.response.status === 409) {
        alert('이미 가입된 유저입니다.');
      }
    }
  }
};
