import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';
import NotificationSidebar from '~/components/NotificationSidebar/NotificationSidebar';
import Sidebar from '~/components/Sidebar/Sidebar';

const MainLayout = () => (
    <Grid
        templateRows='auto 1fr auto'
        templateColumns={{ base: '1fr', xl: '256px 1fr 200px' }}
        h='100vh'
    >
        <GridItem as='header' colSpan={3} position='fixed' top='0' right='0' left='0' zIndex={1000}>
            <Header />
        </GridItem>

        <GridItem
            as='aside'
            display={{ base: 'none', xl: 'block' }}
            position='fixed'
            top='80px'
            left='0'
            h='calc(100vh - 80px)'
            w='256px'
            bg='white'
            overflowY='auto'
            zIndex={999}
        >
            <Sidebar />
        </GridItem>

        <GridItem
            as='main'
            colSpan={3}
            pt='96px'
            pb={{ base: '95px', xl: '0' }}
            px={{ base: '16px', md: '20px', xl: '24px' }}
            ml={{ xl: '256px' }}
            mr={{ xl: '200px' }}
        >
            <Outlet />
        </GridItem>

        <GridItem
            as='aside'
            display={{ base: 'none', xl: 'block' }}
            position='fixed'
            top='80px'
            right='0'
            h='calc(100vh - 80px)'
            w='200px'
            bg='white'
            overflowY='auto'
            zIndex={999}
        >
            <NotificationSidebar />
        </GridItem>
        <GridItem
            data-test-id='footer'
            as='footer'
            display={{ base: 'block', xl: 'none' }}
            position='fixed'
            bottom='0'
            left='0'
            right='0'
            zIndex={1000}
            bg='white'
        >
            <Footer />
        </GridItem>
    </Grid>
);

export default MainLayout;
