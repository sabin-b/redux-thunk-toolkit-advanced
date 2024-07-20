import { axiosInstance } from "@/config/axios";
import { queryKeys } from "@/lib/utills";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useOrder() {
  const orderId = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.singleOrder],
    queryFn: () =>
      axiosInstance.get(`/order/${orderId}`).then((res) => res.data),
    throwOnError: (err) => {
      console.log(err.message);
    },
  });

  return { data, isLoading };
}
