import validator from "validator";
import * as z from "zod";

const neworderSchema = z.object({
  customer: z
    .string({ message: "Name must be at least 3 characters long" })
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name can't be longer than 30 characters")
    .regex(
      new RegExp("^[a-zA-Z\\s]+[a-zA-Z]$"),
      "No special characters allowed"
    ),
  phone: z
    .string({ message: "Please enter the phone number" })
    .refine(
      (data) => validator.isMobilePhone(data),
      "Please Enter the Valid Phone Number"
    ),
  address: z
    .string({
      message: "Please enter the address",
    })
    .min(1, "Please enter the address"),
  priority: z.coerce.boolean().default(false),
  cart: z.array(
    z.object({
      pizzaId: z.number(),
      name: z.string(),
      quantity: z.number(),
      unitPrice: z.number(),
      totalPrice: z.number(),
      imageUrl: z.string(),
      ingredients: z.array(z.string()),
    })
  ),
  position: z.string().optional(),
});

export default neworderSchema;
