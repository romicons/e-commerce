import { extendTheme } from '@chakra-ui/react';

import '@fontsource/glass-antiqua';
import '@fontsource/zen-loop';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      500: '#bf75ff',
      600: '#b45eff',
      700: '#a947ff',
    },
    secondary: {
      100: "#f8f8ff",
      300: "#fff5ee",
      500: "#373434",
      900: "#ffac42",
    },
    dark: {
      primary: {
        500: '#bf75ff',
        600: '#b45eff',
        700: '#a947ff',
      },
      secondary: {
        100: "#1a1a1a", 
        300: "#292929",
        500: "#e0e0e0",
        900: "#ffac42",
      },
    },
  },
  fonts: {
    heading: 'Glass Antiqua, system-ui',
    body: 'Zen Loop, system-ui',
    button: 'Zen Loop, system-ui',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        custom: {
          bg: 'primary.700',
          color: 'secondary.100',
          _hover: {
            bg: 'secondary.900',
          },
        },
        custom2: {
          bg: {
            light: 'secondary.100',
            dark: 'secondary.500',
          },
          color: {
            light: 'primary.500',
            dark: 'primary.600',
          },
          _hover: {
            color: {
              light: 'secondary.900',
              dark: 'secondary.100',
            },
          },
        },
      },
    },
  },
  styles: {
    global: (props) => ({
      p: {
        fontFamily: 'Zen Loop, system-ui',
      },
      button: {
        fontFamily: 'Zen Loop, system-ui',
      },
      body: {
        bg: props.colorMode === 'dark'
          ? 'linear-gradient(to bottom right, secondary.500, secondary.500)'
          : 'linear-gradient(to bottom right, secondary.100, secondary.300)',
        color: props.colorMode === 'dark' ? 'dark.500' : 'secondary.500',
      },
    }),
  },
});
