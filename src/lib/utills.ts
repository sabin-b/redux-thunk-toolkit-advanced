import { type ClassValue, clsx } from "clsx";
import { nanoid } from "nanoid";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*** react query keys */
export const queryKeys = {
  allMenus: "Menus",
};

/** MaindishShowcase data */

type ShowcaseItem = {
  imageUrl: string;
  label: string;
};

export const showCaseDishItems: ShowcaseItem[] = [
  {
    label: "Grill",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1720972037/react%20pizza/chicken-min_fiq1ue.png",
  },
  {
    label: "Pizza",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1720972038/react%20pizza/pizza-slice-min_gckx5z.png",
  },
  {
    label: "Fries",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1720972037/react%20pizza/french-fries-min_co5vnc.png",
  },
  {
    label: "KEBAB",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1720972038/react%20pizza/kebab-min_jk0z7h.png",
  },
  {
    label: "DONUTS",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1720972037/react%20pizza/donut-min_pdum5o.png",
  },
  {
    label: "DRINK",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1720972038/react%20pizza/softdrink-min_apr4mc.png",
  },
];

type demoMenusList = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

export const demoMenusList: demoMenusList[] = [
  {
    id: nanoid(),
    name: "NEW YORK",
    description:
      "Enjoy our authentic New York Pizza, featuring thin, crispy crusts with rich tomato sauce and generous toppings. Perfectly crafted for a true NYC experience!",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1721000910/react%20pizza/freshly-baked-pizza-PVTNH58-min_u2br5a.jpg",
  },
  {
    id: nanoid(),
    name: "MARGHERITA",
    description:
      "Savor our classic Margherita pizza with fresh mozzarella, ripe tomatoes, and fragrant basil on a perfectly baked crust. Simple, fresh, and delicious!",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1721001467/react%20pizza/delicious-pizza-with-mushrooms-and-meat-PM3XLWF-min_dxhfvf.jpg",
  },
  {
    id: nanoid(),
    name: "HAWAIIAN",
    description:
      "Try our Hawaiian pizza, topped with juicy pineapple, savory ham, and melty cheese. A perfect blend of sweet and savory!",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1721001617/react%20pizza/freshly-baked-pizza-S65SEGY-min_gwgo0u.jpg",
  },
  {
    id: nanoid(),
    name: "CHICKEN CAESAR",
    description:
      "Indulge in our Chicken Caesar pizza, featuring tender chicken, crisp romaine, and creamy Caesar dressing. A classic favorite with a delicious twist!",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1721001677/react%20pizza/freshly-baked-pizza-P5TCWYX-min_xju8ck.jpg",
  },
  {
    id: nanoid(),
    name: "PEPPERONI",
    description:
      "Delight in our Pepperoni pizza, loaded with zesty pepperoni slices and gooey mozzarella cheese on a crispy crust. A timeless favorite!",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1721001798/react%20pizza/freshly-baked-pizza-PHLSKGR-min_edibpk.jpg",
  },
  {
    id: nanoid(),
    name: "NEAPOLITANA",
    description:
      "Relish our Neapolitana pizza, featuring fresh tomatoes, mozzarella, and aromatic basil on a thin, wood-fired crust. Authentic and irresistible!",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1721001867/react%20pizza/freshly-baked-pizza-PN4YVGC-min_tnlavb.jpg",
  },
  {
    id: nanoid(),
    name: "VEGGIE",
    description:
      "Indulge in our Veggie pizza, loaded with fresh vegetables like bell peppers, onions, mushrooms, and olives on a crispy crust. A wholesome delight!",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1721001990/react%20pizza/delicious-pizza-with-mushrooms-and-meat-PRRXEMN-min_lyopoe.jpg",
  },
  {
    id: nanoid(),
    name: "CHICAGO PIZZA",
    description:
      "Experience our Chicago Pizza, a deep-dish delight with layers of gooey cheese, rich tomato sauce, and hearty toppings. A true Windy City classic!",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1721001992/react%20pizza/freshly-baked-pizza-N6UKZ76-min_k1ca0m.jpg",
  },
  {
    id: nanoid(),
    name: "CHEESE LOVER'S",
    description:
      "Treat yourself to our Cheese Lover's pizza, smothered in a blend of gooey mozzarella, cheddar, and parmesan on a crispy crust. A cheese enthusiast's dream!",
    imageUrl:
      "https://res.cloudinary.com/sabindev/image/upload/v1721001992/react%20pizza/freshly-baked-pizza-PSP7YXK-min_dnjcu7.jpg",
  },
];
