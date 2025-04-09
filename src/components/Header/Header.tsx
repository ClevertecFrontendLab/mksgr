import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Flex,
    Hide,
    HStack,
    IconButton,
    Image,
    Show,
    Spacer,
    Text,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router';

import ProfileNotification from '../ProfileNotification/ProfileNotification';

const Header = () => {
    const logoSrc = useBreakpointValue({
        base: '/src/assets/header/logo_small.svg',
        md: '/src/assets/header/logo_big.svg',
    });

    return (
        <Box bg='lime.50' px={4} py={4}>
            <Flex align='center'>
                <Link to='/'>
                    <Image src={logoSrc} alt='Logo icon' />
                </Link>

                <Show above='xl'>
                    <Text fontSize='md' ml={32}>
                        Главная
                    </Text>
                </Show>

                <Spacer />

                <Hide above='xl'>
                    <ProfileNotification
                        imageHeightInPX='12px'
                        fontSizeInPX='12px'
                        direction='row'
                        spacing={4}
                    />
                </Hide>
                <Show above='xl'>
                    <HStack spacing={2} align='start' mr={20}>
                        <Avatar src='/src/assets/header/avatar.png' size='md'></Avatar>
                        <VStack spacing={0} align='start'>
                            <Text fontSize='lg' fontWeight='medium'>
                                Екатерина Константинопольская
                            </Text>
                            <Text fontSize='sm' color='gray.600'>
                                @bake_and_pie
                            </Text>
                        </VStack>
                    </HStack>
                </Show>
                <Hide above='xl'>
                    <IconButton
                        icon={<HamburgerIcon />}
                        variant='ghost'
                        aria-label='Меню'
                        ml={4}
                        height='32px'
                        width='32px'
                    />
                </Hide>
            </Flex>
        </Box>
    );
};

export default Header;
