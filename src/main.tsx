import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import { store } from '~/store/configure-store.ts';

import { router } from './routes/Router';
import theme from './theme/theme';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ChakraProvider>
    </StrictMode>,
);
