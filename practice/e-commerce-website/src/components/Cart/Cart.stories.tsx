import type { Meta, StoryObj } from '@storybook/react';

import Cart from './Cart';

const meta: Meta<typeof Cart> = {
  component: Cart
};

export default meta;
type Story = StoryObj<typeof Cart>;

const cartProducts = [
  {
    cartItemId: '01',
    productId: '01',
    productSize: 'large',
    productColor: 'white',
    productQuantity: 2
  },
  {
    cartItemId: '02',
    productId: '05',
    productSize: 'medium',
    productColor: 'red',
    productQuantity: 3
  },
  {
    cartItemId: '03',
    productId: '04',
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
