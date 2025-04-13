import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        lime: {
            50: '#FFFFD3',
            100: '#EAFFC7',
            150: '#D7FF94',
            300: '#C4FF61',
            400: '#B1FF2E',
            600: '#2DB100',
            800: '#134B00',
        },
        gray: {
            400: 'rgba(0, 0, 0, 0.48)',
        },
    },
    breakpoints: {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '90em', // 1440px (ПЕРЕОПРЕДЕЛЕНО!)
        '2xl': '120em', // 1536px
    },
});

export default theme;
