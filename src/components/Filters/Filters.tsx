import { SearchIcon } from '@chakra-ui/icons';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
} from '@chakra-ui/react';

const Filters = () => (
    <Flex direction='column' gap={4} justify='center' mb='32px' width='100%'>
        <HStack justify='center' gap={3} width='100%'>
            <Button
                flexShrink={0}
                aria-label='Меню'
                variant='outline'
                border='1px solid'
                borderColor='gray.400'
                borderRadius='md'
                w={{ base: '32px', xl: '48px' }}
                h={{ base: '32px', xl: '48px' }}
                minW='unset'
                p={0}
            >
                <Image
                    src='/src/assets/mainPage/sort-icon.svg'
                    w={{ base: '14px', xl: '24px' }}
                    h={{ base: '14px', xl: '24px' }}
                ></Image>
            </Button>
            <InputGroup maxW='458px' w='100%' flex={1}>
                <Input
                    placeholder='Название или ингредиент...'
                    _placeholder={{ color: 'lime.800' }}
                    size={{ base: 'sm', xl: 'lg' }}
                    borderColor='gray.400'
                    borderRadius='md'
                    _hover={{ borderColor: 'gray.400' }}
                    pr='36px'
                />
                <InputRightElement
                    right={{ base: '9px', xl: '15px' }}
                    top='50%'
                    transform='translateY(-50%)'
                >
                    <SearchIcon />
                </InputRightElement>
            </InputGroup>
        </HStack>
        <HStack justify='center' gap={4} display={{ base: 'none', xl: 'flex' }}>
            <FormControl display='flex' alignItems='center' maxW='268px'>
                <FormLabel htmlFor='allergens' mb='0'>
                    Исключить мои аллергены
                </FormLabel>
                <Switch id='allergens' size='md' />
            </FormControl>
            <FormControl maxW='234px'>
                <Select placeholder='Выберите из списка...'>
                    <option>Один</option>
                    <option>Два</option>
                </Select>
            </FormControl>
        </HStack>
    </Flex>
);

export default Filters;
