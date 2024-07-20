import { useOrder } from "@/features/neworder/hooks/useOrder";

function SingleOrder() {
  const { data, isLoading } = useOrder();
  console.log(data, isLoading);
  return <div>singleOrder</div>;
}

export default SingleOrder;
