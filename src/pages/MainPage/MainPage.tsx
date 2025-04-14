import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router';

import Blog from '~/components/Blog/Blog';
import Favorites from '~/components/Favorites/Favorites';
import Filters from '~/components/Filters/Filters';
import RelevantKitchen from '~/components/RelevantKitchen/RelevantKitchen';
import Slider from '~/components/Slider/Slider';

const MainPage = () => {
    const DATA = [
        {
            id: 1,
            title: 'Солянка с грибами',
            text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            image: '/src/assets/mainPage/image_1.png',
            category: {
                title: 'Первые блюда',
                icon: '/src/assets/sidebar/categories/first-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 1,
                },
            ],
        },
        {
            id: 2,
            title: 'Капустные котлеты',
            text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
            image: '/src/assets/mainPage/image_2.png',
            category: {
                title: 'Веганские блюда',
                icon: '/src/assets/sidebar/categories/vegan-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 2,
                },
                {
                    type: 'likes',
                    count: 1,
                },
            ],
        },
        {
            id: 3,
            title: 'Оладьи на кефире "Пышные"',
            text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
            image: '/src/assets/mainPage/image_3.png',
            category: {
                title: 'Первые блюда',
                icon: '/src/assets/sidebar/categories/deserts-icon.svg',
            },
            tags: [
                {
                    type: 'likes',
                    count: 1,
                },
            ],
        },
        {
            id: 4,
            title: 'Солянка с грибами',
            text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            image: '/src/assets/mainPage/image_1.png',
            category: {
                title: 'Первые блюда',
                icon: '/src/assets/sidebar/categories/first-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 1,
                },
                {
                    type: 'likes',
                    count: 2,
                },
            ],
        },
        {
            id: 5,
            title: 'Солянка с грибами',
            text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            image: '/src/assets/mainPage/image_1.png',
            category: {
                title: 'Первые блюда',
                icon: '/src/assets/sidebar/categories/first-dishes-icon.svg',
            },
            tags: [
                {
                    type: 'bookmarks',
                    count: 1,
                },
                {
                    type: 'likes',
                    count: 2,
                },
            ],
        },
    ];

    return (
        <Box as='section'>
            <Flex direction='column' gap={{ base: '16px', xl: '32px' }}>
                <Heading fontSize={{ base: '24px', xl: '48px' }} textAlign='center' p={0}>
                    Приятного аппетита!
                </Heading>
                <Filters />
            </Flex>
            <Flex
                direction='column'
                gap={{ base: '12px', xl: '24px' }}
                mb={{ base: '32px', xl: '40px' }}
            >
                <Heading
                    fontSize={{ base: '24px', xl: '36px', '2xl': '48px' }}
                    fontWeight='medium'
                    p={0}
                >
                    Новые рецепты
                </Heading>
                <Slider data={DATA} />
            </Flex>
            <Flex
                direction='column'
                justify='center'
                gap={{ base: '12px', xl: '24px' }}
                mb={{ base: '32px', xl: '40px' }}
            >
                <Flex justify='space-between' align='center'>
                    <Heading
                        fontSize={{ base: '24px', xl: '36px', '2xl': '48px' }}
                        fontWeight='medium'
                        p={0}
                    >
                        Самое сочное
                    </Heading>
                    <Link to='/favorites'>
                        <Button
                            rightIcon={<ArrowForwardIcon />}
                            display={{ base: 'none', xl: 'block' }}
                            bg='lime.400'
                            fontSize={{ base: '16px', '2xl': '18px' }}
                            py={{ base: '8px', '2xl': '10px' }}
                            px={{ base: '16px', '2xl': '24px' }}
                            data-test-id={useBreakpointValue({
                                base: 'juiciest-link-mobile',
                                xl: 'juiciest-link',
                            })}
                        >
                            Вся подборка
                        </Button>
                    </Link>
                </Flex>
                <Favorites />
            </Flex>
            <Flex
                direction='column'
                justify='center'
                gap={{ base: '12px', xl: '20px', '2xl': '32px' }}
                mb={{ base: '32px', xl: '40px' }}
                bg='lime.300'
                p={{ base: '12px', xl: '24px' }}
                borderRadius='16px'
            >
                <Flex justify='space-between' align='center'>
                    <Heading
                        fontSize={{ base: '24px', xl: '30px', '2xl': '36px' }}
                        fontWeight='medium'
                        p={0}
                    >
                        Кулинарные блоги
                    </Heading>
                    <Button
                        rightIcon={<ArrowForwardIcon />}
                        display={{ base: 'none', xl: 'block' }}
                        bg='transparent'
                        fontSize={{ base: '16px', '2xl': '18px' }}
                        py={{ base: '8px', '2xl': '10px' }}
                        px={{ base: '16px', '2xl': '24px' }}
                    >
                        Все авторы
                    </Button>
                </Flex>
                <Blog />
            </Flex>
            <Divider />
            <RelevantKitchen />
        </Box>
    );
};

export default MainPage;
