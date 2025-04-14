export type Crumb = {
    title: string;
    path: string;
};

export interface ICategoryCrumbs {
    name: string;
    link: string;
    subCategories?: ICategoryCrumbs[];
}
