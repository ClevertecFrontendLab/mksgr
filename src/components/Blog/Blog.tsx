import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';

import BlogPost from '../BlogPost/BlogPost';

const TEST_POST = [
    {
        id: 1,
        user: {
            name: 'Елена Высоцкая',
            userImage: '/src/assets/header/avatar.png',
            nickname: '@elenapovar',
        },
        postText:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 2,
        user: {
            name: 'Alex Cook',
            userImage: '/src/assets/header/avatar.png',
            nickname: '@funtasticooking',
        },
        postText:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 3,
        user: {
            name: 'Екатерина Константинопольская',
            userImage: '/src/assets/header/avatar.png',
            nickname: '@bake_and_pie',
        },
        postText:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

const Blog = () => (
    <Flex direction='column' gap='12px' align='center'>
        <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '12px', xl: '16px' }}>
            {TEST_POST.map((post) => (
                <BlogPost key={post.id} user={post.user} postText={post.postText} />
            ))}
        </Flex>
        <Button
            rightIcon={<ArrowForwardIcon />}
            display={{ base: 'flex', xl: 'none' }}
            bg='transparent'
            width='150px'
            fontSize={{ base: '16px', '2xl': '18px' }}
            py={{ base: '8px', '2xl': '10px' }}
            px={{ base: '16px', '2xl': '24px' }}
        >
            Все авторы
        </Button>
    </Flex>
);

export default Blog;
