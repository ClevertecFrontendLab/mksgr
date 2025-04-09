import { EditIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text, VStack } from '@chakra-ui/react';

import ProfileNotification from '../ProfileNotification/ProfileNotification';

const NotificationSidebar = () => (
    <Flex direction='column' justify='space-between' align='center' pt={6} pb='52px' h='100%'>
        <ProfileNotification
            fontSizeInPX='16px'
            imageHeightInPX='16px'
            direction='column'
            spacing={12}
        />
        <VStack spacing={3} align='center'>
            <IconButton
                aria-label='Записать рецепт'
                icon={<EditIcon boxSize={6} color='#FFF' />}
                size='lg'
                isRound
                bg='black'
                position='relative'
                _after={{
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '250%',
                    height: '250%',
                    transform: 'translate(-50%, -50%)',
                    background:
                        'radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)',
                    zIndex: '-1', // Чтобы эффект был под кнопкой
                    borderRadius: '50%',
                }}
                _hover={{
                    bg: 'black',
                }}
            ></IconButton>
            <Text fontSize='12px' lineHeight='133%' color='rgba(0, 0, 0, 0.64)'>
                Записать рецепт
            </Text>
        </VStack>
    </Flex>
);

export default NotificationSidebar;
