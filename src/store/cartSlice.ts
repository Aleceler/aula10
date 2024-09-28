import { StateCreator } from "zustand";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface ICartItem {
  productId: number;
  productName: string;
  productImage: string;
  productPrice: number;
  quantity?: number;
}

export interface ICartSliceProps {
  cart: ICartItem[];
  totalValue: number;
  addToCart: (item: ICartItem) => void;
  removeFromCart: (productId: number) => void;
  getTotal: () => number;
}

type CartState = {
  cart: ICartItem[];
  totalValue: number;
};

export const useCartSlice: StateCreator<CartState & ICartSliceProps> = (
  set,
  get,
) => ({
  cart: [],
  totalValue: 0,
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (i) => i.productId === item.productId,
      );

      if (existingItem) {
        toast.success(
          `A quantidade de "${item.productName}" foi atualizada no carrinho.`,
        );
        const updatedCart = state.cart.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: (i.quantity || 0) + (item.quantity || 1) }
            : i,
        );

        const newTotal = updatedCart.reduce((total, item) => {
          return total + item.productPrice * (item.quantity || 1);
        }, 0);

        return {
          cart: updatedCart,
          totalValue: newTotal,
        };
      }

      toast.success(`O item "${item.productName}" foi adicionado ao carrinho.`);
      const newCart = [
        ...state.cart,
        { ...item, quantity: item.quantity || 1 },
      ];
      const newTotal = newCart.reduce((total, item) => {
        return total + item.productPrice * (item.quantity || 1);
      }, 0);

      return {
        cart: newCart,
        totalValue: newTotal,
      };
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const removedItem = state.cart.find((i) => i.productId === productId);
      if (removedItem) {
        toast.success(
          `O item "${removedItem.productName}" foi removido do carrinho.`,
        );
      }
      const newCart = state.cart.filter((item) => item.productId !== productId);
      const newTotal = newCart.reduce((total: number, item: ICartItem) => {
        return total + item.productPrice * (item.quantity || 1);
      }, 0);

      return {
        cart: newCart,
        totalValue: newTotal,
      };
    }),
  getTotal: () => {
    const state = get();
    return state.totalValue;
  },
});
