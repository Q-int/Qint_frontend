import { instance } from './instance';

export const apiCodeCheck = async ({
  email,
  auth_code,
  setExplainCode,
  setGetCode,
}) => {
  try {
    const response = await instance.post('/email/check-authcode', {
      email,
      auth_code,
    });
    if (response.status === 200) {
      const { is_verified } = response.data;
      console.log(is_verified);
      if (is_verified) {
        setExplainCode('인증코드가 일치합니다.');
        setGetCode(false);
      } else {
        setExplainCode('인증코드가 일치하지 않습니다.');
        setGetCode(true);
      }
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        alert('인증 코드가 유효하지 않습니다.', error);
        setGetCode(true);
      } else if (error.response.status === 408) {
        alert('인증 코드가 만료되었습니다.', error);
        setGetCode(true);
      } else {
        alert('인증코드 요청 실패', error);
        setGetCode(true);
      }
    }
  }
};
