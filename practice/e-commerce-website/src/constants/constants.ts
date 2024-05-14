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

/**
 * Define Size of component
 */
export const enum COMPONENT_SIZES {
  small = 'sm',
  medium = 'md',
  large = 'lg'
}

/**
 * Define variants of button
 */
export const enum BUTTON_VARIANTS {
  primary = 'primary',
  secondary = 'secondary',
  outline = 'outline'
}

/**
 * Define variants of InputRadio
 */
export const enum INPUT_RADIO_VARIANTS {
  color = 'color',
  size = 'size'
}
