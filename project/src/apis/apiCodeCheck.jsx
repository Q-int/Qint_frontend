import { instance } from "./instance";

export const apiCodeCheck = async (code) => {
  //signup code 확인하기
  const { data } = await instance.post("/email/check-authcode", {
    email: email,
    auth_code: auth_code,
  });
  return data;
};
