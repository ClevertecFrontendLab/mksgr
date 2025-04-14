import { createBrowserRouter } from 'react-router';

import MainLayout from '~/layout/MainLayout';
import FavoritesPage from '~/pages/FavoritesPage/FavoritesPage';
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
                element: <FavoritesPage />,
            },
        ],
    },
    {
        path: '*',
        element: <>Not found!</>,
    },
]);
