import { instance } from './instance';

export const apiCodeCheck = async ({ email, authCode, setExplainCode }) => {
  try {
    const response = await instance.post('/email/check-authcode', {
      email,
      authCode,
    });
    if (response.status === 200) {
      const isVerified = response.data;
      console.log(isVerified);
      if (isVerified) {
        setExplainCode('인증코드가 일치합니다.');
      } else {
        setExplainCode('인증코드가 일치하지 않습니다.');
      }
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        alert('인증 코드가 유효하지 않습니다.', error);
      } else if (error.response.status === 408) {
        alert('인증 코드가 만료되었습니다.', error);
      } else {
        alert('인증코드 요청 실패', error);
      }
    }
  }
};
