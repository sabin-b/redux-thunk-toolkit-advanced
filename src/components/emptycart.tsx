import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export function EmptyCart() {
  return (
    <section className="py-20 container mt-auto text-center">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-6">
          <Card className="p-4">
            <CardHeader>
              <h3 className="font-semibold">Your cart is empty</h3>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ShoppingCart className="w-16 h-16" />
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link to={"/menu"}>
                  <ShoppingBag className="w-4  h-4 mr-2" />
                  Go To Menus
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
