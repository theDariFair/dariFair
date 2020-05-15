export interface IFloats {
    Type: string;
    Name: string;
    Size: string;
    Price: string;
    Ingredients_Flavors: string;
  }

export const FLOATS: IFloats[] =
[
    {
      Type: 'Floats & Shakes',
      Name: 'Root Beer Floats',
      Size: 'Sm/Md/Lg/Mst',
      Price: '$2.99/$4.29/$5.89/$6.79',
      Ingredients_Flavors: ''
    },
    {
      Type: 'Floats & Shakes',
      Name: 'Shakes',
      Size: 'Sm/Md/Lg/Mst',
      Price: '$3.99/$4.79/$5.89/$7.65',
      Ingredients_Flavors: 'Flavors: Vanilla, Chocolate, Hot Fudge, Pineapple, Cherry, Strawberry, Blueberry, Butterscotch, Caramel, Peanut butter, marshmellow crème, banana split, hot cocoa, may also add any flavor from our ice cream flavor list',
    },
    {
      Type: 'Floats & Shakes',
      Name: 'Malts',
      Size: 'Sm/Md/Lg/Mst',
      Price: '$4.49/$5.29/$6.39/$8.15',
      Ingredients_Flavors: ''
    }
  ]
