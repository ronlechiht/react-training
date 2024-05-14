import type { Meta, StoryObj } from '@storybook/react';

import InputRadio from './InputRadio';

const meta: Meta<typeof InputRadio> = {
  component: InputRadio
};

export default meta;
type Story = StoryObj<typeof InputRadio>;

export const FirstStory: Story = {
  args: {
    variant: 'color',
    options: ['judge-grey', 'stromboli', 'martinique']
  }
};

export const SecondStory: Story = {
  args: {
    variant: 'size',
    options: ['small', 'medium', 'large', 'x-large']
  }
};
