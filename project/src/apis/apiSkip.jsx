import { instance } from "./instance";

export const apiSkip = async () => {
  const token = localStorage.getItem('accessToken');
  
  try {
    const res = await instance.post('/questions/move-to-next-problem', {
      "move_to_next_problem": true,
    },
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if(res.status == 200){
      console.log(132);
    }
  } catch(err) {
    alert('넘어가기 실패');
  }
}