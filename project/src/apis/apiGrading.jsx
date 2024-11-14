import { instance } from "./instance"

export const apiGrading = async (questionId, answerId) => {
  try {
    const res = await instance.post('/questions/judge', {
      question_id: questionId,
      answer_id: answerId,
    })
    
    if(res.status == 200){
      const grading = res.data;
      return grading;
    }
  } catch (err){
    if(err.response) {
      alert(err.message);
    } else {
      alert("서버가 터졌습니다. 펑!")
    }
  }
}