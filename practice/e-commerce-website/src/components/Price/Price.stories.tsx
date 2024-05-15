import type { Meta, StoryObj } from '@storybook/react';

import Price from './Price';

import { COMPONENT_SIZES } from '../../constants';

const meta: Meta<typeof Price> = {
  component: Price
};

export default meta;
type Story = StoryObj<typeof Price>;

export const ProductPrice: Story = {
  args: {
    price: 150,
    discount: 30,
    size: COMPONENT_SIZES.large
  }
};
