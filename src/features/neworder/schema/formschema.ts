import validator from "validator";
import * as z from "zod";

const neworderSchema = z.object({
  customerName: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name can't be longer than 30 characters")
    .regex(new RegExp("^[a-zA-Z]+$"), "No special characters allowed"),
  phone: z
    .string()
    .refine(
      (data) => validator.isMobilePhone(data),
      "Please Enter the Valid Phone Number"
    ),
  email: z.string().email("Please enter the valid email address"),
});

export default neworderSchema;
