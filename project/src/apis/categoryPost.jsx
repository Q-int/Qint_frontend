import { instance } from "./instance"

export const categoryPost = async (catergory) => {
  try {
    const res = await instance.post('/questions', {
      catergories: catergory
    });
    if(res.status == 200){
      const Questions = res.data;
      return Questions;
    }
  } catch (err) {
    if(err.response) {
      alert(err.message);
    } else {
      alert("서버가 터졌습니다.");
    }
  }
}