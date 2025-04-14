import { createBrowserRouter } from 'react-router';

import { CATEGORIES } from '~/Data/Data';
import MainLayout from '~/layout/MainLayout';
import FavoritesPage from '~/pages/FavoritesPage/FavoritesPage';
import MainPage from '~/pages/MainPage/MainPage';
import VeganCuisinePage from '~/pages/VeganCuisinePage/VeganCuisinePage';

const catRoutes = CATEGORIES.map((cat) => ({
    path: `${cat.link}/*`,
    element: <VeganCuisinePage />,
}));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            ...catRoutes,
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
