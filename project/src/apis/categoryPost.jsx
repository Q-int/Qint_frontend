import { instance } from "./instance";

export const categoryPost = async () => {
  try {
    const res = await instance.get('/questions', {
      categories: ["BACKEND", "FRONTEND"],  // body로 보내는 데이터
    }, {
      headers: {
        'Authorization': `eyJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb2VoZ25zMDkxOUBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImV4cCI6MTczNDE2MzUwNCwiaWF0IjoxNzMxNTcxNTA0fQ._5IxqM5eU0JG_ii9wvJZrR0A2W51J1MtW6Ybif4p8P4`,
      }
    });

    if (res.status === 200) {
      const questions = res.data;
      return questions;
    }
  } catch (err) {
    console.log(err.message);
  }
};
