import type { Meta, StoryObj } from '@storybook/react';

import Rating from './Rating';

import { COMPONENT_SIZES } from '../../constants';

const meta: Meta<typeof Rating> = {
  component: Rating
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const FirstStory: Story = {
  args: {
    rating: 5,
    size: COMPONENT_SIZES.large
  }
};
