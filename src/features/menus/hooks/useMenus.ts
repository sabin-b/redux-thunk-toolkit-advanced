import { axiosInstance } from "@/config/axios";
import { queryKeys } from "@/lib/utills";
import { useQuery } from "@tanstack/react-query";
import { Pizza } from "types/types";

interface UseMenusResponse {
  data: {
    status: string;
    data: Pizza[];
  };
  isLoading: boolean;
}
export function useMenus(): UseMenusResponse {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.allMenus],
    queryFn: () => axiosInstance.get("/menu").then((res) => res.data),
  });

  return { data, isLoading };
}
