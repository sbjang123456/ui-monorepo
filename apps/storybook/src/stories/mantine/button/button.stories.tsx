import { Button } from '@sb/react-mantine';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Mantine/Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'filled',
    children: 'Label',
  },
};
