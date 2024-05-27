import { Feedback } from './Feedback';

export interface Product {
  productId: string;
  imageIndexs: string[];
  productName: string;
  productRating: number;
  productPrice: number;
  productDiscount: number;
  productDesc: string;
  productColors: string[];
  productSizes: string[];
  sold: number;
  feedbacks: Feedback[];
}
