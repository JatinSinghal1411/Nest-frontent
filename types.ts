export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  sold?: number;
  description?: string;
  images?: string[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export type PageName = 'home' | 'about' | 'services' | 'blog' | 'contact' | 'product';

export interface NavLink {
  label: string;
  page: PageName;
}