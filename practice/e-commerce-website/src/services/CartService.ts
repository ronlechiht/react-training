import { HttpService } from './HttpService';
import { CartProduct } from '../types/CartProduct';
import { CART_API } from '../constants';

export class CartService {
  service = new HttpService(CART_API);

  async getCart() {
    return this.service.get<CartProduct[]>();
  }
}
