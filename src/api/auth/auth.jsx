import API from "../index";

export const login = async (params) => {
  try {
    const res = await API.post("/auth/login", params);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (params) => {
  try {
    const res = await API.post("/auth/register", params);
    return res.data;
  } catch (error) {
    throw error;
  }
};
