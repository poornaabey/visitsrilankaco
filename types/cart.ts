export interface CartItem {
  tourId: string;
  date: string;
  adults: number;
  children: number;
  totalUSD: number;
}

export type CheckoutUpsells = {
  transfer: boolean;
  gopro: boolean;
  visa: boolean;
};

export type PaymentStatus = "idle" | "processing" | "success";
