import { extendTheme } from '@chakra-ui/react'

import '@fontsource/glass-antiqua';
import '@fontsource/zen-loop';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#f5e8ff',
      100: '#ebd1ff',
      200: '#e0baff',
      300: '#d5a3ff',
      400: '#ca8cff',
      500: '#bf75ff',
      600: '#b45eff',
      700: '#a947ff',
      800: '#9e30ff',
      900: '#9319ff',
      A100: '#8802ff',
    },
    secondary: {
      100: "#f8f8ff",
      500: "#373434",
      900: "#ffac42",
    }
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
      },
    },
  },
  styles: {
    global: {
      'p': {
        fontFamily: 'Zen Loop, system-ui',
      },
      'button': {
        fontFamily: 'Zen Loop, system-ui',
      },
    },
  },
})
