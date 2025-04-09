interface Category {
    id: number;
    name: string;
    iconSrc: string;
    subCategories: string[];
}

export interface CategoriesListProps {
    data: Category[];
}
