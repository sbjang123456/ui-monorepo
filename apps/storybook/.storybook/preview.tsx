import React from 'react';
import type { Preview } from '@storybook/react';
import { AppTheme as MuiAppTheme } from '@sb/react-mui';
import { AppTheme as MantineAppTheme } from '@sb/react-mantine';

import '@sb/react-shadcn/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const fileName = context.parameters.fileName;
      if (fileName?.includes('/mui/')) {
        return (
          <MuiAppTheme>
            <Story />
          </MuiAppTheme>
        );
      }

      if (fileName?.includes('/mantine/')) {
        return (
          <MantineAppTheme>
            <Story />
          </MantineAppTheme>
        );
      }

      // if (context.parameters.fileName?.includes('/antd/')) {
      //   return (
      //     <ConfigProvider theme={antdTheme}>
      //       <Story />
      //     </ConfigProvider>
      //   );
      // }

      return <Story />;
    },
  ],
};

export default preview;
