import { LinkProps } from '../types/LinkProps';

const API_URL = 'https://65f1b60d034bdbecc76373f5.mockapi.io';
//const API_URL = 'https://ronlechi-e-commerce-json-server.vercel.app';
//const API_URL = 'http://localhost:3000';
export const PRODUCTS_API = API_URL + '/products';
export const CART_API = API_URL + '/cart';

/**
 * Difine routes url
 */
export const ROUTES = {
  homePage: '/',
  detailsPage: '/details',
  cartPage: '/cart',
  accountPage: '/account',
  errorPage: '/error-page'
};

/**
 * query param keys of Json-server
 */
export const enum QUERY_PARAM_KEYS {
  page = 'page',
  limit = 'limit',
  search = 'name',
  sort = 'sortBy',
  order = 'order'
}

/**
 * Define Size of component
 */
export const enum COMPONENT_SIZES {
  default = 'default',
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

/**
 * Define variants of Text
 */
export const enum TEXT_VARIANTS {
  default = 'default',
  title = 'title',
  name = 'name'
}

/**
 * Define variants of Currency
 */
export const enum CURRENCY_VARIANTS {
  default = 'default',
  discount = 'discount'
}

export const COMPANY_NAV_LIST: LinkProps[] = [
  { label: 'about', path: '#' },
  { label: 'features', path: '#' },
  { label: 'works', path: '#' },
  { label: 'career', path: '#' }
];

export const HELP_NAV_LIST: LinkProps[] = [
  { label: 'customer support', path: '#' },
  { label: 'delivery details', path: '#' },
  { label: 'term & conditions', path: '#' },
  { label: 'privacy policy', path: '#' }
];

export const FAQ_NAV_LIST: LinkProps[] = [
  { label: 'account', path: '#' },
  { label: 'manage deliveries', path: '#' },
  { label: 'orders', path: '#' },
  { label: 'payments', path: '#' }
];

export const RESOURCES_NAV_LIST: LinkProps[] = [
  { label: 'free ebooks', path: '#' },
  { label: 'development tutorial', path: '#' },
  { label: 'how to - blog', path: '#' },
  { label: 'youtube playlist', path: '#' }
];

export const PAYMENT_BADGE_LIST = [
  { url: 'visa.svg', alt: 'visa badge' },
  { url: 'mastercard.svg', alt: 'mastercard badge' },
  { url: 'paypal.svg', alt: 'paypal badge' },
  { url: 'apple-pay.svg', alt: 'apple pay badge' },
  { url: 'g-pay.svg', alt: 'google pay badge' }
];

export const enum EMPTY_MSG_LIST {
  product = 'There are no product to display',
  feedback = 'There are no feedback to display',
  cart = 'There are no product in cart'
}
