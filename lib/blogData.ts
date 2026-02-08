export interface BlogPost {
    id: string;
    date: string;
    category: string;
    title: string;
    slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        date: "08 FEV",
        category: "ECOSSISTEMA",
        title: "Por que o Sebrae Labs em Belo Horizonte é o epicentro do empreendedorismo jovem.",
        slug: "sebrae-labs-belo-horizonte"
    },
    {
        id: "2",
        date: "05 FEV",
        category: "EXECUÇÃO",
        title: "Do Zero ao MVP: O guia de 10 semanas para quem quer construir, não apenas assistir.",
        slug: "zero-ao-mvp-10-semanas"
    },
    {
        id: "3",
        date: "02 FEV",
        category: "CASE",
        title: "Case Alpha: Como uma turma gerou 120 clientes reais em tempo recorde.",
        slug: "case-alpha-120-clientes"
    },
    {
        id: "4",
        date: "30 JAN",
        category: "EQUITY",
        title: "Equity e Sociedade: O que todo Builder precisa saber antes de começar.",
        slug: "equity-sociedade-guia"
    },
    {
        id: "5",
        date: "27 JAN",
        category: "MINDSET",
        title: "A cultura da graxa: Por que a execução bruta vence a ideia perfeita todos os dias.",
        slug: "cultura-da-graxa-execucao"
    }
];
