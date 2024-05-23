import { HttpService } from './HttpService';
import { QueryParams } from '../types/QueryParams';
import { Product } from '../types/Procduct';
import { PRODUCTS_API } from '../constants';

export class ProductService {
  service = new HttpService(PRODUCTS_API);

  async getProducts(params?: QueryParams) {
    return this.service.get<Product[]>(params);
  }
}
