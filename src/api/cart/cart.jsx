import API from "../index";

export const getCart = async () => {
  const res = await API.get("/cart/list", {});
  return res.data;
};

export const addCart = async (params) => {
  const res = await API.post("/cart/add", params);
  return res.data;
};

export const updateCart = async (id, params) => {
  const res = await API.put(`/cart/update/${id}`, params);
  return res.data;
};

export const deleteCartProduct = async (id) => {
  const res = await API.delete(`/cart/delete/${id}`);
  return res.data;
};

export const clearCartProduct = async () => {
  const res = await API.delete(`/cart/clear`);
  return res.data;
};
