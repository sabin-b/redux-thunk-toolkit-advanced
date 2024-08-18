import { CartSlice } from "@/features/cart/cart-slice";
import { UserSlice } from "./../src/features/user/user-slice";
export interface User {
  user: UserSlice;
}

export interface Cart {
  cart: CartSlice;
}

export interface PizzaCart {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  imageUrl: string;
  ingredients: string[];
}

export interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

export interface Order {
  status: string;
  data: {
    customer: string;
    status: string;
    priority: boolean;
    cart: {
      pizzaId: number;
      name: string;
      quantity: number;
      unitPrice: number;
      totalPrice: number;
      addIngredients: string[];
      removeIngredients: string[];
    }[];
    id: number;
    estimatedDelivery: string;
    orderPrice: number;
    priorityPrice: number;
  };
}
