import type { Meta, StoryObj } from '@storybook/react';

import ProductCard from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  component: ProductCard
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const FirstStory: Story = {
  args: {
    productId: '01',
    productName: 'Gradient Graphic T-shirt',
    productRating: 3.5,
    productPrice: 145,
    productDiscount: 0
  }
};
