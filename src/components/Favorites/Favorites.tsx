import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Grid, useBreakpointValue } from '@chakra-ui/react';

import DishCard from '../DishCard/DishCard';

const Favorites = () => (
    <Flex direction='column' gap='12px' justify='center' align='center'>
        <Grid
            templateColumns={{ base: '1fr', md: '1fr 1fr', xl: '1fr', '2xl': ' 1fr 1fr' }}
            gap={6}
        >
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
        </Grid>
        <Button
            rightIcon={<ArrowForwardIcon />}
            display={{ base: 'block', xl: 'none' }}
            w='167px'
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
    </Flex>
);

export default Favorites;
