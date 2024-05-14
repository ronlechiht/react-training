import type { Meta, StoryObj } from '@storybook/react';

import ProductDetails from './ProductDetails';

const meta: Meta<typeof ProductDetails> = {
  component: ProductDetails
};

export default meta;
type Story = StoryObj<typeof ProductDetails>;

export const FirstStory: Story = {
  args: {
    productId: '10',
    productName: 'One Life Graphic T-Shirt',
    productRating: 4.5,
    productPrice: 300,
    productDiscount: 40,
    productDesc:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    productColors: ['judge-grey', 'stromboli', 'martinique'],
    productSizes: ['small', 'medium', 'large', 'x-large']
  }
};
