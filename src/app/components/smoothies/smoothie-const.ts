export interface ISmoothie {
    Type: string;
    Name: string;
    Size: string;
    Price: string;
    Ingredients_Flavors: string;

}

export const SMOOTHIE: ISmoothie[] = [
    {
        Type: 'Smoothie',
        Name: 'Smoothie',
        Size: 'Sm/Lg',
        Price: '$3.85/$5.89',
        Ingredients_Flavors: 'Flavors: Strawberry, Pina Colada, Strawberry Banana, Pineapple, Berry Blast, Blueberry, Peach, Strawberry Pina Colada, Mango, Peanut Buda & Jelly'
    }
]
