import { StackProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type BadgeProps = StackProps & {
    children: ReactNode;
    image?: string;
};
