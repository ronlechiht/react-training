import type { Meta, StoryObj } from '@storybook/react';

import CartItem from './CartItem';

const meta: Meta<typeof CartItem> = {
  component: CartItem
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const CartProduct: Story = {
  args: {
    cartItem: {
      id: '01',
      productId: '01',
      productName: 'AAAAAA',
      productPrice: 1000,
      productDiscount: 20,
      productSize: 'large',
      productColor: 'white',
      productQuantity: 1
    }
  }
};
