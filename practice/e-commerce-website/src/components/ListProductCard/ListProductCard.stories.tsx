import type { Meta, StoryObj } from '@storybook/react';

import ListProductCard from './ListProductCard';

const meta: Meta<typeof ListProductCard> = {
  component: ListProductCard
};

export default meta;
type Story = StoryObj<typeof ListProductCard>;

const products = [
    {
      productId: '01',
      productName: 'Gradient Graphic T-shirt',
      productRating: 3.5,
      productPrice: 145,
      productDiscount: 0,
      sold: 100
    },
    {
      productId: '02',
      productName: 'Polo with Tipping Details',
      productRating: 4.5,
      productPrice: 180,
      productDiscount: 0,
      sold: 90
    },
    {
      productId: '03',
      productName: 'Black Striped T-shirt',
      productRating: 5,
      productPrice: 150,
      productDiscount: 30,
      sold: 80
    },
    {
      productId: '04',
      productName: 'Skinny Fit Jeans',
      productRating: 3.5,
      productPrice: 260,
      productDiscount: 20,
      sold: 70
    },
    {
      productId: '05',
      productName: 'Checkered Shirt',
      productRating: 4.5,
      productPrice: 180,
      productDiscount: 0,
      sold: 60
    },
    {
      productId: '06',
      productName: 'Sleeve Striped T-shirt',
      productRating: 4.5,
      productPrice: 160,
      productDiscount: 30,
      sold: 100
    },
    {
      productId: '07',
      productName: 'Vertical Striped Shirt',
      productRating: 5,
      productPrice: 232,
      productDiscount: 20,
      sold: 90
    },
    {
      productId: '08',
      productName: 'Courage Graphic T-shirt',
      productRating: 4,
      productPrice: 145,
      productDiscount: 0,
      sold: 80
    },
    {
      productId: '09',
      productName: 'Loose Fit Bermuda Shorts',
      productRating: 3,
      productPrice: 80,
      productDiscount: 0,
      sold: 70
    }
]

export const FirstStory: Story = {
  args: {
    products: products
  }
};