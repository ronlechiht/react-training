import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { BUTTON_VARIANTS } from '../../constants';
import { COMPONENT_SIZES } from '../../constants';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
  args: {
    variant: BUTTON_VARIANTS.primary,
    size: COMPONENT_SIZES.large,
    label: 'Add to Cart'
  }
};
