export interface MenuItem {
  id: string;
  nameRo: string;
  nameRu: string;
  descriptionRo: string;
  descriptionRu: string;
  price: number; // in MDL (lei)
  image: string;
  category: 'coffee' | 'cold' | 'tea' | 'pastry';
  isPopular?: boolean;
}

export interface Promotion {
  id: string;
  titleRo: string;
  titleRu: string;
  descriptionRo: string;
  descriptionRu: string;
  originalPrice?: number;
  promoPrice?: number;
  promoCode?: string;
  image: string;
  badgeRo: string;
  badgeRu: string;
}

export interface Advantage {
  id: string;
  titleRo: string;
  titleRu: string;
  descriptionRo: string;
  descriptionRu: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: string;
  captionRo: string;
  captionRu: string;
}

