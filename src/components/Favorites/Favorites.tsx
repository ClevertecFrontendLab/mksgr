import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, chakra, Flex, Grid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import DishCard from '../DishCard/DishCard';

const Favorites = () => {
    const DATA = [
        {
            id: 1,
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
            id: 3,
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
            id: 4,
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
    ];

    const ChakraLink = chakra(RouterLink);

    return (
        <Flex direction='column' gap='12px' justify='center' align='center'>
            <Grid
                templateColumns={{ base: '1fr', md: '1fr 1fr', xl: '1fr', '2xl': ' 1fr 1fr' }}
                gap={6}
            >
                {DATA.map((card) => (
                    <DishCard key={card.id} card={card} />
                ))}
            </Grid>
            <ChakraLink
                to='/favorites'
                data-test-id='juiciest-link-mobile'
                display={{ base: 'block', xl: 'none' }}
            >
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    w='167px'
                    bg='lime.400'
                    fontSize={{ base: '16px', '2xl': '18px' }}
                    py={{ base: '8px', '2xl': '10px' }}
                    px={{ base: '16px', '2xl': '24px' }}
                >
                    Вся подборка
                </Button>
            </ChakraLink>
        </Flex>
    );
};

export default Favorites;
