import { instance } from "./instance"

export const apiMypage = async () => {
  const token = localStorage.getItem('accessToken');  // 토큰을 로컬 스토리지에서 가져옴


  try{
    const res = await instance.get('/users/info', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if(res.status == 200){
      console.log(res.data.incorrect_answers);
      console.log(res.data.correct_answers);
      const myInfo = res.data;
      return myInfo;
    }
  } catch(err){
    alert(err.meassage)
  }
}