import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';

import { IUserAvatar } from './UserAvatar.types';

const UserAvatar = ({ name, userImage, nickname }: IUserAvatar) => (
    <Flex flex='1' gap='3' alignItems='center'>
        <Avatar name={name} src={userImage} />

        <Box>
            <Heading
                fontSize={{ base: '16px', xl: '18px' }}
                fontWeight='500'
                isTruncated
                maxW={{ base: '232px', md: '154px', xl: '174px', '2xl': '318px' }}
            >
                {name}
            </Heading>
            <Text fontSize={{ base: '12px', xl: '14px' }} color='rgba(0, 0, 0, 0.64)'>
                {nickname}
            </Text>
        </Box>
    </Flex>
);

export default UserAvatar;
