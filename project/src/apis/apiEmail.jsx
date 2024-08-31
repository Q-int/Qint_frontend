import { instance } from "./instance";

export const apiEmail = async (email) => {
  //signup 이메일 중복 처리 api
  const { data } = await instance.post("/email/email-verify", {
    email: email,
  });
  return data;
};
