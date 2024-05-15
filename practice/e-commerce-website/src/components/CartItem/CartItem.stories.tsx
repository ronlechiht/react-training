import type { Meta, StoryObj } from '@storybook/react';

import CartItem from './CartItem';

const meta: Meta<typeof CartItem> = {
  component: CartItem
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const CartProduct: Story = {
  args: {
    productId: '01',
    productName: 'gradient graphic t-shirt',
    productPrice: 145,
    productDiscount: 0,
    productSize: 'large',
    productColor: 'white',
    productQuantity: 1
  }
};
