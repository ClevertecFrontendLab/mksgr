import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';

import Badge from '../Badge/Badge';
import PostButton from '../PostButton/PostButton';
import styles from './DishCard.module.css';

const DishCard = () => (
    <Card
        display='flex'
        direction='row'
        overflow='hidden'
        className={styles['dishCard']}
        variant='outline'
    >
        <Image
            objectFit='cover'
            maxW={{ base: '158px', xl: '346px' }}
            src='/src/assets/mainPage/dish_1.png'
            alt='Dish image'
        />
        <Stack p={{ base: '8px 8px 4px 8px', xl: '20px 24px' }} gap='24px' flex={1}>
            <CardBody p={0}>
                <Flex justify='space-between' pb={{ base: '0', xl: '24px' }}>
                    <Badge
                        bg='lime.50'
                        image='/src/assets/sidebar/categories/second-dishes-icon.svg'
                        sx={{
                            position: { base: 'absolute', xl: 'relative' },
                            top: { base: '8px', xl: '0' },
                            left: { base: '8px', xl: '0' },
                        }}
                    >
                        Вторые блюда
                    </Badge>

                    <HStack gap='8px'>
                        <PostButton type='bookmarks' count={85} />
                        <PostButton type='likes' count={152} />
                    </HStack>
                </Flex>

                <Heading
                    fontSize={{ base: '16px', xl: '20px' }}
                    fontWeight='medium'
                    lineHeight='24px'
                    pb='8px'
                    noOfLines={{ base: 2, xl: 1 }}
                >
                    Пряная ветчина по итальянски
                </Heading>

                <Text noOfLines={3} fontSize='14px' display={{ base: 'none', xl: 'block' }}>
                    Как раз после праздников, когда мясные продукты еще остались, но никто их уже не
                    хочет, время варить солянку.
                </Text>
            </CardBody>

            <CardFooter justify='right' p={0}>
                <Flex gap='8px'>
                    <Button
                        size='sm'
                        variant='outline'
                        borderColor='rgba(0, 0, 0, 0.48)'
                        color='gray.700'
                        fontWeight='500'
                        borderRadius='8px'
                        p={{ base: '6px', xl: '6px 12px' }}
                        gap='8px'
                    >
                        <img src='src/assets/header/icon_1.svg' alt='Bookmark' />
                        <Text
                            fontSize='14px'
                            fontWeight='600'
                            display={{ base: 'none', xl: 'block' }}
                        >
                            Сохранить
                        </Text>
                    </Button>
                    <Button bg='rgba(0, 0, 0, 0.92)' p={0} m={0} size='sm'>
                        <Text
                            color='white'
                            fontSize={{ base: '12px', xl: '14px' }}
                            p={{ base: '4px 8px', xl: '12px 6px' }}
                        >
                            Готовить
                        </Text>
                    </Button>
                </Flex>
            </CardFooter>
        </Stack>
    </Card>
);

export default DishCard;
