import type { Meta, StoryObj } from '@storybook/react';

import Counter from './Counter';

const meta: Meta<typeof Counter> = {
  component: Counter
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const FirstStory: Story = {
  args: {
    firstQuantity: 1,
    size: 'lg'
  }
};
