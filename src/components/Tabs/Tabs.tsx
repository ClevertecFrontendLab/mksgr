import { Box, Flex, Tab, TabList, TabPanels, Tabs } from '@chakra-ui/react';

const tabData = [
    {
        label: 'Закуски',
        content: 'Perhaps the greatest dish ever invented.',
    },
    {
        label: 'Первые блюда',
        content: 'Perhaps the surest dish ever invented but fills the stomach more than rice.',
    },
    {
        label: 'Вторые блюда',
        content: 'Perhaps the surest dish ever invented but fills the stomach more than rice.',
    },
    {
        label: 'Гарниры',
        content: 'Perhaps the surest dish ever invented but fills the stomach more than rice.',
    },
    {
        label: 'Десерты',
        content: 'Perhaps the surest dish ever invented but fills the stomach more than rice.',
    },
    {
        label: 'Выпечка',
        content: 'Perhaps the surest dish ever invented but fills the stomach more than rice.',
    },
    {
        label: 'Сыроедческие блюда',
        content: 'Perhaps the surest dish ever invented but fills the stomach more than rice.',
    },
    {
        label: 'Напитки',
        content: 'Perhaps the surest dish ever invented but fills the stomach more than rice.',
    },
];

const TabsComponent = () => (
    <Flex width='100%' justify='center' overflow='hidden'>
        <Tabs maxW='1000px' position='relative' variant='line' w='100%'>
            <Box
                overflowX='auto'
                whiteSpace='nowrap'
                width='100%'
                maxW='100%'
                sx={{
                    scrollbarWidth: 'none', // Firefox
                    '&::-webkit-scrollbar': {
                        display: 'none', // Chrome, Safari, Edge
                    },
                }}
            >
                <TabList mb='26px' minW='max-content'>
                    {tabData.map((tab, index) => (
                        <Tab
                            _selected={{
                                color: 'lime.600',
                                borderBottom: '2px solid #2db100',
                                mb: '-1.5px',
                            }}
                            fontSize='16px'
                            fontWeight='medium'
                            color='lime.800'
                            key={index}
                            flexShrink={0}
                        >
                            {tab.label}
                        </Tab>
                    ))}
                </TabList>
            </Box>

            <TabPanels></TabPanels>
        </Tabs>
    </Flex>
);

export default TabsComponent;
