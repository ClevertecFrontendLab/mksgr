import { Box, Button, Image, Text, VStack } from '@chakra-ui/react';

import { CATEGORIES } from '~/Data/Data';

import CategoriesList from '../CategoriesList/CategoriesList';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const CATEGORIES_OLD = [
        {
            id: 1,
            name: 'Салаты',
            iconSrc: '/src/assets/sidebar/categories/salads-icon.svg',
            subCategories: ['Мясные салаты', 'Рыбные салаты', 'Овощные салаты', 'Теплые салаты'],
        },
        {
            id: 2,
            name: 'Закуски',
            iconSrc: '/src/assets/sidebar/categories/snacks-icon.svg',
            subCategories: [
                'Мясные закуски',
                'Рыбные закуски',
                'Овощные закуски',
                'Теплые закуски',
                'Бутерброды',
                'Фастфуд',
            ],
        },
        {
            id: 3,
            name: 'Первые блюда',
            iconSrc: '/src/assets/sidebar/categories/first-dishes-icon.svg',
            subCategories: [
                'Мясные супы',
                'Овощные супы',
                'Бульоны',
                'Холодные супы',
                'Диетические супы',
            ],
        },
        {
            id: 4,
            name: 'Вторые блюда',
            iconSrc: '/src/assets/sidebar/categories/second-dishes-icon.svg',
            subCategories: [
                'Мясные',
                'Рыбные',
                'Овощные',
                'Из птицы',
                'Из грибов',
                'Из субпродуктов',
                'На пару',
                'Пельмени, вареники',
                'Мучные гарниры',
                'Овощные гарниры',
                'Пицца',
                'Суши',
            ],
        },
        {
            id: 5,
            name: 'Десерты, выпечка',
            iconSrc: '/src/assets/sidebar/categories/deserts-icon.svg',
            subCategories: [
                'Блины и оладьи',
                'Пироги и пончики',
                'Торты',
                'Рулеты',
                'Кексы и маффины',
                'Сырники и ватрушки',
                'Из слоеного теста',
                'Из заварного теста',
                'Из дрожжевого теста',
                'Булочки и сдоба',
                'Хлеб',
                'Тесто на пиццу',
                'Кремы',
            ],
        },
        {
            id: 6,
            name: 'Блюда на гриле',
            iconSrc: '/src/assets/sidebar/categories/grilled-dishes-icon.svg',
            subCategories: ['Говядина', 'Свинина', 'Птица', 'Рыба', 'Грибы', 'Овощи'],
        },
        {
            id: 7,
            name: 'Веганская кухня',
            link: '/vegan',
            iconSrc: '/src/assets/sidebar/categories/vegan-icon.svg',
            subCategories: [
                {
                    id: 1,
                    name: 'Закуски',
                    link: '/vegan/apetizers',
                },
                {
                    id: 2,
                    name: 'Первые блюда',
                    link: '/vegan/first-dishes',
                },
                {
                    id: 3,
                    name: 'Вторые блюда',
                    link: '/vegan/second-dishes',
                },
                {
                    id: 3,
                    name: 'Вторые блюда',
                    link: '/vegan/second-dishes',
                },

                'Гарниры',
                'Десерты',
                'Выпечка',
                'Сыроедческие блюда',
                'Напитки',
            ],
        },
        {
            id: 8,
            name: 'Детские блюда',
            iconSrc: '/src/assets/sidebar/categories/kids-dishes-icon.svg',
            subCategories: [
                'Первые блюда',
                'Вторые блюда',
                'Гарниры',
                'Выпечка',
                'Без глютена',
                'Без сахара',
                'Без аллергенов',
                'Блюда для прикорма',
            ],
        },
        {
            id: 9,
            name: 'Лечебное питание',
            iconSrc: '/src/assets/sidebar/categories/healthy-dishes-icon.svg',
            subCategories: [
                'Детская диета',
                'Диета №1',
                'Диета №2',
                'Диета №3',
                'Диета №4',
                'Диета №5',
                'Диета №6',
                'Диета №7',
                'Диета №8',
                'Диета №9',
                'Диета №10',
                'Диета №11',
                'Диета №12',
                'Диета №13',
                'Диета №14',
                'Без глютена',
                'Без аллергенов',
            ],
        },
        {
            id: 10,
            name: 'Национальные',
            iconSrc: '/src/assets/sidebar/categories/national-dishes-icon.svg',
            subCategories: [
                'Американская кухня',
                'Армянская кухня',
                'Греческая кухня',
                'Грузинская кухня',
                'Итальянская кухня',
                'Испанская кухня',
                'Китайская кухня',
                'Мексиканская кухня',
                'Паназиатская кухня',
                'Русская кухня',
                'Турецкая кухня',
                'Французская кухня',
                'Шведская кухня',
                'Японская кухня',
                'Другая кухня',
            ],
        },
        {
            id: 11,
            name: 'Соусы',
            iconSrc: '/src/assets/sidebar/categories/sauses-icon.svg',
            subCategories: ['Соусы мясные', 'Соусы сырные', 'Маринады'],
        },
        {
            id: 12,
            name: 'Напитки',
            iconSrc: '/src/assets/sidebar/categories/drinks-icon.svg',
            subCategories: [
                'Соки и фреши',
                'Смузи',
                'Компоты',
                'Кисели',
                'Кофе',
                'Лечебный чай',
                'Квас',
                'Коктейли',
                'Алкогольные',
            ],
        },
        {
            id: 13,
            name: 'Заготовки',
            iconSrc: '/src/assets/sidebar/categories/blanks-icon.svg',
            subCategories: [
                'Мясные заготовки',
                'Рыбные заготовки',
                'Из огурцов',
                'Из томатов',
                'Из грибов',
                'Овощные заготовки',
                'Салаты, икра',
                'Из фруктов и ягод',
            ],
        },
    ];
    console.log(CATEGORIES_OLD);

    return (
        <Box className={styles['sidebar']}>
            <CategoriesList data={CATEGORIES} />
            <VStack as='footer' align='start' px={6} gap={4}>
                <Text fontSize='12px' fontWeight='medium' color='rgba(0, 0, 0, 0.24)'>
                    Версия программы 03.25
                </Text>
                <Text fontSize='12px' fontWeight='regular' color='rgba(0, 0, 0, 0.64)'>
                    Все права защищены,
                    <br /> ученический файл,
                    <br /> ©Клевер Технолоджи, 2025
                </Text>
                <Button
                    bg='none'
                    gap='1.5'
                    p={0}
                    h={18}
                    variant='ghost'
                    _hover={{ background: 'transparent' }}
                >
                    <Image src='/src/assets/sidebar/exit-icon.svg'></Image>
                    <Text>Выйти</Text>
                </Button>
            </VStack>
        </Box>
    );
};
export default Sidebar;
