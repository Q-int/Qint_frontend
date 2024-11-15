import { instance } from "./instance";

export const apiWrongQ = async () => {
  try {
  const token = localStorage.getItem('accessToken');  // 로컬 스토리지에서 토큰 가져오기

    const res = await instance.get('/users/incorrect-problems', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (res.status === 200) {
      const incorrectQs = res.data;
      return incorrectQs;
    } else {
      alert('문제 불러오기를 실패하였습니다.');
    }
  } catch (err) {
    alert(err.message);
  }
};
