import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';

import SliderCard from '../SliderCard/SliderCard';
import { SliderProps } from './Slider.types';

const Slider = ({ data }: SliderProps) => (
    <Flex
        position='relative'
        overflowX='hidden'
        scrollSnapType='x mandatory'
        gap={3}
        css={{
            '& > *': {
                scrollSnapAlign: 'center',
                flex: '0 0 80%',
            },
        }}
    >
        <Flex
            justify='space-between'
            position='absolute'
            left={0}
            top='147px'
            zIndex={100}
            width='100%'
        >
            <IconButton
                aria-label='Назад'
                icon={<ArrowBackIcon boxSize={6} />}
                borderRadius='xl'
                bg='black'
                color='lime.50'
                _hover={{ bg: 'blackAlpha.700' }}
                _active={{ bg: 'blackAlpha.600' }}
                boxSize='40px'
            />
            <IconButton
                aria-label='Назад'
                icon={<ArrowForwardIcon boxSize={6} />}
                borderRadius='xl'
                bg='black'
                color='lime.50'
                _hover={{ bg: 'blackAlpha.700' }}
                _active={{ bg: 'blackAlpha.600' }}
                boxSize='40px'
            />
        </Flex>
        {data.map((card) => (
            <SliderCard key={card.id} data={card} />
        ))}
    </Flex>
);

export default Slider;
