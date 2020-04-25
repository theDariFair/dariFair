export interface ISlush {
    Type: string;
    Name: string;
    Size: string;
    Price: string;
    Ingredients_Flavors: string;
    Notes: string;
}

export const SLUSH: ISlush[] =
[
    {
      Type: "Slush & Freezes",
      Name: "Slush",
      Size: "Sm/Md/Lg/Mst",
      Price: "1.95/2.75/3.95/5.20",
      Ingredients_Flavors: "Strawberry, Cherry, Grape, Orange, Blue Raspberry, Kiwi-Strawberry, Red Raspberry, Lemon",
      Notes: "*Add Nerds- 0.55"
    },
    {
      Type: "Slush & Freezes",
      Name: "Slush Freeze",
      Size: "Sm/Md/Lg/Mst",
      Price: "2.99/4.29/5.89/6.79",
      Ingredients_Flavors: "",
      Notes: "*Slush With Ice Cream Blended in"
    },
    {
      Type: "Slush & Freezes",
      Name: "Slush Float",
      Size: "Sm/Md/Lg/Mst",
      Price: "2.99/4.29/5.89/6.79",
      Ingredients_Flavors: "",
      Notes: "*Slush With Ice Cream Up The Side of The Cup"
    }
  ]