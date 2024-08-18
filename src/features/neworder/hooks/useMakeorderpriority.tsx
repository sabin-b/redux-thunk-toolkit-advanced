import { axiosInstance } from "@/config/axios";
import { queryKeys } from "@/lib/utills";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useMakeorderPriority() {
  const queryClient = useQueryClient();
  const { orderId } = useParams();
  const { mutate: updateOrder, isPending } = useMutation({
    mutationFn: (data: { priority: boolean }) =>
      axiosInstance.patch(`/order/${orderId}`, data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.singleOrder],
      });
    },
  });

  return { updateOrder ,isPending};
}
