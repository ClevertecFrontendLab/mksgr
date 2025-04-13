import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Header from '~/components/Header/Header';
import NotificationSidebar from '~/components/NotificationSidebar/NotificationSidebar';
import Sidebar from '~/components/Sidebar/Sidebar';

const MainLayout = () => (
    <Grid
        templateRows='auto 1fr'
        templateColumns={{ base: '1fr', xl: '256px 1fr 200px' }}
        h='100vh'
    >
        <GridItem as='header' colSpan={3}>
            <Header />
        </GridItem>

        <GridItem as='aside' display={{ base: 'none', xl: 'block' }}>
            <Sidebar />
        </GridItem>

        <GridItem
            as='main'
            p={{ base: '16px', md: '16px 20px', xl: '32px 80px 0 24px' }}
            overflowY='auto'
        >
            <Outlet />
        </GridItem>

        <GridItem as='aside' display={{ base: 'none', xl: 'block' }}>
            <NotificationSidebar />
        </GridItem>
    </Grid>
);

export default MainLayout;
