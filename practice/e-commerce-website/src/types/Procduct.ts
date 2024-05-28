import { Feedback } from './Feedback';

export interface Product {
  id: string;
  productId: string;
  imageIndexs: string[];
  productName: string;
  productRating: number;
  productPrice: number;
  productDiscount: number;
  productDesc: string;
  productColors: string[];
  productSizes: string[];
  feedbacks?: Feedback[];
}
