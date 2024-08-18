import { axiosInstance } from "@/config/axios";
import { queryKeys } from "@/lib/utills";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Order } from "types/types";

interface UseOrderResponse {
  order: Order;
  isLoading: boolean;
}
export function useOrder(): UseOrderResponse {
  const { orderId } = useParams();
  const { data: order, isLoading } = useQuery({
    queryKey: [queryKeys.singleOrder],
    queryFn: () =>
      axiosInstance.get(`/order/${orderId}`).then((res) => res.data),
  });

  return { order, isLoading };
}
