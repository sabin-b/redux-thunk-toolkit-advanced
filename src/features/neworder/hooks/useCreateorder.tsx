import { axiosInstance } from "@/config/axios";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import neworderSchema from "../schema/formschema";

export function useCreateOrder() {
  const { mutateAsync: createOrder } = useMutation({
    mutationFn: (data: z.infer<typeof neworderSchema>) =>
      axiosInstance
        .post("/order", JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.data),
  });

  return { createOrder };
}
