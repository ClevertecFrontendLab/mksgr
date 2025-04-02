import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

// import Header from '../components/Header/Header';
// import Sidebar from '../components/Sidebar/Sidebar';

const MainLayout = () => (
    <Grid templateRows='auto 1fr' templateColumns={{ base: '1fr', md: '250px 1fr' }} minH='100vh'>
        <GridItem as='header' colSpan={2} bg='green.100' p={4}>
            {/* <Header /> */}
        </GridItem>

        <GridItem as='aside' display={{ base: 'none', md: 'block' }} bg='gray.50' p={4}>
            {/* <Sidebar /> */}
        </GridItem>

        <GridItem as='main' bg='white' p={6}>
            <Outlet />
        </GridItem>
    </Grid>
);

export default MainLayout;
