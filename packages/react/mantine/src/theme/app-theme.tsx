import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  //   colors: {
  // brand: [
  //   '#000',
  //   '#000',
  //   '#000',
  //   '#000',
  //   '#000',
  //   '#000',
  //   '#000',
  //   '#000',
  //   '#000',
  //   '#000',
  // ],
  //   },
});

export const AppTheme = ({ children }: { children: React.ReactNode }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
