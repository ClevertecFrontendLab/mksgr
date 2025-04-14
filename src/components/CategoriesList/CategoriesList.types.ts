export interface ICategory {
    id: number;
    name: string;
    iconSrc: string;
    link: string;
    subCategories: ISubCategory[];
}

interface ISubCategory {
    name: string;
    link: string;
}

export interface CategoriesListProps {
    data: ICategory[];
}
