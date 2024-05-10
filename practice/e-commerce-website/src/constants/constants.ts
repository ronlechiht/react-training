const API_URL = 'https://ronlechi-e-commerce-json-server.vercel.app';
//const API_URL = 'http://localhost:3000'
export const PRODUCTS_API = API_URL + '/products';

/**
 * query param keys of Json-server
 */
export const enum QUERY_PARAM_KEYS {
  page = '_page',
  limit = '_limit',
  search = 'name',
  sort = '_sort',
  order = '_order'
}
