import { instance } from './instance';

export const apiEmail = async ({ email, setEmailColor, setExplainEmail }) => {
  //signup 이메일 중복 처리 api
  try {
    const response = await instance.post('/email/email-verify', {
      email,
    });
    if (response.status === 200) {
      setEmailColor(false);
      setExplainEmail('사용 가능한 이메일 입니다.');
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 409) {
        setEmailColor(true);
        setExplainEmail('이미 가입된 이메일입니다.');
      } else {
        alert('회원가입 요청 실패', error);
      }
    }
  }
};
