import { Button } from '@sb/react-shadcn';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Shadcn-ui/Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  // args: { onClick: fn() },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Label',
    variant: 'default',
    size: 'default',
  },
};
