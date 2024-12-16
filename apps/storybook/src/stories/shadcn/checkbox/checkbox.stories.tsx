import { Checkbox } from '@sb/react-shadcn';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Shadcn-ui/Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
  // args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: 'test',
  },
};
