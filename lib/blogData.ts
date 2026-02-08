export interface BlogPost {
    id: string;
    date: string;
    category: string;
    title: string;
    slug: string;
    image: string;
    readTime: string;
    excerpt: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        date: "08 FEV",
        category: "ECOSSISTEMA",
        title: "Por que o Sebrae Labs em Belo Horizonte é o epicentro do empreendedorismo jovem.",
        slug: "sebrae-labs-belo-horizonte",
        image: "/images/student_1.png",
        readTime: "5 min",
        excerpt: "Descubra como BH se tornou o hub de inovação mais vibrante do Brasil para a nova geração de founders."
    },
    {
        id: "2",
        date: "05 FEV",
        category: "EXECUÇÃO",
        title: "Do Zero ao MVP: O guia de 10 semanas para quem quer construir, não apenas assistir.",
        slug: "zero-ao-mvp-10-semanas",
        image: "/images/student_2.png",
        readTime: "8 min",
        excerpt: "A metodologia brutal que transforma ideias vagas em produtos funcionais com clientes pagantes."
    },
    {
        id: "3",
        date: "02 FEV",
        category: "CASE",
        title: "Case Alpha: Como uma turma gerou 120 clientes reais em tempo recorde.",
        slug: "case-alpha-120-clientes",
        image: "/images/student_3.png",
        readTime: "6 min",
        excerpt: "Os bastidores da primeira turma do CF Club e os resultados que surpreenderam até os mentores."
    },
    {
        id: "4",
        date: "30 JAN",
        category: "EQUITY",
        title: "Equity e Sociedade: O que todo Builder precisa saber antes de começar.",
        slug: "equity-sociedade-guia",
        image: "/images/student_1.png",
        readTime: "7 min",
        excerpt: "Dividir participação societária é uma arte. Aprenda a fazer isso sem destruir sua startup."
    },
    {
        id: "5",
        date: "27 JAN",
        category: "MINDSET",
        title: "A cultura da graxa: Por que a execução bruta vence a ideia perfeita todos os dias.",
        slug: "cultura-da-graxa-execucao",
        image: "/images/student_2.png",
        readTime: "4 min",
        excerpt: "Menos planejamento, mais ação. A filosofia que separa quem sonha de quem constrói."
    }
];
