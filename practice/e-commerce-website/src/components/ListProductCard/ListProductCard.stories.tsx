import type { Meta, StoryObj } from '@storybook/react';

import ListProductCard from './ListProductCard';

const meta: Meta<typeof ListProductCard> = {
  component: ListProductCard
};

export default meta;
type Story = StoryObj<typeof ListProductCard>;

import { ProductService } from '../../services/ProductService';
import { QUERY_PARAM_KEYS } from '../../constants/constants';
const service = new ProductService();
const params = {
  [QUERY_PARAM_KEYS.page]: 1,
  [QUERY_PARAM_KEYS.limit]: 9,
  [QUERY_PARAM_KEYS.sort]: 'sold',
  [QUERY_PARAM_KEYS.order]: 'desc'
};
const products = await service.getProducts(params);

export const FirstStory: Story = {
  args: {
    products: products
  }
};
