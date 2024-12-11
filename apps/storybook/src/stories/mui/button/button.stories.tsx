import { Button } from '@sb/react-mui';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'MUI/Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};
