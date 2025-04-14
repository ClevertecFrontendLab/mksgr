import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    List,
    ListItem,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

import styles from './CategoriesList.module.css';
import { CategoriesListProps } from './CategoriesList.types';

const CategoriesList = ({ data }: CategoriesListProps) => {
    const [activeCategory, setActiveCategory] = useState<string | null>();
    const [activeSubCategory, setActiveSubCategory] = useState<string | null>();

    const [hasScroll, setHasScroll] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const checkScroll = () => {
            setHasScroll(el.scrollHeight > el.clientHeight);
        };

        checkScroll();

        window.addEventListener('resize', checkScroll);
        return () => {
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const toggleCategory = function <T extends { name?: string }>(item: T) {
        if (activeCategory === item.name) {
            setActiveCategory(null);
        } else {
            setActiveCategory(item.name);
        }
    };

    return (
        <Accordion
            ref={ref}
            className={`${styles['accordion']} ${hasScroll ? styles['accordionScroll'] : ''}`}
            allowToggle
        >
            {data.map((item) => (
                <AccordionItem border='none' key={item.id}>
                    <h2>
                        <AccordionButton
                            px={2}
                            py={3}
                            onClick={() => toggleCategory(item)}
                            className={`${activeCategory === item.name ? styles['activeCategory'] : ''}`}
                        >
                            <img src={item.iconSrc} alt='category icon' />

                            <Box
                                fontWeight='medium'
                                ml={3}
                                fontSize='md'
                                as='span'
                                flex='1'
                                textAlign='left'
                            >
                                <Link
                                    to={item.link}
                                    data-test-id={
                                        item.name === 'Веганская кухня'
                                            ? 'vegan-cuisine'
                                            : undefined
                                    }
                                >
                                    {item.name}
                                </Link>
                            </Box>

                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel p={0}>
                        <List>
                            {item.subCategories.map((i, index) => (
                                <Link to={i.link} key={index}>
                                    <ListItem
                                        onClick={() => setActiveSubCategory(i.name)}
                                        className={`${styles['subCategory']} ${activeSubCategory === i.name ? styles['active'] : ''}`}
                                    >
                                        {i.name}
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default CategoriesList;
