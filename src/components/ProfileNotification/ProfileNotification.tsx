import { HStack, Image, Stack, Text } from '@chakra-ui/react';

import { ProfileNotificationProps } from './ProfileNotification.props';

const ProfileNotification = ({ direction, spacing }: ProfileNotificationProps) => (
    <Stack direction={direction} spacing={spacing}>
        <HStack spacing={2}>
            <Image src='/src/assets/header/icon_1.svg' alt='Profile notification icon' />
            <Text fontSize='sm' fontWeight='medium' color='lime.600'>
                185
            </Text>
        </HStack>
        <HStack spacing={2}>
            <Image src='/src/assets/header/icon_2.svg' alt='Profile notification icon' />
            <Text fontSize='sm' fontWeight='medium' color='lime.600'>
                589
            </Text>
        </HStack>
        <HStack spacing={2}>
            <Image src='/src/assets/header/icon_3.svg' alt='Profile notification icon' />
            <Text fontSize='sm' fontWeight='medium' color='lime.600'>
                587
            </Text>
        </HStack>
    </Stack>
);

export default ProfileNotification;
