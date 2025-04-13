import { createBrowserRouter } from 'react-router';

import MainLayout from '~/layout/MainLayout';
import MainPage from '~/pages/MainPage/MainPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/vegan-cuisine',
                element: <>Vegan cuisine</>,
            },
            {
                path: '/favorites',
                element: <>4</>,
            },
        ],
    },
    {
        path: '*',
        element: <>Not found!</>,
    },
]);
