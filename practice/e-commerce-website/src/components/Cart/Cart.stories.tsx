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
    productQuantity: 2
  },
  {
    productId: '05',
    productName: 'checkered shirt',
    productPrice: 180,
    productDiscount: 0,
    productSize: 'medium',
    productColor: 'red',
    productQuantity: 3
  },
  {
    productId: '04',
    productName: 'skinny fit jeans',
    productPrice: 260,
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
