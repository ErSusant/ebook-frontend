export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  rating?: number;
  coverUrl?: string;
}
