import type { Meta, StoryObj } from '@storybook/react';

import Quantity from './Quantity';

import { COMPONENT_SIZES } from '../../constants';

const meta: Meta<typeof Quantity> = {
  component: Quantity
};

export default meta;
type Story = StoryObj<typeof Quantity>;

export const QuantityBar: Story = {
  args: {
    firstQuantity: 1,
    size: COMPONENT_SIZES.large
  }
};
