import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Flex,
    HStack,
    IconButton,
    Image,
    Spacer,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ProfileNotification from '../ProfileNotification/ProfileNotification';

const Header = () => (
    <Box bg='lime.50' px={4} py={4} data-test-id='header' w='100%'>
        <Flex align='center'>
            <Link to='/'>
                <Image
                    display={{ base: 'block', md: 'none' }}
                    src='/src/assets/header/logo_small.svg'
                    alt='Logo icon'
                />
                <Image
                    display={{ base: 'none', md: 'block' }}
                    src='/src/assets/header/logo_big.svg'
                    alt='Logo icon'
                />
            </Link>

            <Box display={{ base: 'none', xl: 'block' }}>
                <Breadcrumbs />
            </Box>

            <Spacer />

            <Box display={{ base: 'flex', xl: 'none' }}>
                <ProfileNotification
                    imageHeightInPX='12px'
                    fontSizeInPX='12px'
                    direction='row'
                    spacing={4}
                />
            </Box>

            <Box display={{ base: 'none', xl: 'flex' }} mr={20}>
                <HStack spacing={2} align='start'>
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
            </Box>

            <IconButton
                icon={<HamburgerIcon />}
                variant='ghost'
                aria-label='Меню'
                ml={4}
                height='32px'
                width='32px'
                display={{ base: 'inline-flex', xl: 'none' }}
            />
        </Flex>
    </Box>
);

export default Header;
