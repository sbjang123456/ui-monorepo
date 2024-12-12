import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from '@mantine/core';

type ButtonProps = MantineButtonProps;
export const Button = ({ children, ...props }: ButtonProps) => {
  return <MantineButton {...props}>{children}</MantineButton>;
};
