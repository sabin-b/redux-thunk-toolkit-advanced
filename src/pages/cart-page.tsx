import { CartPopup } from "@/components/cart-popup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  clearCart,
  decreaseItemQuantity,
  deleteItem,
  getCartItems,
  getCartTotal,
  increaseItemQuantity,
} from "@/features/cart/cart-slice";
import { getUserName } from "@/features/user/user-slice";
import { formatCurrency } from "@/lib/utills";
import { Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PizzaCart } from "types/types";
function Cart() {
  const cartItems = useSelector(getCartItems);
  const cartItemsTotal = useSelector(getCartTotal);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  if (userName.length <= 0) return <CartPopup />;

  return (
    <section className="py-20 container text-center">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to={"/menu"}>Continue Shopping</Link>
            </Button>
            {cartItems.length > 0 && (
              <Button onClick={() => dispatch(clearCart())} size="sm">
                Clear Cart
              </Button>
            )}
          </div>
        </div>
        <div className="grid sm:grid-cols-1 gap-6">
          {cartItems.length > 0 && (
            <div className="flex flex-col gap-6">
              {cartItems.map((pizza) => (
                <CartItem key={pizza.name} {...pizza} />
              ))}
            </div>
          )}
          {cartItems.length === 0 && (
            <div className="flex flex-col gap-6">
              <Card className="p-4">
                <CardHeader>
                  <h3 className="font-semibold">Your cart is empty</h3>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <ShoppingCart className="w-16 h-16" />
                </CardContent>
              </Card>
            </div>
          )}
          <div className="flex flex-col gap-6">
            <Card className="p-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">Total</div>
                  <div className="text-lg font-semibold">
                    {formatCurrency(cartItemsTotal)}
                  </div>
                </div>
              </div>
            </Card>
            <Button
              disabled={cartItemsTotal === 0}
              size="lg"
              className="w-full text-lg"
              asChild={cartItemsTotal !== 0}
            >
              <Link to={cartItemsTotal > 0 ? "/order/new" : ""}>
                Order{cartItems.length > 1 ? "ing" : ""} Pizza
                {cartItems.length > 1 ? "s" : ""}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;

export function CartItem({
  pizzaId,
  imageUrl = "",
  ingredients = [],
  name,
  quantity,
  totalPrice,
  unitPrice,
}: PizzaCart) {
  const dispatch = useDispatch();
  return (
    <Card className="p-4">
      <div className="flex flex-col  md:flex-row items-center gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-md object-cover w-36 h-36 md:w-28 md:h-28"
        />
        <div className="flex-1 grid gap-2 md:gap-1">
          <div className="flex flex-col sm:flex-row md:items-start items-center justify-between">
            <h3 className="font-semibold text-center md:text-left text-lg">
              {name}
            </h3>
            <p className="text-primary text-center md:text-left  font-semibold flex gap-2">
              <span>{formatCurrency(unitPrice)}</span>*<span>{quantity}</span>=
              <span>{formatCurrency(totalPrice)}</span>
            </p>
          </div>
          <p className="text-muted-foreground text-center md:text-left truncate  mb-2 text-sm">
            {ingredients?.join(",").toString()}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="focus:border focus:border-primary"
              // disabled={quantity <= 1}
              onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span>{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="focus:border focus:border-primary"
              onClick={() => dispatch(increaseItemQuantity(pizzaId))}
            >
              <Plus className="w-4 h-4" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              className="ml-auto"
              onClick={() => dispatch(deleteItem(pizzaId))}
            >
              <Trash className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
