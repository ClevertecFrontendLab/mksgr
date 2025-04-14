import { CardProps } from '@chakra-ui/react';

interface ITags {
    type: string;
    count: number;
}

export interface ISliderCard {
    id: number;
    title: string;
    text: string;
    image: string;
    category: {
        title: string;
        icon: string;
    };
    tags?: ITags[];
}

export interface SliderCardProps extends CardProps {
    data: ISliderCard;
}
