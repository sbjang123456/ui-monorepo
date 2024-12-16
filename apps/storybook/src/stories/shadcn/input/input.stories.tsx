import { Input } from '@sb/react-shadcn';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Shadcn-ui/Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  // args: { onClick: fn() },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: 'email',
    placeholder: 'Email',
  },
};
