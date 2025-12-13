import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  size?: string;
  color?: string;
  quantity: number;
}

interface CheckoutState {
  currentStep: number;
  cartItems: CartItem[];
  promoCode: string;
  appliedPromo: boolean;
  selectedAddressId: string;
  paymentMethod: string;

  setStep: (step: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  applyPromo: () => void;
  removePromo: () => void;
  setPromoCode: (code: string) => void;
  setSelectedAddress: (id: string) => void;
  setPaymentMethod: (method: string) => void;
}

const defaultItems: CartItem[] = [
  {
    id: 1,
    name: "The cleanser face wash",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150&h=150&fit=crop",
    rating: 4.8,
    reviews: 87,
    price: 16.25,
    originalPrice: 24.25,
    size: "50 ml",
    color: "Brown",
    quantity: 1
  },
  {
    id: 2,
    name: "The cleanser face wash",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=150&h=150&fit=crop",
    rating: 4.8,
    reviews: 87,
    price: 16.25,
    originalPrice: 24.25,
    color: "Brown",
    quantity: 1
  },
  {
    id: 3,
    name: "The cleanser face wash",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=150&h=150&fit=crop",
    rating: 4.8,
    reviews: 87,
    price: 16.25,
    originalPrice: 24.25,
    size: "50 ml",
    quantity: 1
  },
  {
    id: 4,
    name: "The cleanser face wash",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=150&h=150&fit=crop",
    rating: 4.8,
    reviews: 87,
    price: 16.25,
    originalPrice: 24.25,
    quantity: 1
  },
  {
    id: 5,
    name: "The cleanser face wash",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=150&h=150&fit=crop",
    rating: 4.8,
    reviews: 87,
    price: 16.25,
    originalPrice: 24.25,
    quantity: 1
  }
];

export const useCheckoutStore = create<CheckoutState>((set, get) => ({
  currentStep: 1,
  cartItems: defaultItems,
  promoCode: "",
  appliedPromo: false,
  selectedAddressId: "1",
  paymentMethod: "card",

  setStep: (step) => set({ currentStep: step }),

  updateQuantity: (id, delta) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    })),

  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id)
    })),

  applyPromo: () => {
    const { promoCode } = get();
    if (promoCode.toUpperCase() === "SAVE10") {
      set({ appliedPromo: true });
    }
  },

  removePromo: () => set({ appliedPromo: false, promoCode: "" }),

  setPromoCode: (code) => set({ promoCode: code }),

  setSelectedAddress: (id) => set({ selectedAddressId: id }),

  setPaymentMethod: (method) => set({ paymentMethod: method })
}));

// Selectors
export const useCartTotals = () => {
  const { cartItems, appliedPromo } = useCheckoutStore();

  const bagTotal = cartItems.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0);
  const itemDiscount = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice - item.price) * item.quantity,
    0
  );
  const promoDiscount = appliedPromo ? bagTotal * 0.1 : 0;
  const couponDiscount = itemDiscount + promoDiscount;
  const orderTotal = bagTotal - couponDiscount;
  const deliveryCharges = orderTotal >= 50 ? 5 : 0;
  const subtotal = orderTotal - deliveryCharges;
  const tax = subtotal * 0.08;
  const finalTotal = subtotal + tax;
  const totalSavings = couponDiscount + deliveryCharges;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isCartEmpty = cartItems.length === 0;

  return {
    bagTotal,
    couponDiscount,
    orderTotal,
    deliveryCharges,
    subtotal,
    tax,
    finalTotal,
    totalSavings,
    itemCount,
    isCartEmpty
  };
};
