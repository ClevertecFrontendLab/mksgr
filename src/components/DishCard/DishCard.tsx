import {
    Box,
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
import { IDishCard } from './DishCard.types';

const DishCard = ({ card }: { card: IDishCard }) => (
    <Card
        display='flex'
        direction='row'
        overflow='hidden'
        className={styles['dishCard']}
        variant='outline'
        position='relative'
    >
        {card.recommendation && (
            <Badge
                display={{ base: 'none', xl: 'flex' }}
                position='absolute'
                bottom='20px'
                left='24px'
                bg='lime.150'
                image={card.recommendation.userIcon}
            >
                {card.recommendation.title}
            </Badge>
        )}
        <Image
            objectFit='cover'
            maxW={{ base: '158px', xl: '346px' }}
            src={card.image}
            alt='Dish image'
        />
        <Stack p={{ base: '8px 8px 4px 8px', xl: '20px 24px' }} gap='24px'>
            <CardBody p={0} maxW='100%'>
                <Flex justify='space-between' pb={{ base: '0', xl: '24px' }}>
                    <Badge
                        bg='lime.50'
                        image={card.category.icon}
                        sx={{
                            position: { base: 'absolute', xl: 'relative' },
                            top: { base: '8px', xl: '0' },
                            left: { base: '8px', xl: '0' },
                        }}
                    >
                        {card.category.title}
                    </Badge>

                    <HStack gap='8px'>
                        {card.tags &&
                            card.tags.map((t) => <PostButton type={t.type} count={t.count} />)}
                    </HStack>
                </Flex>

                <Heading
                    fontSize={{ base: '16px', xl: '20px' }}
                    fontWeight='medium'
                    lineHeight='24px'
                    noOfLines={{ base: 2, xl: 1 }}
                >
                    {card.title}
                </Heading>

                <Box display={{ base: 'none', xl: 'block' }} mt='8px'>
                    <Text noOfLines={3} maxW='100%' fontSize='14px'>
                        {card.text}
                    </Text>
                </Box>
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
