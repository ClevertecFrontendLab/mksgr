import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Grid,
    Heading,
    HStack,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';

import Badge from '../Badge/Badge';
import PostButton from '../PostButton/PostButton';
import RelevantCardShort from '../RelevantCardShort/RelevantCardShort';

const RelevantKitchen = () => (
    <Flex direction='column' gap={{ base: '16px', xl: '24px' }} pt='24px'>
        <Grid
            templateColumns={{ base: '1fr', xl: 'auto 1fr', '2xl': '704px 1fr' }}
            gap={{ base: '12px', xl: '28px', '2xl': '0' }}
        >
            <Heading
                fontSize={{ base: '24px', xl: '36px', '2xl': '48px' }}
                fontWeight='500'
                flexShrink={0}
                whiteSpace='normal'
                maxW={{ base: 'none', xl: '270px', '2xl': 'none' }}
            >
                Веганская кухня
            </Heading>
            <Text
                fontSize={{ base: '14px', xl: '16px' }}
                color='rgba(0, 0, 0, 0.64)'
                fontWeight='500'
                minW={0}
            >
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </Grid>
        <Grid
            templateColumns={{ base: '1fr', md: 'auto 1fr' }}
            gap={{ base: '12px', xl: '16px', '2xl': '24px' }}
        >
            <SimpleGrid
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                gap={{ base: '12px', xl: '16px', '2xl': '24px' }}
            >
                <Card
                    p={{ base: '12px', xl: '16px', '2xl': '24px' }}
                    justify='space-between'
                    maxW={{ base: '328px', md: '232px', xl: '282', '2xl': '328px' }}
                    _hover={{
                        boxShadow:
                            '0 4px 6px -1px rgba(32, 126, 0, 0.1), 0 2px 4px -1px rgba(32, 126, 0, 0.06)',
                    }}
                >
                    <CardHeader p={0} mb='8px'>
                        <Heading
                            isTruncated
                            fontSize={{ base: '16px', xl: '20px' }}
                            fontWeight='500'
                        >
                            Картошка, тушенная с болгарским перцем и фасолью в томатном соусе
                        </Heading>
                    </CardHeader>
                    <CardBody p={0} mb='24px' flex='none'>
                        <Text noOfLines={3} fontSize='14px'>
                            Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -
                            вариант сытного блюда на каждый день. Фасоль в данном случае заменяет
                            мясо, делая рагу сытным и питательным. Чтобы сократить время
                            приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но
                            в полной мере наполнено ароматами и имеет выразительный вкус за счёт
                            добавления томатной пасты.
                        </Text>
                    </CardBody>
                    <CardFooter p={0}>
                        <Flex justify='space-between' width='100%'>
                            <Badge
                                bg='lime.50'
                                image='/src/assets/sidebar/categories/second-dishes-icon.svg'
                            >
                                Вторые блюда
                            </Badge>
                            <HStack>
                                <PostButton type='bookmarks' count={1} />
                                <PostButton type='likes' count={1} />
                            </HStack>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card
                    p={{ base: '12px', xl: '16px', '2xl': '24px' }}
                    justify='space-between'
                    maxW={{ base: '328px', md: '232px', xl: '282', '2xl': '328px' }}
                    _hover={{
                        boxShadow:
                            '0 4px 6px -1px rgba(32, 126, 0, 0.1), 0 2px 4px -1px rgba(32, 126, 0, 0.06)',
                    }}
                >
                    <CardHeader p={0} mb='8px'>
                        <Heading
                            isTruncated
                            fontSize={{ base: '16px', xl: '20px' }}
                            fontWeight='500'
                        >
                            Капустные котлеты
                        </Heading>
                    </CardHeader>
                    <CardBody p={0} mb='24px' flex='none'>
                        <Text noOfLines={3} fontSize='14px'>
                            Капустные котлеты по этому рецепту получаются необычайно пышными и
                            невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут
                            сделать эти чудесные котлеты из капусты одним из ваших любимых овощных
                            блюд.
                        </Text>
                    </CardBody>
                    <CardFooter p={0}>
                        <Flex justify='space-between' width='100%'>
                            <Badge
                                bg='lime.50'
                                image='/src/assets/sidebar/categories/second-dishes-icon.svg'
                            >
                                Вторые блюда
                            </Badge>
                            <HStack>
                                <PostButton type='bookmarks' count={2} />
                                <PostButton type='likes' count={1} />
                            </HStack>
                        </Flex>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            <SimpleGrid spacing={4} templateColumns='1fr'>
                <RelevantCardShort
                    title='Стейк для вегетарианцев'
                    iconSrc='/src/assets/sidebar/categories/second-dishes-icon.svg'
                />
                <RelevantCardShort
                    title='Котлеты из гречки и фасоли'
                    iconSrc='/src/assets/sidebar/categories/second-dishes-icon.svg'
                />
                <RelevantCardShort
                    title='Сырный суп с лапшой и брокколи'
                    iconSrc='/src/assets/sidebar/categories/first-dishes-icon.svg'
                />
            </SimpleGrid>
        </Grid>
    </Flex>
);

export default RelevantKitchen;
