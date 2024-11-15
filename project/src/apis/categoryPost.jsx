import { instance } from "./instance";

export const categoryPost = async (categories) => {
  const token = localStorage.getItem('accessToken');  // 토큰을 로컬 스토리지에서 가져옴
  const categoriesString = categories.join(",");// 이거로 바꿈

  if (!token) {
    console.error("토큰이 없습니다. 인증 오류가 발생할 수 있습니다.");
    return;
  }

  try {
    const res = await instance.get('/questions/categories', {
      params: {
        categories: categoriesString // 이거 수정함
      },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (res.status === 200) {
      const questions = res.data;
      return questions;
    }
  } catch (err) {
    console.log("에러 메시지:", err.response ? err.response.data : err.message);
  }
};
