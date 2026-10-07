
export interface FoodItem {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  acf: {
    price: number;
    food_type: string;
    availability: boolean;
    servings: number;
  };
}