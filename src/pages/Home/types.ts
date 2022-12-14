export interface CardType {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: Categories;
    rating: number;
}

export enum Categories {
    all = 'All',
    vegeterian = 'Vegeterian',
    chicken = 'Chicken',
    asian = 'Asian'
}