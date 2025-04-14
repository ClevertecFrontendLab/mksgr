import { EditIcon, SearchIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, Grid, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

import HomeIcon from '~/assets/footer/FooterHomeIcon';

const Footer = () => (
    <Grid
        templateColumns='1fr 1fr 1fr 1fr'
        bg='lime.50'
        w='100%'
        alignItems='center'
        justifyItems='center'
        justifyContent='center'
        p='14px 0 10px 0'
    >
        <Link to='/'>
            <Flex direction='column' justify='center' align='center' gap='4px'>
                <Box position='relative' w='40px' h='40px'>
                    <Box
                        position='absolute'
                        top='50%'
                        left='50%'
                        transform='translate(-50%, -50%)'
                        w='90px'
                        h='60px'
                        borderRadius='full'
                        background='radial-gradient(circle, #C4FF61, #fff)'
                        filter='blur(10px)'
                        opacity={0.7}
                        zIndex={0}
                    />
                    <Flex
                        bg='black'
                        borderRadius='full'
                        justify='center'
                        align='center'
                        w='40px'
                        h='40px'
                        zIndex={1}
                        position='relative'
                    >
                        <HomeIcon color='lime.50' w='16px' h='16px' />
                    </Flex>
                </Box>
                <Text fontWeight='500' fontSize='14px' color='rgba(0, 0, 0, 0.64)'>
                    Главная
                </Text>
            </Flex>
        </Link>
        <Link to='/'>
            <Flex
                direction='column'
                justify='center'
                align='center'
                gap='4px'
                // p='14px 25px 10px 25px'
            >
                <Flex
                    bg='transparent'
                    borderRadius='50%'
                    justify='center'
                    align='center'
                    w='40px'
                    h='40px'
                >
                    <SearchIcon w='24px' h='24px' />
                </Flex>
                <Text fontSize='14px' color='rgba(0, 0, 0, 0.64)'>
                    Поиск
                </Text>
            </Flex>
        </Link>
        <Link to='/'>
            <Flex
                direction='column'
                justify='center'
                align='center'
                gap='4px'
                // p='14px 25px 10px 25px'
            >
                <Flex
                    bg='transparent'
                    borderRadius='50%'
                    justify='center'
                    align='center'
                    w='40px'
                    h='40px'
                >
                    <EditIcon w='24px' h='24px' />
                </Flex>
                <Text fontSize='14px' color='rgba(0, 0, 0, 0.64)'>
                    Записать
                </Text>
            </Flex>
        </Link>
        <Link to='/'>
            <Flex
                direction='column'
                justify='center'
                align='center'
                gap='4px'
                // p='14px 25px 10px 25px'
            >
                <Flex
                    bg='transparent'
                    borderRadius='50%'
                    justify='center'
                    align='center'
                    w='40px'
                    h='40px'
                >
                    <Avatar
                        w='40px'
                        h='40px'
                        name='Dan Abrahmov'
                        src='https://bit.ly/dan-abramov'
                    />
                </Flex>
                <Text fontSize='14px' color='rgba(0, 0, 0, 0.64)'>
                    Мой профиль
                </Text>
            </Flex>
        </Link>
    </Grid>
);

export default Footer;
