export interface Iff {
    Type: string;
    Name: string;
    Size_QTY: string;
    Price: string;
    MealPrice: string;
    Ingredients: string;
  }

  export const FFOOD: Iff[] =
  [
    {
      Type: 'Finger Foods',
      Name: 'Chicken Strips',
      Size_QTY: '4pc/6pc',
      Price: '$6.49/$7.49',
      MealPrice: '4pcs/$8.99, 6pcs/$9.99',
      Ingredients: ''
    },
    {
      Type: 'Finger Foods',
      Name: 'Fish Sticks',
      Size_QTY: '6pcs',
      Price: '$2.65',
      MealPrice: '$5.99',
      Ingredients: ''

    },
    {
      Type: 'Finger Foods',
      Name: 'Steak or Beef Taco',
      Size_QTY: '',
      Price: '$1.50 each',
      MealPrice: '$5.99 *Meal includes 2 Tacos',
      Ingredients: 'Topped with: Cilantro, Sour Cream, Onion'
    },
    {
      Type: 'Finger Foods',
      Name: 'Loaded Steak Fries or Nachos',
      Size_QTY: '',
      Price: '$8.99',
      MealPrice: '',
      Ingredients: 'Includes: XL order of French Fries or tortilla chips, Choice of Steak or Beef, Lettuce, Tomato, Cheese Sauce, Sour Cream'

    },
    {
      Type: 'Finger Foods',
      Name: 'Chicken Nuggets',
      Size_QTY: '6pc/10pc/20pc',
      Price: '$3.25/$5.75/$10.00',
      MealPrice: '6pcs/$6.99, 10pcs/$8.99',
      Ingredients: ''
    }
  ]
