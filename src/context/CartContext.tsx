import { createContext, useContext, useState, ReactNode } from "react";

// 1- نحدد شكل المنتج اللي هيتخزن في الكارت
export interface CartItem {
  id: number | string;
  name: string;
  price: number;
  quantity?: number; // اختياري (ممكن تضيفه أو تسيبه)
  image?: string; // اختياري
}

// 2- نحدد شكل البيانات والدوال اللي هتكون في الكارت
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number | string) => void;
  clearCart: () => void;
}

// 3- نعمل الكونتكست نفسه
const CartContext = createContext<CartContextType | undefined>(undefined);

// 4- نوع البروبز للـ Provider
interface CartProviderProps {
  children: ReactNode;
}

// 5- البروڤايدر (المخزن)
export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id: number | string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

//this is a custom hook

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
