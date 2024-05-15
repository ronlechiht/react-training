import type { Meta, StoryObj } from '@storybook/react';

import Cart from './Cart';

const meta: Meta<typeof Cart> = {
  component: Cart
};

export default meta;
type Story = StoryObj<typeof Cart>;

const cartProducts = [
  {
    productId: '01',
    productName: 'gradient graphic t-shirt',
    productPrice: 145,
    productDiscount: 0,
    productSize: 'large',
    productColor: 'white',
    productQuantity: 1
  },
  {
    productId: '02',
    productName: 'gradient graphic t-shirt',
    productPrice: 145,
    productDiscount: 0,
    productSize: 'large',
    productColor: 'white',
    productQuantity: 1
  },
  {
    productId: '03',
    productName: 'gradient graphic t-shirt',
    productPrice: 145,
    productDiscount: 0,
    productSize: 'large',
    productColor: 'white',
    productQuantity: 1
  }
];

export const CartProduct: Story = {
  args: {
    cartProducts: cartProducts
  }
};
