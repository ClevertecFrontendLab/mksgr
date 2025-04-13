import {
    Box,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react';

import Badge from '../Badge/Badge';
import PostButton from '../PostButton/PostButton';
import { SliderCardProps } from './SliderCard.types';

const SliderCard = ({ data }: SliderCardProps) => (
    <Card
        position='relative'
        maxW={{ base: '158px', xl: '277px', '2xl': '322px' }}
        borderRadius='lg'
        overflow='hidden'
        _hover={{
            boxShadow:
                '0 4px 6px -1px rgba(32, 126, 0, 0.1), 0 2px 4px -1px rgba(32, 126, 0, 0.06)',
            cursor: 'pointer',
        }}
    >
        <Badge
            image={data.category.icon}
            bg='lime.150'
            sx={{
                display: { base: 'flex', xl: 'none' },
                position: { base: 'absolute' },
                top: { base: '8px' },
                left: { base: '8px' },
            }}
        >
            {data.category.title}
        </Badge>
        <Image
            src={data.image}
            alt='Green double couch with wooden legs'
            h={{ base: '128px', xl: '230px' }}
        />
        <Flex
            direction='column'
            as='main'
            p={{ base: '8px 8px 4px 8px', xl: '12px', '2xl': '16px 24px 20px 24px' }}
            gap={{ base: '0', xl: '24px' }}
        >
            <CardBody p={0}>
                <Box>
                    <Heading fontSize='20px' fontWeight='medium' mb='8px' noOfLines={1}>
                        {data.title}
                    </Heading>
                    <Text
                        fontSize='14px'
                        lineHeight='20px'
                        letterSpacing={0}
                        noOfLines={3}
                        sx={{
                            display: { base: 'none', xl: '-webkit-box' },
                        }}
                    >
                        {data.text}
                    </Text>
                </Box>
            </CardBody>
            <CardFooter p={0} display='flex' justify='space-between'>
                <Badge
                    image={data.category.icon}
                    bg='lime.150'
                    sx={{
                        display: { base: 'none', xl: 'flex' },
                    }}
                    noOfLines={1}
                >
                    {data.category.title}
                </Badge>
                <ButtonGroup spacing='2'>
                    {data.tags?.length &&
                        data.tags?.map((t, i) => (
                            <PostButton key={i} count={t.count} type={t.type} />
                        ))}
                </ButtonGroup>
            </CardFooter>
        </Flex>
    </Card>
);

export default SliderCard;
