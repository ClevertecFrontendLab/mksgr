import { HStack, Image, Text } from '@chakra-ui/react';

import { BadgeProps } from './Badge.types';

const Badge = ({ children, image, ...props }: BadgeProps) => (
    <HStack {...props} borderRadius='4px' py='2px' px='8px' gap='8px'>
        <Image src={image} alt='Badge icon' w='16px' h='16px' />
        <Text fontSize='14px' lineHeight='20px'>
            {children}
        </Text>
    </HStack>
);

export default Badge;
