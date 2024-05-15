import type { Meta, StoryObj } from '@storybook/react';

import InputRadio from './InputRadio';

import { INPUT_RADIO_VARIANTS } from '../../constants';

const meta: Meta<typeof InputRadio> = {
  component: InputRadio
};

export default meta;
type Story = StoryObj<typeof InputRadio>;

export const FirstStory: Story = {
  args: {
    variant: INPUT_RADIO_VARIANTS.color,
    options: ['judge-grey', 'stromboli', 'martinique']
  }
};

export const SecondStory: Story = {
  args: {
    variant: INPUT_RADIO_VARIANTS.size,
    options: ['small', 'medium', 'large', 'x-large']
  }
};
