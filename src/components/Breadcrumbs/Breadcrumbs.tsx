import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import { CATEGORIES } from '~/Data/Data';

import { Crumb, ICategoryCrumbs } from './Breadcrumbs.types';

const Breadcrumbs = () => {
    const location = useLocation();
    console.log(location.pathname);

    const findBreadcrumbs = (categories: ICategoryCrumbs[], pathname: string) => {
        const crumbs: Crumb[] = [];

        if (pathname === '/favorites') {
            crumbs.push({ title: 'Самое сочное', path: pathname });
            return crumbs;
        }
        const search = function (nodes: ICategoryCrumbs[], pathSoFar = '') {
            for (const node of nodes) {
                const fullPath = `${pathSoFar}${node.link}`;
                if (pathname.startsWith(fullPath)) {
                    crumbs.push({ title: node.name, path: fullPath });
                    if (node.subCategories) {
                        search(node.subCategories, '');
                    }
                    break;
                }
            }
        };

        search(categories);
        return crumbs;
    };

    const breadcrumbs = findBreadcrumbs(CATEGORIES, location.pathname);
    console.log(breadcrumbs);

    return (
        <Breadcrumb
            ml={32}
            spacing='8px'
            separator={<ChevronRightIcon color='gray.500' />}
            fontSize='16px'
            fontWeight='500'
        >
            <BreadcrumbItem>
                <BreadcrumbLink href='/' color='rgba(0, 0, 0, 0.64)'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {breadcrumbs.map((item, i, array) => (
                <BreadcrumbItem key={i}>
                    <BreadcrumbLink
                        href={item.path}
                        color={`${i === array.length - 1 ? '#000' : 'rgba(0, 0, 0, 0.64)'}`}
                    >
                        {item.title}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
