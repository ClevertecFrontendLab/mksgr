import { Box, Button, Divider, Flex, Grid, Heading } from '@chakra-ui/react';

import DishCard from '~/components/DishCard/DishCard';
import Filters from '~/components/Filters/Filters';
import RelevantKitchen from '~/components/RelevantKitchen/RelevantKitchen';

const FavoritesPage = () => {
    const DATA = [
        {
            id: 1,
            title: 'Лапша с курицей и шафраном',
            text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            image: '/src/assets/FavoritesPage/dish_1.png',
            category: {
                title: 'Вторые блюда',
                icon: '/src/assets/sidebar/categories/second-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 258,
                },
                {
                    type: 'likes',
                    count: 342,
                },
            ],
            recommendation: {
                title: 'Alex Cook рекомендует',
                userIcon: '/src/assets/FavoritesPage/avatar_1.png',
            },
        },
        {
            id: 2,
            title: 'Том-ям с капустой кимчи',
            text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            image: '/src/assets/FavoritesPage/dish_2.png',
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
            id: 3,
            title: 'Пряная ветчина по итальянски',
            text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            image: '/src/assets/FavoritesPage/dish_3.png',
            category: {
                title: 'Вторые блюда',
                icon: '/src/assets/sidebar/categories/second-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 159,
                },
                {
                    type: 'likes',
                    count: 257,
                },
            ],
            recommendation: {
                title: 'Елена Высоцкая рекомендует',
                userIcon: '/src/assets/FavoritesPage/avatar_2.png',
            },
        },
        {
            id: 4,
            title: 'Кнели со спагетти',
            text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            image: '/src/assets/FavoritesPage/dish_4.png',
            category: {
                title: 'Вторые блюда',
                icon: '/src/assets/sidebar/categories/second-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 124,
                },
                {
                    type: 'likes',
                    count: 231,
                },
            ],
        },
        {
            id: 5,
            title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
            text: 'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
            image: '/src/assets/FavoritesPage/dish_5.png',
            category: {
                title: 'Вторые блюда',
                icon: '/src/assets/sidebar/categories/second-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 120,
                },
                {
                    type: 'likes',
                    count: 180,
                },
            ],
        },
        {
            id: 6,
            title: 'Картофельные рулетики с грибами',
            text: 'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
            image: '/src/assets/FavoritesPage/dish_6.png',
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
                    count: 180,
                },
            ],
        },
        {
            id: 7,
            title: 'Овощная лазанья из лаваша',
            text: 'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
            image: '/src/assets/FavoritesPage/dish_7.png',
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
            id: 8,
            title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
            text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
            image: '/src/assets/FavoritesPage/dish_8.png',
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
                    count: 150,
                },
            ],
        },
    ];

    return (
        <Box as='section'>
            <Flex direction='column' gap={{ base: '16px', xl: '32px' }}>
                <Heading fontSize={{ base: '24px', xl: '48px' }} textAlign='center' p={0}>
                    Самое сочное
                </Heading>
                <Filters />
            </Flex>

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
            <Divider />
            <RelevantKitchen />
        </Box>
    );
};

export default FavoritesPage;
