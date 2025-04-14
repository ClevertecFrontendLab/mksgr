import { HStack, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { PostButtonProps } from './PostButton.types';

const PostButton = ({ count, type }: PostButtonProps) => {
    const [iconSrc, setIconSrc] = useState<string | undefined>(undefined);

    const toggleIcon = (type: string) => {
        switch (type) {
            case 'bookmarks':
                setIconSrc('/src/assets/header/icon_1.svg');
                break;
            case 'likes':
                setIconSrc('/src/assets/header/icon_3.svg');
                break;
            case 'subscribes':
                setIconSrc('/src/assets/header/icon_2.svg');
                break;
        }
    };

    useEffect(() => {
        toggleIcon(type);
    }, [type]);

    return (
        <HStack spacing={2} py='3px'>
            <Image src={iconSrc} />
            <Text fontWeight='bold' color='green.500' fontSize='12px'>
                {count}
            </Text>
        </HStack>
    );
};

export default PostButton;
