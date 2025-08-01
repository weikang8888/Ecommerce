import API from "../index";

export const getBlogs = async () => {
  const res = await API.post("/blog/list", {});
  return res.data;
};
