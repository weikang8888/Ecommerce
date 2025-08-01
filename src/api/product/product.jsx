import API from "../index";

export const getProducts = async () => {
  const res = await API.post("/products/list", {});
  return res.data;
};

export const viewProduct = async (id) => {
  const res = await API.post(`/products/view/${id}`);
  return res.data;
};
