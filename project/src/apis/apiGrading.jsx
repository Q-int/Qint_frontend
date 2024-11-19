import { instance } from "./instance";

export const apiGrading = async (questionId, answerId) => {
  const token = localStorage.getItem('accessToken');  // 로컬 스토리지에서 토큰 가져오기

  try {
    const res = await instance.post(
      '/questions/judge',
      {
        question_id: questionId,
        answer_id: answerId,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`  // Authorization 헤더에 토큰 추가
        }
      }
    );
    console.log(4564321);

    if (res.status === 200) {
      const grading = res.data;
      return grading;
    }
  } catch (err) {
    if (err.response) {
      alert(err.message);
    } else {
      alert("서버가 터졌습니다. 펑!");
    }
  }
};
