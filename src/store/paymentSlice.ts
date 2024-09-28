import { StateCreator } from "zustand";

export interface IPaymentSliceProps {
  paymentStatus: string;
  setPaymentStatus: (status: string) => void;
}

export const usePaymentSlice: StateCreator<IPaymentSliceProps> = (set) => ({
  paymentStatus: "pending",
  setPaymentStatus: (status) => set({ paymentStatus: status }),
});
