import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Header from '~/components/Header/Header';
import NotificationSidebar from '~/components/NotificationSidebar/NotificationSidebar';
import Sidebar from '~/components/Sidebar/Sidebar';

const MainLayout = () => (
    <Grid
        templateRows='auto 1fr'
        templateColumns={{ base: '1fr', xl: '256px 1fr 200px' }}
        minH='100vh'
    >
        <GridItem as='header' colSpan={3}>
            <Header />
        </GridItem>

        <GridItem as='aside' display={{ base: 'none', xl: 'block' }}>
            <Sidebar />
        </GridItem>

        <GridItem as='main' bg='white' p={6}>
            <Outlet />
        </GridItem>

        <GridItem as='aside' display={{ base: 'none', xl: 'block' }}>
            <NotificationSidebar />
        </GridItem>
    </Grid>
);

export default MainLayout;
