import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { useMenus } from "@/features/menus/hooks/useMenus";
import { useMakeorderPriority } from "@/features/neworder/hooks/useMakeorderpriority";
import { useOrder } from "@/features/neworder/hooks/useOrder";
import { calcMinutesLeft, formatCurrency, formatDate } from "@/lib/utills";
import { useNavigate } from "react-router-dom";

function SingleOrder() {
  const navigate = useNavigate();
  const { isLoading, order } = useOrder();
  const { isLoading: IngredientsLoading, data: { data = [] } = {} } =
    useMenus();

  const { updateOrder, isPending } = useMakeorderPriority();

  if (!order) {
    navigate(-1);
    return;
  }

  const {
    cart,
    estimatedDelivery,
    id,
    orderPrice,
    priority,
    priorityPrice,
    status,
  } = order.data;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  if (isLoading) return <Loader />;
  return (
    <section className="py-20 container text-center">
      <div className="space-y-8 px-4 py-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-semibold">Order #{id} status</h2>

          <div className="space-x-2">
            {priority && (
              <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
                Priority
              </span>
            )}

            <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
              {status} order
            </span>
            {!priority && (
              <Button onClick={() => updateOrder({ priority: true })}>
                {isPending && "Please Wait"}
                {!isPending && "Make Order Priority"}
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 bg-secondary px-6 py-4">
          <p className="font-medium">
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
              : "Order should have arrived"}
          </p>
          <p className="text-base text-stone-500">
            (Estimated delivery: {formatDate(estimatedDelivery)})
          </p>
        </div>

        <ul className="dive-stone-200 divide-y px-6 border-b border-t">
          {cart.map((item, index) => (
            <li
              key={item.pizzaId}
              className="flex justify-between items-center py-2"
            >
              <div className="flex gap-x-2 justify-start items-start">
                <span>{index + 1})</span>
                <div className="flex flex-col justify-start items-start">
                  <span>{item.name}</span>
                  {IngredientsLoading && <span>loading....</span>}
                  {!IngredientsLoading && data && (
                    <span className="text-muted-foreground text-xs">
                      {data
                        .find((el) => el.id === item.pizzaId)
                        ?.ingredients.join(",")}
                    </span>
                  )}
                </div>
              </div>
              <span>
                {item.quantity} x {formatCurrency(item.unitPrice)} ={" "}
                {formatCurrency(item.totalPrice)}
              </span>
            </li>
          ))}
        </ul>

        <div className="space-y-2 text-left bg-secondary px-6 py-4">
          <p className="text-sm font-medium text-stone-600">
            Price pizza: {formatCurrency(orderPrice)}
          </p>
          {priority && (
            <p className="text-sm font-medium text-stone-600">
              Price priority: {formatCurrency(priorityPrice)}
            </p>
          )}
          <p className="font-bold">
            To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleOrder;
