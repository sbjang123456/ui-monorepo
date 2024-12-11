// import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { useMemo } from 'react';
// import { inputsCustomizations } from './customizations/inputs';
// import { dataDisplayCustomizations } from './customizations/dataDisplay';
// import { feedbackCustomizations } from './customizations/feedback';
// import { navigationCustomizations } from './customizations/navigation';
// import { surfacesCustomizations } from './customizations/surfaces';
// import { colorSchemes, typography, shadows, shape } from './themePrimitives';

type AppThemeProps = {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
};

export function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'template',
          },
          //   colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
          //   typography,
          //   shadows,
          //   shape,
          components: {
            // ...inputsCustomizations,
            // ...dataDisplayCustomizations,
            // ...feedbackCustomizations,
            // ...navigationCustomizations,
            // ...surfacesCustomizations,
            ...themeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
