import API from "../index";

export const getWish = async () => {
  const res = await API.get("/wish/list", {});
  return res.data;
};

export const addWish = async (params) => {
  const res = await API.post("/wish/add", params);
  return res.data;
};

export const deleteWishProduct = async (id) => {
  const res = await API.delete(`/wish/delete/${id}`);
  return res.data;
};
