import type { Meta, StoryObj } from '@storybook/react';

import Price from './Price';

const meta: Meta<typeof Price> = {
  component: Price
};

export default meta;
type Story = StoryObj<typeof Price>;

export const FirstStory: Story = {
  args: {
    price: 150,
    discount: 30
  }
};
