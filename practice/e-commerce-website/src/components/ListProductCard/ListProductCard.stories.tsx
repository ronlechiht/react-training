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
    imageIndexs: ['01', '02', '03'],
    productName: 'Gradient Graphic T-shirt',
    productRating: 3.5,
    productPrice: 145,
    productDiscount: 0,
    productDesc:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    productColors: ['judge-grey', 'stromboli', 'martinique'],
    productSizes: ['small', 'medium', 'large', 'x-large'],
    sold: 100
  },
  {
    productId: '02',
    imageIndexs: ['01', '02', '03'],
    productName: 'Polo with Tipping Details',
    productRating: 4.5,
    productPrice: 180,
    productDiscount: 0,
    productDesc:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    productColors: ['judge-grey', 'stromboli', 'martinique'],
    productSizes: ['small', 'medium', 'large', 'x-large'],
    sold: 90
  },
  {
    productId: '03',
    imageIndexs: ['01', '02', '03'],
    productName: 'Black Striped T-shirt',
    productRating: 5,
    productPrice: 150,
    productDiscount: 30,
    productDesc:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    productColors: ['judge-grey', 'stromboli', 'martinique'],
    productSizes: ['small', 'medium', 'large', 'x-large'],
    sold: 80
  },
  {
    productId: '04',
    imageIndexs: ['01', '02', '03'],
    productName: 'Skinny Fit Jeans',
    productRating: 3.5,
    productPrice: 260,
    productDiscount: 20,
    productDesc:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    productColors: ['judge-grey', 'stromboli', 'martinique'],
    productSizes: ['small', 'medium', 'large', 'x-large'],
    sold: 70
  },
  {
    productId: '05',
    imageIndexs: ['01', '02', '03'],
    productName: 'Checkered Shirt',
    productRating: 4.5,
    productPrice: 180,
    productDiscount: 0,
    productDesc:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    productColors: ['judge-grey', 'stromboli', 'martinique'],
    productSizes: ['small', 'medium', 'large', 'x-large'],
    sold: 60
  },
  {
    productId: '06',
    imageIndexs: ['01', '02', '03'],
    productName: 'Sleeve Striped T-shirt',
    productRating: 4.5,
    productPrice: 160,
    productDiscount: 30,
    productDesc:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    productColors: ['judge-grey', 'stromboli', 'martinique'],
    productSizes: ['small', 'medium', 'large', 'x-large'],
    sold: 100
  },
  {
    productId: '07',
    imageIndexs: ['01', '02', '03'],
    productName: 'Vertical Striped Shirt',
    productRating: 5,
    productPrice: 232,
    productDiscount: 20,
    productDesc:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    productColors: ['judge-grey', 'stromboli', 'martinique'],
    productSizes: ['small', 'medium', 'large', 'x-large'],
    sold: 90
  },
  {
    productId: '08',
    imageIndexs: ['01', '02', '03'],
    productName: 'Courage Graphic T-shirt',
    productRating: 4,
    productPrice: 145,
    productDiscount: 0,
    productDesc:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    productColors: ['judge-grey', 'stromboli', 'martinique'],
    productSizes: ['small', 'medium', 'large', 'x-large'],
    sold: 80
  },
  {
    productId: '09',
    imageIndexs: ['01', '02', '03'],
    productName: 'Loose Fit Bermuda Shorts',
    productRating: 3,
    productPrice: 80,
    productDiscount: 0,
    productDesc:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    productColors: ['judge-grey', 'stromboli', 'martinique'],
    productSizes: ['small', 'medium', 'large', 'x-large'],
    sold: 70
  }
];

export const ListProduct: Story = {
  args: {
    products: products
  }
};
