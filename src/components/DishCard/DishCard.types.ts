interface ITags {
    type: string;
    count: number;
}

interface IRecomendation {
    title: string;
    userIcon: string;
}

export interface IDishCard {
    id: number;
    title: string;
    text: string;
    image: string;
    category: {
        title: string;
        icon: string;
    };
    tags?: ITags[];
    recommendation?: IRecomendation;
}
