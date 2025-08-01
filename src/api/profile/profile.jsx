import API from "../index";

export const getProfile = async () => {
  const res = await API.get("/profile", {});
  return res.data;
};

export const createBilling = async (params) => {
  const res = await API.post("/profile/billing/create", params);
  return res.data;
};
