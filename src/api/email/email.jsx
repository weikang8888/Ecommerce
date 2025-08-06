import API from "../index";

export const sendEmail = async (params) => {
  const res = await API.post("/email/send", params);
  return res.data;
};
