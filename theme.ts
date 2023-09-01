import { alpha, createTheme, darken, rgbToHex } from '@mui/material';

import { createShadow } from '@/utils/helpers';

const Colors = {
  primary: { main: '#CE3D4C', light: '#CE3D4CB8', dark: '#AC2C39', contrastText: '#FFFFFF' },
  secondary: { main: '#222F3F', light: '#d39535', dark: '#0F1620', contrastText: '#FFFFFF' },
  text: { primary: '#0F1620', secondary: '#9CA0A6', disabled: rgbToHex(alpha('#323232', 0.6)) },
  background: { default: '#F0F4F8', paper: '#FFFFFF' },
  error: { main: '#DC4444' },
  success: { main: '#3DCE77' },
};

const theme = createTheme({
  palette: {
    primary: Colors.primary,
    secondary: Colors.secondary,
    background: Colors.background,
    text: Colors.text,
    error: Colors.error,
    success: Colors.success,
  },

  typography: {
    fontFamily: 'Open Sans',

    h1: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '36px',
      textTransform: 'uppercase',
    },

    h2: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: '30px',
      textTransform: 'uppercase',
    },

    button: {
      lineHeight: '34px',
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: { fontWeight: 700 },
      },
    },

    MuiCardHeader: {
      styleOverrides: {
        root: { padding: '20px 20px 0' },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 20,
          '&:last-child': {
            paddingBottom: 20,
          },
        },
      },
    },

    MuiDialog: {
      defaultProps: { scroll: 'body' },
      styleOverrides: {
        container: {
          backgroundColor: alpha(Colors.secondary.main, 0.6),
        },
      },
    },

    MuiDialogTitle: {
      defaultProps: { textTransform: 'uppercase', textAlign: 'center' },
    },

    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '20px !important',
        },
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: { padding: '0 20px 20px' },
      },
    },

    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },

      styleOverrides: {
        root: { color: Colors.secondary.main },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: { height: '100%', borderRadius: 8, backgroundColor: alpha(Colors.primary.light, 0.08) },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: 0,
          maxWidth: 'auto',
          padding: '4px 48px',
          margin: '0 4px',
          fontSize: 16,
          borderRadius: 8,
          textTransform: 'initial',
        },
      },
    },

    MuiTable: {
      styleOverrides: {
        root: { borderSpacing: 2, borderCollapse: 'separate' },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: 'background-color 200ms',
          backgroundColor: darken(Colors.background.default, 0.0125),
          '&:hover': { backgroundColor: darken(Colors.background.default, 0.025) },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: { padding: '10px 14px', backgroundColor: darken(Colors.background.default, 0.05), fontWeight: 700 },
        root: { padding: '6px 14px', borderRadius: 8, border: 'none' },
      },
    },
  },

  breakpoints: {
    values: { xs: 0, sm: 568, md: 768, lg: 1536, xl: 1920 },
  },

  shape: { borderRadius: 8 },

  shadows: [
    'none',
    createShadow(1, 1, 1, 0),
    createShadow(2, 2, 2, 0),
    createShadow(3, 3, 3, 0),
    createShadow(4, 4, 4, 0),
    createShadow(5, 5, 5, 0),
    createShadow(6, 6, 6, 0),
    createShadow(7, 7, 7, 0),
    createShadow(8, 8, 8, 0),
    createShadow(9, 9, 9, 0),
    createShadow(10, 10, 10, 0),
    createShadow(11, 11, 11, 0),
    createShadow(12, 12, 12, 0),
    createShadow(13, 13, 13, 0),
    createShadow(14, 14, 14, 0),
    createShadow(15, 15, 15, 0),
    createShadow(16, 16, 16, 0),
    createShadow(17, 17, 17, 0),
    createShadow(18, 18, 18, 0),
    createShadow(19, 19, 19, 0),
    createShadow(20, 20, 20, 0),
    createShadow(21, 21, 21, 0),
    createShadow(22, 22, 22, 0),
    createShadow(23, 23, 23, 0),
    createShadow(24, 24, 24, 0),
  ],
});

export default theme;
