import type { Meta, StoryObj } from '@storybook/react';

import InputField from './InputField';
import { DiscountIcon } from '../Icon';

const meta: Meta<typeof InputField> = {
  component: InputField
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const PromoInput: Story = {
  args: {
    icon: <DiscountIcon />,
    placeholder: 'Add promo code'
  }
};
