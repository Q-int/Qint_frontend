import { instance } from './instance';

export const apiCodeSend = async ({ email }) => {
  try {
    const response = await instance.post('/email/send-authcode', {
      email,
    });
    if (response.status === 200) {
      alert('인증코드가 전송되었습니다.');
    }
  } catch (error) {
    alert('인증코드 전송 실패', error);
  }
};
