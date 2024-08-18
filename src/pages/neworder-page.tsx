import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { clearCart, getCartItems } from "@/features/cart/cart-slice";
import { useCreateOrder } from "@/features/neworder/hooks/useCreateorder";
import neworderSchema from "@/features/neworder/schema/formschema";
import { fetchAddress } from "@/features/user/fetchAddress";
import { getUserName } from "@/features/user/user-slice";
import { AppDispatch, RootState } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, LocateIcon } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

function NewOrder() {
  const userName = useSelector(getUserName);
  const cartItems = useSelector(getCartItems);
  const { address, error, position, status } = useSelector(
    (state: RootState) => state.user
  );
  const isFetchingAddress = status === "loading";
  const dispatch: AppDispatch = useDispatch();
  const { createOrder } = useCreateOrder();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof neworderSchema>>({
    resolver: zodResolver(neworderSchema),
    defaultValues: {
      cart: cartItems,
      customer: userName,
      position:
        position.latitude && position.longitude
          ? `${position.latitude}-${position.longitude}`
          : "",
    },
    mode: "onSubmit",
  });

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    setValue("address", address, { shouldValidate: false });
  }, [address]);

  async function handleFormSubmission(data: z.infer<typeof neworderSchema>) {
    if (cartItems.length === 0) {
      navigate("/menu");
    } else {
      const res = await createOrder(data);
      if (res?.status === "success") {
        dispatch(clearCart());
        // then redirect to order page
        navigate(`/order/${res?.data.id}`);
      }
    }
  }

  return (
    <section className="py-20 container">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Ready to Order</CardTitle>
          <CardDescription>
            Please fill out the form to place your order.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(handleFormSubmission)}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <FormField
                  control={control}
                  name="customer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          defaultValue={userName}
                          placeholder="Enter your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <div className="flex justify-between items-center">
                          Address
                          {!address && (
                            <Button
                              type="button"
                              className="px-2 h-8 text-sm capitalize"
                              onClick={() => dispatch(fetchAddress())}
                            >
                              <LocateIcon className="w-4 h-4 mr-2" />
                              your position
                            </Button>
                          )}
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          defaultValue={address}
                          disabled={isFetchingAddress}
                          placeholder="Enter your address"
                          {...field}
                        />
                      </FormControl>
                      {error && (
                        <FormDescription className="text-xs bg-destructive text-white px-1 py-1">
                          {error}
                        </FormDescription>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="priority"></Label>
                <FormField
                  control={control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2">
                      <FormControl>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="piriority"
                            className="m-0"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <label
                            htmlFor="piriority"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Make Order Priority
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full"
                disabled={isFetchingAddress}
                onClick={() => {
                  if (getValues().address.length === 0 && address.length > 0)
                    setValue("address", address, { shouldValidate: false });
                }}
              >
                {isSubmitting && (
                  <span className="flex gap-2">
                    <Loader className="w-4 h-4 animate-spin" />
                    Please Wait...
                  </span>
                )}
                {!isSubmitting && "Order Now"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </section>
  );
}

export default NewOrder;
