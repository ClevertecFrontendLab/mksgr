import {
    Box,
    Button,
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

import Badge from '~/components/Badge/Badge';
import DishCard from '~/components/DishCard/DishCard';
import Filters from '~/components/Filters/Filters';
import PostButton from '~/components/PostButton/PostButton';
import RelevantCardShort from '~/components/RelevantCardShort/RelevantCardShort';
import TabsComponent from '~/components/Tabs/Tabs';

const VeganCuisinePage = () => {
    const DATA = [
        {
            id: 1,
            title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
            text: 'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
            image: '/src/assets/VeganCuisine/dish_1.png',
            category: {
                title: 'Национальные',
                icon: '/src/assets/sidebar/categories/national-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 85,
                },
                {
                    type: 'likes',
                    count: 152,
                },
            ],
        },
        {
            id: 2,
            title: 'Картофельные рулетики с грибами',
            text: 'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
            image: '/src/assets/VeganCuisine/dish_2.png',
            category: {
                title: 'Детские блюда',
                icon: '/src/assets/sidebar/categories/kids-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 85,
                },
                {
                    type: 'likes',
                    count: 152,
                },
            ],
        },
        {
            id: 3,
            title: 'Том-ям с капустой кимчи',
            text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            image: '/src/assets/VeganCuisine/dish_3.png',
            category: {
                title: 'Национальные',
                icon: '/src/assets/sidebar/categories/national-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 124,
                },
                {
                    type: 'likes',
                    count: 324,
                },
            ],
        },
        {
            id: 4,
            title: 'Овощная лазанья из лаваша',
            text: 'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
            image: '/src/assets/VeganCuisine/dish_4.png',
            category: {
                title: 'Блюда на гриле',
                icon: '/src/assets/sidebar/categories/grilled-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 85,
                },
                {
                    type: 'likes',
                    count: 152,
                },
            ],
        },
        {
            id: 5,
            title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
            text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
            image: '/src/assets/VeganCuisine/dish_5.png',
            category: {
                title: 'Вторые блюда',
                icon: '/src/assets/sidebar/categories/second-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 85,
                },
                {
                    type: 'likes',
                    count: 152,
                },
            ],
        },
        {
            id: 6,
            title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
            text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
            image: '/src/assets/VeganCuisine/dish_5.png',
            category: {
                title: 'Вторые блюда',
                icon: '/src/assets/sidebar/categories/second-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 85,
                },
                {
                    type: 'likes',
                    count: 152,
                },
            ],
        },
        {
            id: 7,
            title: 'Чесночная картошка',
            text: 'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
            image: '/src/assets/VeganCuisine/dish_7.png',
            category: {
                title: 'Национальные',
                icon: '/src/assets/sidebar/categories/national-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 124,
                },
                {
                    type: 'likes',
                    count: 324,
                },
            ],
        },
        {
            id: 8,
            title: 'Пури',
            text: 'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
            image: '/src/assets/VeganCuisine/dish_8.png',
            category: {
                title: 'Национальные',
                icon: '/src/assets/sidebar/categories/national-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 124,
                },
                {
                    type: 'likes',
                    count: 324,
                },
            ],
        },
    ];

    return (
        <Box as='section'>
            <Flex
                direction='column'
                gap={{ base: '16px', xl: '32px' }}
                justify='center'
                align='center'
            >
                <Flex
                    direction='column'
                    gap={{ base: '16px', xl: '12px' }}
                    justify='center'
                    align='center'
                >
                    <Heading fontSize={{ base: '24px', xl: '48px' }} textAlign='center' p={0}>
                        Веганская кухня
                    </Heading>
                    <Text
                        maxW={{ xl: '696px' }}
                        fontSize={{ base: '14px', xl: '16px' }}
                        color='rgba(0, 0, 0, 0.48)'
                        textAlign='center'
                    >
                        Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                        попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.
                    </Text>
                </Flex>
                <Filters />
            </Flex>
            <TabsComponent />
            <Flex
                direction='column'
                justify='center'
                align='center'
                gap='16px'
                mb={{ base: '32px', xl: '40px' }}
            >
                <Grid
                    templateColumns={{ base: '1fr', md: '1fr 1fr', xl: '1fr', '2xl': ' 1fr 1fr' }}
                    gap={6}
                >
                    {DATA.map((card) => (
                        <DishCard key={card.id} card={card} />
                    ))}
                </Grid>
                <Button
                    w='152px'
                    bg='lime.400'
                    fontSize='16px'
                    py={{ base: '8px', '2xl': '10px' }}
                    px={{ base: '16px', '2xl': '24px' }}
                >
                    Загрузить еще
                </Button>
            </Flex>
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
                        Десерты, выпечка
                    </Heading>
                    <Text
                        fontSize={{ base: '14px', xl: '16px' }}
                        color='rgba(0, 0, 0, 0.64)'
                        fontWeight='500'
                        minW={0}
                    >
                        Без них невозможно представить себе ни современную, ни традиционную
                        кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб -
                        рецепты изделий из теста многообразны и невероятно популярны.
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
                                    Бананово-молочное желе
                                </Heading>
                            </CardHeader>
                            <CardBody p={0} mb='24px' flex='none'>
                                <Text noOfLines={3} fontSize='14px'>
                                    Молочное желе – это просто, вкусно и полезно, ведь для его
                                    приготовления в качестве основы используется молоко.
                                </Text>
                            </CardBody>
                            <CardFooter p={0}>
                                <Flex justify='space-between' width='100%'>
                                    <Badge
                                        bg='lime.50'
                                        image='/src/assets/sidebar/categories/kids-dishes-icon.svg'
                                    >
                                        Детские блюда
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
                                    Нежный сливочно-сырный крем для кексов
                                </Heading>
                            </CardHeader>
                            <CardBody p={0} mb='24px' flex='none'>
                                <Text noOfLines={3} fontSize='14px'>
                                    Сливочно-сырным кремом можно украсить кексы, либо другую
                                    выпечку, а также этим кремом можно наполнить заварные пирожные.
                                </Text>
                            </CardBody>
                            <CardFooter p={0}>
                                <Flex justify='space-between' width='100%'>
                                    <Badge
                                        bg='lime.50'
                                        image='/src/assets/sidebar/categories/kids-dishes-icon.svg'
                                    >
                                        Детские блюда
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
                            title='Домашние сырные палочки'
                            iconSrc='/src/assets/sidebar/categories/kids-dishes-icon.svg'
                        />
                        <RelevantCardShort
                            title='Панкейки'
                            iconSrc='/src/assets/sidebar/categories/national-dishes-icon.svg'
                        />
                        <RelevantCardShort
                            title='Воздушное банановое печенье на сковороде'
                            iconSrc='/src/assets/sidebar/categories/vegan-icon.svg'
                        />
                    </SimpleGrid>
                </Grid>
            </Flex>
        </Box>
    );
};

export default VeganCuisinePage;
