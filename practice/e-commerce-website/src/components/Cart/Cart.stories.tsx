import type { Meta, StoryObj } from '@storybook/react';

import Cart from './Cart';

const meta: Meta<typeof Cart> = {
  component: Cart
};

export default meta;
type Story = StoryObj<typeof Cart>;

const cartProducts = [
  {
    id: '01',
    productId: '01',
    productName: 'AAAA',
    productPrice: 1000,
    productDiscount: 20,
    productSize: 'large',
    productColor: 'white',
    productQuantity: 2
  },
  {
    id: '02',
    productId: '05',
    productName: 'AAAA',
    productPrice: 1000,
    productDiscount: 20,
    productSize: 'medium',
    productColor: 'red',
    productQuantity: 3
  },
  {
    id: '03',
    productId: '04',
    productName: 'AAAA',
    productPrice: 1000,
    productDiscount: 20,
    productSize: 'large',
    productColor: 'blue',
    productQuantity: 4
  }
];

export const CartProduct: Story = {
  args: {
    cartProducts: cartProducts
  }
};
