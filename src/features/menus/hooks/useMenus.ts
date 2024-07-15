import { axiosInstance } from "@/config/axios";
import { queryKeys } from "@/lib/utills";
import { useQuery } from "@tanstack/react-query";

export function useMenus() {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.allMenus],
    queryFn: () => axiosInstance.get("/menu").then((res) => res.data),
  });

  return { data, isLoading };
}
