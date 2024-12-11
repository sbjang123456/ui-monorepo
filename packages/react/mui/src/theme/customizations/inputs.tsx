import { alpha, Theme, Components } from '@mui/material/styles';

export const inputsCustomizations: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      //   disableTouchRipple: true,
      //   disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in',
        '&:focus-visible': {
          outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: '2px',
        },
      }),
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    styleOverrides: {
      //   root: ({ theme }) => ({
      //     //     boxShadow: 'none',
      //         borderRadius: theme.shape.borderRadius,
      //     //     textTransform: 'none',
      //     //     variants: [
      //     //       {
      //     //         props: {
      //     //           size: 'small',
      //     //         },
      //     //         style: {
      //     //           height: '2.25rem',
      //     //           padding: '8px 12px',
      //     //         },
      //     //       },
      //     //       {
      //     //         props: {
      //     //           size: 'medium',
      //     //         },
      //     //         style: {
      //     //           height: '2.5rem', // 40px
      //     //         },
      //     //       },
      //     //     ],
      //   }),
    },
  },
};
