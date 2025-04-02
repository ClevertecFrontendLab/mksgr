import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        lime: {
            50: '#FFFFD3',
            600: '#2DB100',
        },
    },
    breakpoints: {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '90em', // 1440px (ПЕРЕОПРЕДЕЛЕНО!)
        '2xl': '96em', // 1536px
    },
});

export default theme;
