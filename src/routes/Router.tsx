import { createBrowserRouter } from 'react-router';

import MainLayout from '~/layout/MainLayout';
import FavoritesPage from '~/pages/FavoritesPage/FavoritesPage';
import MainPage from '~/pages/MainPage/MainPage';
import VeganCuisinePage from '~/pages/VeganCuisinePage/VeganCuisinePage';

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
                element: <VeganCuisinePage />,
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
