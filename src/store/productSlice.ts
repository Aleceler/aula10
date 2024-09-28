import { StateCreator } from "zustand";
import { getProducts } from "../api/products";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface IProductSliceProps {
  products: IProduct[];
  fetchProducts: () => Promise<void>;
}

export const useProductSlice: StateCreator<IProductSliceProps> = (set) => ({
  products: [],
  fetchProducts: async () => {
    const products = await getProducts();
    set({ products });
  },
});
