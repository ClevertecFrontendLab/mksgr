import { createBrowserRouter } from 'react-router';

import MainLayout from '~/layout/MainLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <>1</>,
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
