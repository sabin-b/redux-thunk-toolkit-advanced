import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  getAlreadyinCart,
  increaseItemQuantity,
} from "@/features/cart/cart-slice";
import { cn, formatCurrency } from "@/lib/utills";
import { Minus, Plus, ShoppingBag, ShoppingCart, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Pizza } from "types/types";
import { Button } from "./ui/button";

export function PizzaMenuList({ pizzaList }: { pizzaList: Pizza[] }) {
  return (
    <section className="py-20 container text-center">
      <h2 className="mb-16">Your Favorite Pizzas, Just a Click Away</h2>
      <ul className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4 lg:gap-8">
        {pizzaList.map((pizza) => (
          <PizzaMenuItem key={pizza.name} {...pizza} />
        ))}
      </ul>
    </section>
  );
}

function PizzaMenuItem({
  id,
  imageUrl,
  ingredients,
  name,
  soldOut,
  unitPrice,
}: Pizza) {
  const dispatch = useDispatch();
  // const iscart = useSelector(getAlreadyExistsinCart(id));

  const iscart = useSelector((state) => getAlreadyinCart(state, id));

  function handleAddtoCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
      imageUrl,
      ingredients,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li
      key={name}
      className="bg-card border flex flex-col rounded-lg overflow-hidden"
    >
      <img
        src={imageUrl}
        width={400}
        height={300}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex-col flex justify-between text-left truncate">
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-muted-foreground text-wrap whitespace-pre-wrap">
            {ingredients.join(", ")}
          </p>
          {!soldOut ? (
            <p className="mt-2">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="mt-2 text-destructive">Sold Out</p>
          )}
        </div>
        <div>
          <div
            className={cn(
              "flex justify-between gap-4 items-center mt-4",
              !iscart && "justify-end"
            )}
          >
            {iscart && (
              <div className="flex items-center gap-2 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={!iscart}
                  className="focus:border focus:border-primary"
                  onClick={() => dispatch(decreaseItemQuantity(id))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <div className="text-lg mt-1 font-medium">
                  {iscart?.quantity || 0}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={!iscart}
                  className="focus:border focus:border-primary"
                  onClick={() => dispatch(increaseItemQuantity(id))}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            )}
            {!iscart && (
              <Button
                onClick={handleAddtoCart}
                size="sm"
                disabled={soldOut}
                className="flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </Button>
            )}
            {iscart && (
              <div className="flex gap-2">
                <Button
                  onClick={() => dispatch(deleteItem(id))}
                  size="sm"
                  variant={"destructive"}
                  className="flex items-center gap-2"
                >
                  <Trash className="w-4 h-4" />
                </Button>
                <Button size="sm" className="flex items-center gap-2" asChild>
                  <Link to={"/cart"}>
                    <ShoppingCart className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
