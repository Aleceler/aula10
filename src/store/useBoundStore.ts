import { create } from "zustand";
import { IProductSliceProps, useProductSlice } from "./productSlice";
import { ICartSliceProps, useCartSlice } from "./cartSlice";
import { IPaymentSliceProps, usePaymentSlice } from "./paymentSlice";
import zukeeper from "zukeeper";

export type BoundStore = IProductSliceProps &
  ICartSliceProps &
  IPaymentSliceProps;

export const useBoundStore = create<BoundStore>(
  zukeeper((...a) => ({
    ...useProductSlice(...a),
    ...useCartSlice(...a),
    ...usePaymentSlice(...a),
  })),
);
