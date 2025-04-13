import { Button, Card, CardFooter, CardHeader, Heading, HStack, Image } from '@chakra-ui/react';

import styles from './RelevantCardShort.module.css';
import { RelevantCardShortProps } from './RelevantCardShort.types';

const RelevantCardShort = ({ title, iconSrc }: RelevantCardShortProps) => (
    <Card
        className={styles['relevantCard']}
        display='flex'
        direction='row'
        justify='space-between'
        align='center'
        p={{ base: '14px 12px', md: '10px 12px', '2xl': '12px 24px' }}
        w='100%'
        gap='8px'
    >
        <CardHeader p={0} display='flex' flex={1} minW={0}>
            <HStack spacing='12px' overflow='hidden'>
                <Image src={iconSrc} />
                <Heading
                    fontSize={{ base: '16px', xl: '18px', '2xl': '20px' }}
                    fontWeight='500'
                    isTruncated
                >
                    {title}
                </Heading>
            </HStack>
        </CardHeader>
        <CardFooter p={0}>
            <Button
                variant='outline'
                color='lime.600'
                borderColor='lime.600'
                fontSize={{ base: '12px', '2xl': '14px' }}
                p={{ base: '8px', '2xl': '6px 12px' }}
            >
                Готовить
            </Button>
        </CardFooter>
    </Card>
);

export default RelevantCardShort;
