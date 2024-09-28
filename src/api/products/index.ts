import { api } from "../api.ts";

const getProducts = async () => {
  const response = await api.get("products");
  return response.data;
};

export { getProducts };
