export interface BlogPost {
    id: string;
    date: string;
    category: string;
    title: string;
    slug: string;
    image: string;
    readTime: string;
    excerpt: string;
    content: ContentBlock[];
}

export type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "subheading"; text: string }
    | { type: "divider" }
    | { type: "list"; items: string[] }
    | { type: "comparison"; before: { label: string; items: string[] }; after: { label: string; items: string[] } }
    | { type: "bold-lines"; lines: string[] }
    | { type: "highlight"; text: string }
    | { type: "stat-block"; stats: { label: string; value: string }[] }
    | { type: "cta"; text: string; href: string }
    | { type: "footer-note"; lines: string[] };

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "2",
        date: "02 MAR",
        category: "STARTUPS",
        title: "O Verdadeiro Código de Trapaça para Construir Startups Bilionárias",
        slug: "codigo-de-trapaca-startups-bilionarias",
        image: "/images/paper_plane.png",
        readTime: "2 min",
        excerpt: "Para criar o tipo de empresa que muda o mundo e que todo jovem fundador sonha, você precisará encontrar um tipo diferente de ideia.",
        content: [
            { type: "paragraph", text: "É comum observar em eventos de empreendedorismo para jovens fundadores uma busca incessante por visões revolucionárias. Muitos apresentam propostas grandiosas, que vão desde a \"reinvenção da infraestrutura financeira em escala global\" até a \"construção de um sistema operacional para todo o conhecimento humano\" ou o \"uso de IA para remodelar a civilização\"." },
            { type: "paragraph", text: "Embora essa ambição seja admirável e a convicção inabalável dos primeiros passos seja empolgante, a insistência nesse padrão de ideias exclusivamente \"transformadoras\" em nível global frequentemente esconde uma armadilha. A dura realidade é que startups avaliadas em bilhões de dólares, na maioria das vezes, não nascem de grandes ideias. Elas nascem de ideias entediantes." },

            { type: "divider" },
            { type: "heading", text: "Ideias grandiosas vs. Ideias entediantes" },
            { type: "paragraph", text: "O ecossistema em torno das startups frequentemente incentiva o \"sonhar grande\", onde tudo precisa ser disruptivo para remodelar indústrias inteiras de uma só vez. No entanto, ao observar as companhias que realmente atingem o cobiçado status de unicórnio, nota-se um padrão muito mais pragmático:" },
            {
                type: "list", items: [
                    "A Stripe processa pagamentos.",
                    "A Snowflake gerencia bancos de dados.",
                    "O Figma ajuda a desenhar formas geométricas numa tela.",
                    "A Atlassian ajuda equipes de software a documentarem o que estão fazendo.",
                    "A Twilio envia mensagens de texto.",
                    "A Qualtrics ajuda empresas a enviar simples pesquisas."
                ]
            },
            { type: "paragraph", text: "Nenhuma dessas empresas começou com um discurso de salvar a galáxia. Elas nasceram como soluções práticas para problemas extremamente específicos, tediosos e nada glamourosos, mas que representavam uma dor imensa para um grande número de pessoas. Elas não se tornaram negócios de um bilhão de dólares porque queriam mudar o mundo desde o primeiro dia, mas porque focaram em consertar algo que era muito irritante e disfuncional. E, ao fazerem isso com maestria, o mundo mudou de forma silenciosa ao redor delas." },
            { type: "highlight", text: "O verdadeiro segredo no mundo dos negócios é que os fundadores de empresas gigantes não são os que gritam mais alto sobre disrupção. São aqueles que identificam um problema real, palpável e doloroso, e ficam obcecados em resolvê-lo de forma superior." },

            { type: "divider" },
            { type: "heading", text: "O peso do problema" },
            { type: "paragraph", text: "É comum que no início de jornada, muitos empreendedores se sintam mais atraídos pelo tamanho da ideia do que pelo peso do problema. Ideias grandiosas costumam ser abstratas demais e desconectadas de clientes reais que possuem problemas reais — e que abririam a carteira para ter isso resolvido. Visões moldam o futuro, mas startups não são construídas apenas com visão; elas são construídas com dados e fatos." },
            { type: "highlight", text: "As empresas que sobrevivem são baseadas sobretudo em informações coletadas de potenciais clientes que, neste exato momento, estão frustrados com algo que pagariam muito bem para solucionar." },
            { type: "paragraph", text: "Ao analisar a retrospectiva de qualquer gigante da tecnologia, o começo é sempre o mesmo: fundadores resolvendo algo tão pouco glamouroso que chegava a ser chato colocar em um pitch. Mas, ironicamente, é essa obsessão pelo problema invisível que fornece a tração necessária para que uma startup ganhe força para, mais tarde, ter um impacto massivo no mundo." },

            { type: "divider" },
            { type: "heading", text: "Preparado(a) para a ação?" },
            { type: "paragraph", text: "A maior falha dos novos fundadores é ficar apaixonado pela complexidade de suas ideias, enquanto ignoram problemas reais, simples e urgentes. No CF Club, não formamos \"sonhadores de palco\". Ajudamos mentes inquietas a identificar essas dores reais e transformá-las em negócios práticos, validados e lucrativos." },
            { type: "paragraph", text: "Se você quer parar de apenas fantasiar sobre a sua \"ideia de um bilhão de dólares\" e começar a construir empresas reais ao lado de jovens realizadores insanos por resultados, o seu lugar é aqui. Não seja quem apenas fala sobre o futuro. Seja quem o constrói com as próprias mãos." },

            { type: "cta", text: "INSCREVA-SE NO CF CLUB", href: "/application" }
        ]
    },
    {
        id: "3",
        date: "02 MAR",
        category: "STARTUPS",
        title: "Por que Construir uma Startup Melhor Não é o Suficiente",
        slug: "por-que-startup-melhor-nao-e-suficiente",
        image: "/images/startup_disruption.png",
        readTime: "4 min",
        excerpt: "O que os fundadores entendem errado sobre disrupção e como as verdadeiras inovações tornam o sistema anterior completamente irrelevante.",
        content: [
            { type: "paragraph", text: "É comum encontrar em eventos do ecossistema de startups o clássico discurso de fundadores buscando parceiros dispostos a trabalhar dia e noite. Trata-se de uma verdade inegável no mercado: construir um negócio exige esforço excepcional. No entanto, muitas vezes essa motivação exaustiva desaparece após as primeiras falhas e a falta de progresso real, fazendo com que empreendedores abandonem a ousadia e passem a jogar pelo seguro, escolhendo ideias de baixo risco." },
            { type: "paragraph", text: "Entretanto, o mercado não recompensa quem joga pelo seguro. Ele recompensa aqueles preparados para assumir riscos em troca de construir algo com potencial de retorno monumental. Apenas no último ano, milhões de novas empresas foram abertas no mundo. Em um mercado tão saturado, apenas \"melhorar\" um produto não é o bastante. As ideias que realmente se destacam são aquelas que dobram as regras, desafiam suposições e mudam diretamente o comportamento do consumidor. Em outras palavras, é necessária uma verdadeira disrupção." },

            { type: "divider" },
            { type: "heading", text: "Onde as pessoas erram sobre disrupção" },
            { type: "paragraph", text: "Disrupção não diz respeito a criar um produto ligeiramente melhor. Construir algo marginalmente superior ao concorrente pode até gerar lucro, mas não é disruptivo. Seguir tendências também não é disrupção. Adicionar Inteligência Artificial a um produto que nunca precisou dela ou clonar o modelo de negócios de um aplicativo conhecido sendo pouca coisa mais barato são apenas formas de tentar sobreviver." },
            { type: "highlight", text: "A maioria dessas abordagens de \"melhoria contínua\" fracassa porque entram em conflito direto com os gigantes do mercado, dentro de um jogo cujas regras eles mesmos ditaram. Os grandes \"players\" já possuem mais recursos, informações e a confiança dos clientes." },
            { type: "paragraph", text: "Portanto, o verdadeiro desafio não é superar o sistema atual, mas torná-lo irrelevante." },
            { type: "paragraph", text: "Existem três formas reais de disrupção que as empresas bilionárias dominam:" },

            { type: "subheading", text: "1. Desafiar a \"Vaca Sagrada\" do setor" },
            { type: "paragraph", text: "Toda indústria possui crenças inquestionáveis sobre como as coisas deveriam funcionar. Quando os primeiros blogs surgiram e começaram a monetizar audiência, a indústria editorial tradicional não os considerava como escrita verdadeira. Contudo, muitos produtores de conteúdo independente lucravam mais do que os defensores do modelo antigo. Antigos players resistem a mudanças para proteger seu próprio status quo, e é exatamente aí que mora a oportunidade." },
            { type: "paragraph", text: "O Airbnb, por exemplo, não tentou construir hotéis melhores. O mercado acreditava que era inseguro hospedar-se na casa de um estranho, mas eles trataram esse problema diretamente criando um sistema de avaliações transparente e garantindo que as estadias fossem experiências autênticas e acessíveis. O mercado tradicional hoteleiro foi forçado a lidar com essa nova realidade. Todo setor tem suas premissas intocáveis — o segredo é encontrar qual delas derrubar." },

            { type: "subheading", text: "2. Atacar o modelo de negócios, e não o produto" },
            { type: "paragraph", text: "Vender o mesmo serviço por um preço menor não é disrupção. Disrupção ocorre ao mudar as engrenagens de como o mercado ganha dinheiro. O caso da Netflix contra as locadoras não era sobre ter os melhores filmes; era sobre resolver as dores do cliente eliminando a cobrança por atrasos." },
            { type: "highlight", text: "Ao cobrar uma taxa fixa mensal sem risco de multas, a Netflix não atacou apenas a concorrente da esquina, mas aniquilou toda a mecânica de aluguel por unidade. Disrupção não é brigar por uma fatia maior do bolo; é alterar qual é a receita do bolo e como ele é servido." },

            { type: "subheading", text: "3. Construir para o mundo que está emergindo" },
            { type: "paragraph", text: "O futuro não deve ser encarado apenas como um ponto distante no tempo, mas como um mundo onde as formas atuais de fazer as coisas serão inevitavelmente substituídas. Não se trata de refinar uma máquina de escrever até que ela saia perfeita, mas de inventar o processador de texto capaz de suprimi-la por completo. O Instagram não criou as fotografias digitais; ele mudou a forma como as pessoas interagem com elas, fazendo com que uma imagem atingisse milhares de pessoas em segundos." },
            { type: "paragraph", text: "Portanto, em vez de perguntar o que as pessoas querem comprar agora, a pergunta ideal é: o que pode ser criado para ajudar as pessoas a fazerem as coisas melhor do que as ferramentas em que confiam hoje? Fundadores implacáveis não tentam resolver problemas de hoje utilizando métricas do passado. Eles constroem suas soluções com os olhos no que o mundo utilizará daqui a cinco ou dez anos." },

            { type: "divider" },
            { type: "heading", text: "O próximo passo" },
            { type: "paragraph", text: "A mediocridade do mercado é tentar fazer \"mais do mesmo\", apenas com uma embalagem diferente. No CF Club, o foco não é criar produtos focados em consertar detalhes insignificantes, mas construir empresas que tornam o sistema anterior obsoleto." },
            { type: "paragraph", text: "Modelos que desconstroem as antigas premissas do mercado e criam inovação real são os que sobrevivem. Se você está pronto para parar de competir por migalhas nas regras dos outros e quer aprender a desenhar a próxima disrupção, o seu lugar é na nossa comunidade. Desafie o status quo e construa negócios inesquecíveis." },

            { type: "cta", text: "INSCREVA-SE NO CF CLUB", href: "/application" }
        ]
    },
    {
        id: "4",
        date: "02 MAR",
        category: "STARTUPS & AI",
        title: "A Única Coisa que Ninguém Está Falando Sobre Startups e IA",
        slug: "verdade-sobre-startups-e-inteligencia-artificial",
        image: "/images/ai_wine_toast.png",
        readTime: "5 min",
        excerpt: "Entre todas as grandes proclamações e cenários apocalípticos deprimentes, existe uma verdade silenciosa sobre a Inteligência Artificial e o ecossistema de negócios.",
        content: [
            { type: "paragraph", text: "Imagine a seguinte situação: um estudante apresenta um projeto. É uma apresentação limpa, organizada e bem entregue. No entanto, o tom, o ritmo e o formato dos slides soam estranhamente familiares. Ao ser questionado sobre o quanto de Inteligência Artificial ele utilizou em sua preparação, a reação instantânea é de defesa profunda. A presunção imediata é a de uma acusação de trapaça ou quebra de código de honra." },
            { type: "paragraph", text: "Porém, na perspectiva de quem avalia e entende o novo mercado, a reflexão é exatamente a oposta. A intenção não é acusar de trapaça o uso da tecnologia, mas sim exigir um padrão muito mais alto." },
            { type: "highlight", text: "Eis o que ninguém está discutindo sobre a IA: Todo mundo quer debater se as máquinas vão roubar empregos ou automatizar indústrias inteiras. Mas essa não é a mudança real. A verdadeira mudança — aquela que já está acontecendo silenciosamente — é que a IA vai elevar o nível para todos de forma brutal." },
            { type: "paragraph", text: "Ela não vai nos substituir. Ela vai remover todas as nossas desculpas." },

            { type: "divider" },
            { type: "heading", text: "A IA com que ninguém se preocupa" },
            { type: "paragraph", text: "Quando as pessoas discutem IA e startups, a conversa frequentemente parece uma profecia do fim do mundo: \"A IA vai matar a criatividade\", \"A IA vai nos tornar preguiçosos\", \"A IA vai substituir a todos\"." },
            { type: "paragraph", text: "Mas a realidade prática para quem realmente usa essas ferramentas no dia a dia é bem diferente. A IA não faz a parte mais difícil da engrenagem rodar. As máquinas não criam significado nem desenvolvem bom gosto. Elas não decidem quais narrativas importam, não determinam quais clientes focar e não sabem avaliar quais renúncias fazer quando o cenário de um negócio se torna desesperador." },
            { type: "highlight", text: "O que a IA faz é impulsionar impiedosamente a linha de base." },
            { type: "paragraph", text: "Dez anos atrás, uma startup que tivesse um site polido, documentação clara e alguns vídeos razoáveis de demonstração seria considerada impressionante. Hoje, isso é o mínimo absoluto. E a partir do próximo ano, as expectativas serão ainda maiores, simplesmente porque agora todo mundo tem a capacidade tecnológica de fazer com que o próprio trabalho pareça, ao menos superficialmente, impecável." },
            { type: "paragraph", text: "Quando todos conseguem entregar o \"ótimo\", apenas entregar o \"ótimo\" deixa de ser suficiente." },

            { type: "subheading", text: "O mínimo aceitável decolou" },
            { type: "paragraph", text: "Se um profissional tem acesso a ferramentas gratuitas ou quase gratuitas que podem gerar frases impecáveis, desenvolver slides deslumbrantes, corrigir falhas de código em segundos e até estruturar uma lógica argumentativa formidável, o mercado passa a esperar que o trabalho entregue reflita exatamente isso. Textos sem erros de digitação, lógicas cristalinas e formatação atrativa deixam de ser um diferencial e viram meramente os requisitos mínimos." },
            { type: "paragraph", text: "O medo não deveria ser quanto de um fluxo produtivo pode ser automatizado, e sim se as ideias que fundamentam o trabalho são capazes de serem elevadas." },

            { type: "divider" },
            { type: "heading", text: "A regra também vale para os fundadores" },
            { type: "paragraph", text: "Os clientes de uma empresa não se importam se uma startup constrói ferramentas com ou sem a assistência de IA. Eles só se importam se o produto soluciona de verdade o problema deles de forma eficaz." },
            { type: "paragraph", text: "Se um concorrente imediato usa IA para realizar validações de funcionalidades, lançar tutoriais complexos mais rápido e entregar suporte ao usuário mais ágil e perspicaz, tentar vender uma versão do seu produto que é \"boa o suficiente\" será a receita certa para falir em poucos meses." },
            { type: "highlight", text: "Esse é o paradoxo cruel da IA para os mais lentos: Ela não está rebaixando os padrões do mercado. Ela os está subindo a níveis atmosféricos." },

            { type: "divider" },
            { type: "heading", text: "A Verdadeira Transformação" },
            { type: "paragraph", text: "É comum ouvir fundadores de startups se gabarem da velocidade extrema que a IA trouxe para o desenvolvimento deles, como se ser o mais rápido fosse a condição de vitória isolada." },
            { type: "paragraph", text: "E sim, velocidade tem seu próprio peso. A IA otimiza códigos, compõe redações complexas e minera vastos volumes de dados de piscar de olhos. Mas a velocidade é apenas a linha de partida. O efeito secundário — o grande divisor de águas entre quem triunfa e quem perece pós-IA — é o domínio sobre a qualidade." },
            { type: "paragraph", text: "Considere: quando todo o ecossistema goza da mesma velocidade que você, a única métrica de combate restante é o quão cirúrgico e criativo você foi na forma de entregar o serviço. O ápice do novo empreendedorismo se baseia em explorar a tecnologia não como uma muleta que esconde falhas, mas como a alavanca de Arquimedes." },
            { type: "paragraph", text: "As empresas vencedoras não serão aquelas que simplesmente injetaram IA para automatizar tarefas medíocres que já possuíam. Serão aquelas que aplicaram IA para reinventar o escopo do que se acredita ser possível e desenharem jornadas de atendimento customizadas com níveis utópicos de aproximação." },
            {
                type: "list", items: [
                    "Imagine uma equipe de suporte cliente engatando soluções instantâneas, genuínas e recheadas de empatia.",
                    "Instruções e treinamentos para novos clientes de um software que de fato reescrevem o passo a passo com base na lentidão (ou facilidade) com que aquele usuário assimila cada conceito, atuando com tempo de reação perfeitamente realístico.",
                    "Anúncios ou campanhas de captação cujas engrenagens soam como um diálogo humano vivo e fluente, em oposição total ao marketing convencional."
                ]
            },
            { type: "paragraph", text: "Esse é o espartano novo padrão do mercado que está sendo colocado em jogo." },

            { type: "divider" },
            { type: "heading", text: "Competindo contra o melhor da internet" },
            { type: "paragraph", text: "É um erro grave presumir que eventuais deslizes operacionais como os de fundadores precoces ou o fato de uma startup ter um caixa escasso servem de validação ou de barreira protetória." },
            { type: "paragraph", text: "Os usuários deixaram, há anos, de comparar inovações de early stages com outras inovações da mesma categoria. Os usuários atuais avaliam tudo contra as suas próprias melhores e imbatíveis experiências nativas provenientes de qualquer recanto da internet." },
            { type: "paragraph", text: "Eles medem o quão polida a sua interface está espelhando-se nos padrões da Apple. Eles sentem falta da sugestão hiper personalizada de catálogos do Spotify no seu produto. Eles aguardam com ansiedade a destreza assombrosa nos desdobramentos lógicos que a OpenAI oferta. Ter desculpas sobre se tratar de um time enxuto sob forte contenção não isenta da reprovação. O consumidor demanda as respostas velozes que ele já viu que são viáveis." },

            { type: "divider" },
            { type: "heading", text: "O fim da tolerância do 'bom o suficiente'" },
            { type: "paragraph", text: "Avaliadores ou mentores de startups costumavam permitir uma dose alta de margem de tolerância. Quando um pitch deck revelava equívocos textuais frouxos, ou os rascunhos visuais pendiam a ser rasos, o mantra apaziguante insistia em lembrar que o desenvolvimento inicial é duro o bastante para perder noites buscando a perfeição ilusória." },
            { type: "paragraph", text: "Isto tudo, claro, habitava a era pré-IA omnipresente nos dispositivos pessoais. E quanto a hoje? Fim das desculpas." },
            {
                type: "list", items: [
                    "Se alguma concordância escorrega ou uma estrutura sintática desaba, ocorreu por negligência daquele desenvolvedor que optou por não usar os 30 segundos adicionais demandados para apertar as pontas de seu raciocínio.",
                    "Se todo cenário de elementos num material interativo reflete apatia e superficialidade monótona, reflete também a escolha de não devotar uma hora de interações com os modelos apropriados em nome de ilustrar um projeto à luz de ideias magnéticas.",
                    "Se os conceitos basais submetidos não sustentam força na hora de ser debatidos ou expandidos, é simplesmente porque houve conforto pernicioso no que consistia e finalizava apenas a primeira resposta gerada na interface do prompt."
                ]
            },
            { type: "highlight", text: "A IA não diminui a qualidade da avaliação que separa vencedores de perdedores e ela não se responsabiliza pelo colapso criativo nos métodos de negócio; pelo contrário. Ela evidencia inquestionavelmente de que lado exato da mesa você decide por sentar para combater." },
            { type: "paragraph", text: "Em um futuro inescapável, colherão lucros estratosféricos aquelas mentes que não resistem, mas também aquelas mentes que compreendem que essas arquiteturas computacionais são engrenagens pesadas criadas sob medida para turbinar o talento bruto — estabelecendo novos níveis operacionais táticos na sua startup pessoal, e na do resto da trilha do mundo contemporâneo." },
            { type: "paragraph", text: "Eis a desruptura genuína: A IA raramente destruirá e substituirá o essencial; A IA pulveriza os antigos limites do que você e o usuário têm o direito inalienável de demandar que seja o novo limite da grandeza funcional." },

            { type: "divider" },
            { type: "heading", text: "Você está pronto para elevar o sarrafo?" },
            { type: "paragraph", text: "Se você percebe que a inteligência artificial não é um atalho para trabalhar menos, mas sim uma alavanca para construir impérios antes inimagináveis, você entendeu o jogo. O mercado não vai perdoar os que ficaram para trás usando desculpas. No CF Club, unimos as mentes mais inquietas do Brasil para dominar as ferramentas e estratégias que ditam quem sobrevive e quem vence." },
            { type: "paragraph", text: "A velocidade e o alto padrão não são mais diferenciais; são obrigatórios. Venha executar ideias grandiosas ao lado de fundadores que estão esculpindo as próximas startups bilionárias." },

            { type: "cta", text: "INSCREVA-SE NO CF CLUB", href: "/application" }
        ]
    },
    {
        id: "5",
        date: "02 MAR",
        category: "MINDSET",
        title: "Você Não Pode Ser um Grande Fundador Sem Se Sentir um Idiota",
        slug: "nao-seja-grande-sem-parecer-idiota",
        image: "/images/laughing_founder.png",
        readTime: "5 min",
        excerpt: "Por que a história de origem de quase todos os fundadores geniais começa com as pessoas rindo deles.",
        content: [
            { type: "paragraph", text: "Imagine a seguinte cena em um campus universitário: um estudante calouro se aproxima com brilho nos olhos e pergunta: \"Qual é o seu segredo para ter tanto sucesso nas redes sociais?\"" },
            { type: "paragraph", text: "A reação imediata a isso, para quem vive os bastidores, é dar boas risadas. A sociedade enxerga métricas superficiais — como um grande número de seguidores ou um crachá de \"Fundador\" — e imediatamente rotula isso de sucesso. Mas a realidade do \"sucesso\" nos bastidores não costuma ter nada de glamourosa. Muitas vezes o espetáculo visual significa apenas que existe um adulto passando horas falando sozinho em salas vazias, lutando de forma constrangedora para posicionar um tripé." },
            { type: "paragraph", text: "Entretanto, a pergunta verdadeira por trás de questionamentos como esse é bem mais profunda: Como alguém faz algo que realmente importa? Como construir algo para o qual as outras pessoas de fato vão prestar atenção?" },
            { type: "highlight", text: "A resposta, baseada na vivência de praticamente todo grande construtor, é brutalmente simples: Você precisa estar disposto a passar constrangimento e parecer ridículo. Em termos mais modernos, você tem que estar disposto a ser \"cringe\"." },

            { type: "divider" },
            { type: "heading", text: "O sucesso de perto é quase sempre patético" },
            { type: "paragraph", text: "As pessoas que coroamos como \"bem-sucedidas\" quase nunca parecem bem-sucedidas enquanto estão efetivamente executando o trabalho." },
            { type: "paragraph", text: "Pense em qualquer figura pública de sucesso que aparente ter uma vida inatingível. Antes de Taylor Swift esgotar turnês mundiais, ela era apenas uma adolescente suando a camisa tocando em feiras agropecuárias enquanto as pessoas passavam reto pelo palco comendo algodão-doce. Antes do Mr. Beast se tornar o magnata do YouTube, ele era só um garoto publicando infinitos vídeos desesperados para uma plateia de 12 pessoas, sendo a maioria delas os seus próprios amigos. Antes de Steve Jobs ou Bill Gates virarem deuses da tecnologia, eles eram jovens de 20 e poucos anos, socialmente inábeis, tentando convencer qualquer um que topasse escutar de que aquelas empresas esquisitas de computadores de garagem eram o futuro da humanidade." },
            { type: "paragraph", text: "Todo começo glorioso exige uma dose letal de humilhação. Publicar textos que ninguém lê. Lançar produtos que ninguém compra. Receber rejeições diretas de quem você admira. Tentar discursar e gaguejar, enquanto aqueles que te conhecem secretamente zombam de você por se atrever a tentar focar em algo maior." },
            { type: "highlight", text: "O que parece confiança inabalável visto de longe é, quase sempre, um amontoado de constrangimentos administrados quando se olha de perto." },
            { type: "paragraph", text: "A vergonha é o preço do ingresso. Se você quer construir algo imperativo para o mundo, tem que aceitar de forma pacífica a ideia de que as pessoas vão rir de você no meio do percurso." },

            { type: "divider" },
            { type: "heading", text: "Por que os fundadores têm pânico de virar piada" },
            { type: "paragraph", text: "Fundadores, em particular, sofrem barbaramente com essa lição dura. Entrar no jogo e iniciar uma empresa não é apenas empilhar linhas de código ou desenhar um produto. É incorporar um papel e declarar em voz alta para o mundo (e isso inclui potenciais investidores, amigos íntimos e a própria família) de que você é audacioso o suficiente para criar algo novo e incrivelmente valioso tirando absolutamente do zero." },
            { type: "paragraph", text: "Essa é uma aposta arrogante, e apostas arrogantes geram imenso ceticismo em quem ouve." },
            { type: "paragraph", text: "A reposta natural de quem lidera para combater esse ceticismo das pessoas é vestir uma armadura imensa. É o motivo número um pelo qual iniciantes se esforçam absurdamente para tentar parecer polidos, impecáveis, profissionais e irrefutavelmente \"credíveis\". Eles buscam se comportar como se não houvesse rachaduras, como se possuíssem um mapa completo com as respostas e o domínio do caminho. Aquele tipo forçado de certeza é o escudo imaginário utilizado para afastar os risos." },
            { type: "highlight", text: "Mas o veneno letal embutido em tentar se proteger meticulosamente das vaias é que essa armadura asfixia e bloqueia exatamente as experiências formativas que te farão melhor." },
            { type: "paragraph", text: "Se um empreendedor executa unicamente ações que remetem a um ambiente de segurança implacável, ele nunca será jogado nas situações caóticas de tensão que o forçam a expandir. Se o relato compartilhado for só o lado glamuroso da jornada cheia de supostos percalços já superados, ele jamais receberá o feedback doloroso (porém necessário) capaz de corrigir rumos erráticos. Se o terror de \"parecer um completo idiota\" for soberano, os experimentos destemidos de tentativa e erro, os quais verdadeiramente fornecem validações sólidas, serão sistematicamente evitados." },
            { type: "paragraph", text: "Sem as investidas questionáveis, as aproximações esquisitas e os vereditos duvidosos recheados de \"momentos cringe\", o crescimento não acontece. Quando a postura trava por polidez e medo, você é condenado a repetir em loop tudo aquilo em que sente algum grau conforto. O problema fatal é que nada de revolucionário habita a zona de conforto." },

            { type: "divider" },
            { type: "heading", text: "A linha tênue entre paixão crônica e performance de palco" },
            { type: "paragraph", text: "No fundo, o questionamento daquele aluno ansioso querendo descobrir \"os atalhos milagrosos do sucesso\" foi a pergunta equivocada. Profissionais de elite não caçam sucesso. Eles caçam as coisas com as quais realmente se importam." },
            { type: "paragraph", text: "A cantora que vira meme apresentando-se em bares minúsculos vazios não pauta sua mente sobre o quanto aquilo a faz parecer \"legal\"; sua fixação dita apenas se a canção reflete ou não a verdadeira de sua alma. O desenvolvedor calouro que queima noites escrevendo e recriando lógicas falhas para repositórios vazios não mira em impressionar a paquera da escola universitária; a fome interna dele quer apenas domar aquela determinada habilidade que fará os seus sistemas processarem de uma forma incrivelmente melhor. A fundadora que se submete à execração e gozações no ecossistema local não teme ficar ridicularizada perante todos em volta. A mente dela tem furos de bala cravados de obsessão para dizimar aquele problema colossal pelo qual ela não consegue sequer dormir." },
            { type: "highlight", text: "A obsessão brutal o torna cego frente o risco da chacota, anulando totalmente o medo de constrangimentos colaterais." },
            { type: "paragraph", text: "Ceder-se a pagar esse preço humilhante inicial de bom grado é a base química silenciosa — processada após anos no escuro — o que moldará aquela competência devastadora sobre a qual a massa apontará no futuro próximo chamando submissamente de \"Talento inato\", de \"Visão visionária\", do famigerado \"Sucesso\"." },

            { type: "divider" },
            { type: "heading", text: "Construa impérios se expondo à estupidez" },
            { type: "paragraph", text: "Nenhuma jornada grandiosa vem sem arranhões terríveis na imagem pelo percurso. Quem está com receios a tal ponto em que as pessoas hesitem completamente na hora de tecer brincadeiras pejorativas ou debochar veladamente das suas ousadias durante os anos obscuros, então as chances são altas de que sequer esforço e ambição o bastante estejam sendo depositados ali naquele alvo." },
            { type: "paragraph", text: "Ser estupendo e indestrutível amanhã significa se condicionar hoje a engolir a pose de ser julgado como um abobado absoluto. Mostrar ações e comportamentos idiotas aponta que invenções audaciosas são testadas em combate. Experimentar momentos crônicos de humilhação confirma a expansão. Padecer virando chacota local atesta a ousadia vitalícia ao apostar em projetos maiores a face ao público sem coberturas fofas." },
            { type: "paragraph", text: "As próximas lendas não são e não nascem como super-humanos blindados preenchendo todos os gabaritos confiantemente inabaláveis nas manchetes da Forbes ou no seio das corporações. São operários contínuos os quais digerem o fel e o ridículo da marcha ininterrupta." },
            { type: "paragraph", text: "Desencana dessa ânsia por se posicionar no ambiente sempre transmitindo extrema inteligência, descolamento imaculado, ou o invólucro plástico de um vencedor predestinado. Busque tenazmente criar os pilares do que incendeia seu núcleo interior ao ponto onde as falácias de eventuais ridicularizações sejam totalmente pulverizadas pelo avanço da meta. A divergência suprema separando meros entusiastas cheios de ideias geniais invisíveis daquela fina casta de operadores de mudança de mundo... a mágica resposta redutora situa apenas nesta simples propensão: dispor-se de coração frente a vala dos idiotas visando alcançar as conquistas inimagináveis no dia seguinte." },

            { type: "divider" },
            { type: "heading", text: "Vença a mediocridade do conforto." },
            { type: "paragraph", text: "No final das contas, o constrangimento que freia ou a chacota irrelevante das bordas sempre tentarão neutralizar inovações densas. E isso não acontece apenas nas garagens de garotos aleatórios; isso acontece inclusive das próprias mentes internas quando nos blindamos ao arriscar. No CF Club enxugamos todas as barreiras do orgulho. Elevamos e equipamos realizadores inquebráveis focados somente em execução genuína rumo à disrupção. A vaidade barata e a pose estéril evaporam; negócios concretos ganham terreno para moldar fatias expressivas da humanidade. O futuro pertence apenas a quem se atreveu a aceitá-lo antes do veredito estético do sistema tradicional ditar moda. Deixe as velhas posturas confortáveis no asfalto quente da irrelevância. Domine sua trajetória." },

            { type: "cta", text: "INSCREVA-SE NO CF CLUB", href: "/application" }
        ]
    },
    {
        id: "6",
        date: "02 MAR",
        category: "STARTUPS",
        title: "O Motivo Inesperado Pelo Qual a Maioria das Startups Morre Após o Segundo Ano",
        slug: "motivo-startups-morrem-ano-dois",
        image: "/images/founder_looking_out_window.png",
        readTime: "4 min",
        excerpt: "Um padrão perigoso que sempre parece se repetir com fundadores que confundem o sucesso inicial com compreensão real do mercado.",
        content: [
            { type: "paragraph", text: "Alguns meses atrás, tomei café com um ex-aluno cuja startup parecia estar indo surpreendentemente bem. Doze funcionários. Receita estável. Um produto que as pessoas genuinamente gostavam — basicamente, todos os sinais vitais positivos que você gostaria de ver nos estágios iniciais de um empreendimento digital. Ele estava vivendo aquele ponto doce de crescimento onde as coisas finalmente começam a parecer... administráveis. Não fáceis, por óbvio, mas administráveis, previsíveis e um tanto quanto estáveis." },
            { type: "paragraph", text: "Naturalmente, fiz a ele a pergunta que sempre faço aos fundadores assim que atingem esse estágio: \"E então... o que você tem aprendido ultimamente?\"" },
            { type: "paragraph", text: "Sua resposta foi: \"Estou a maior parte do tempo apenas administrando a operação agora. Nós meio que já sabemos o que funciona, então eu não estou mais fazendo muitos experimentos. Estamos 100% focados em operacionalizar as coisas.\"" },
            { type: "highlight", text: "A frase pareceu perfeitamente sensata. No entanto, aquele foi o momento exato em que eu soube que ele estava rumando para um buraco. \"Operacionalizar\" é o estado onde os fundadores se colocam no maior perigo possível." },
            { type: "paragraph", text: "O perigo real não acontece quando tudo está pegando fogo. Não é quando a equipe está sofrendo para validar o MVP. E definitivamente não é no dia zero." },
            { type: "paragraph", text: "O ponto crítico de perigo é o Ano Dois. É exatamente quando a diretoria finalmente para de se sentir farta e completamente perdida e, num erro brutal, começa a tentar agir como uma \"empresa de verdade\". Se você não for meticuloso, esse é o momento exato em que sua startup vai, de forma invisível, começar a morrer." },

            { type: "divider" },
            { type: "heading", text: "A Paralisia do Falso Entendimento" },
            { type: "paragraph", text: "A morte lenta no Ano Dois é resultado de um estranho paradoxo no empreendedorismo: os mesmos comportamentos que geram tração inicial para os fundadores — curiosidade fanática, humildade, iteração acelerada, conversas incessantes com clientes, questionamentos sem fim — curiosamente se tornam os exatos comportamentos que os fundadores abandonam assim que as empresas começam a apresentar resultados." },
            { type: "paragraph", text: "No Ano Um, os fundadores têm que fazer perguntas estúpidas o tempo todo. Afinal, eles não sabem nada." },
            { type: "paragraph", text: "No Ano Dois, eles simplesmente param de fazer essas perguntas ridículas porque assumem que já sabem tudo o que precisam. E esse passa a ser o motivo insuspeito pelo qual legiões de startups morrem. É o ponto de falha bizarro onde os líderes confundem tração incipiente com entendimento soberano do mercado." },
            { type: "paragraph", text: "Como resultado desse orgulho sutil, eles encerram todas as condutas frenéticas que os ajudaram a aprender no princípio. O cálculo é inexorável: quando você para de aprender, sua empresa para de evoluir. E quando ela para de evoluir, o mercado passa por cima dela como um rolo compressor." },

            { type: "divider" },
            { type: "heading", text: "A Rota que Todo Fundador Repete" },
            { type: "paragraph", text: "Alguns dias atrás, aquele mesmo ex-aluno entrou em contato, mas desta vez, a voz do outro lado soava nervosa." },
            { type: "paragraph", text: "\"Os clientes estão começando a cancelar as assinaturas em massa\", ele relatou. \"Os concorrentes estão entregando features mais rápidas. Acho que o mercado está mudando de rumo.\"" },
            { type: "highlight", text: "É claro que o mercado está mudando. Mercados sempre vão mudar. Essa é, na verdade, a única e exclusiva certeza na qual você pode apostar a sua vida se tratando do ecossistema de startups." },
            { type: "paragraph", text: "A regra de ouro é: O instante em que você começa a se sentir confortável e seguro, é o mesmo instante em que a placa tectônica se moveu debaixo dos seus pés." },
            { type: "paragraph", text: "Então, eu devolvi algumas poucas perguntas diretas a ele:" },
            {
                type: "list", items: [
                    "\"Quantas entrevistas reais com clientes você liderou nos últimos seis meses?\"",
                    "\"Você sentou com seus usuários mais frequentes para interrogá-los sobre o que eles precisam a seguir?\"",
                    "\"Quando foi a última vez em que sua equipe colocou na rua uma prototipação de forma precocemente constrangedora?\"",
                    "\"Que porcentagem matemática do seu tempo você gasta descobrindo coisas versus gerenciando processos atuais?\""
                ]
            },
            { type: "paragraph", text: "As respostas que ele me deu foram esquivas:" },
            {
                type: "list", items: [
                    "\"Nós estamos coletando feedback gradualmente.\"",
                    "\"Estamos arquitetando uma pesquisa de satisfação em larga escala.\"",
                    "\"Estamos pensando em expandir as nossas métricas e dados analíticos.\"",
                    "\"Estava na minha agenda revisar o roadmap de longo prazo do produto.\""
                ]
            },
            { type: "paragraph", text: "Todas essas reações institucionais são meros disfarces polidos para o atestado de óbito: \"minha empresa desistiu de aprender\"." },
            { type: "paragraph", text: "Eles haviam ficado tão cegamente focados em botar ordem na casa e estruturar os tijolos do que já tinham erguido, que esqueceram da regra mais sombria do vale do silício: a obra nunca está finalizada." },
            { type: "paragraph", text: "Essa é a armadilha do segundo ato. Quando você funda a companhia, a missão é pura exploração. Quando a empresa engrena e começa a faturar e operar, a missão passa a ser exploração comercial. Mas o alerta vermelho é este: quando você super-explora o ganho comercial e abandona 100% da verve de exploração criativa... você expira e morre." },
            { type: "paragraph", text: "Falando da forma mais crua possível: quase nunca um fundador com tração quebra e afunda por falta de inteligência operacional. Ele afunda porque simplesmente optou por fuzilar sua própria curiosidade." },

            { type: "divider" },
            { type: "heading", text: "O Conforto Fatal do Segundo Ano" },
            { type: "paragraph", text: "Acompanhando mentoriais ao longos da última década, atestei esse padrão nocivo com uma frequência tão brutal que isso parece agora uma lei inexorável da gravidade no mundo empresarial — válida para toda e qualquer empresa que toque travesseiros macios de lucro e atinja os sonhados vales de calmaria na tração." },
            { type: "paragraph", text: "Ano Piloto: Caos. Confusão generalizada. Senso de humildade implacável. Você rastreia e interpela seus clientes fanaticamente toda semana. Motivo? Você está apavorado." },
            { type: "paragraph", text: "Ano Dois: Rotinas. Processos sistêmicos. A falsa miragem de ordem e progresso no painel do Google Analytics. Você raramente dialoga de perto e francamente com as cobaias reais que sustentam seu projeto. Motivo? Você está ocupado demais... \"escalando\"." },
            { type: "highlight", text: "Aquele salto da ansiedade caótica para as métricas bonitas e dashboards verdes transparece aos diretores como a tal da \"maturidade empresarial\". No fundo, é nada além de pura complacência letárgica usando o smoking sofisticado da palavra \"Estratégia\"." },
            { type: "paragraph", text: "A dura realidade que os fundadores deixam pelo retrovisor enquanto se aplaudem por se tornarem pragmáticos de escritório é brutal e fria. Eles esquecem que a base de clientes crua — aqueles \"malucos\" tolerantes a bugs que compraram a promessa do Ano Um e serviram como bote salva-vidas mantendo o projeto na superfície d'água — jamais representará a complexa safra de perfil de consumidores necessários para garantir o triunfo e a consolidação do gigante almejado no Ano Três." },
            { type: "paragraph", text: "Por qual razão lógica? Porque os mercados metamorfoseiam as demandas diariamente. Toda sexta-feira, os canais de alcance digital se desintegram e renascem alterados. Concorrente de peso injetam bilhões em novas teses às terças e às quintas-feiras. Os níveis de ansiedade e os caprichos dos consumidores mudam a cada estação." },
            { type: "paragraph", text: "Fundadores prepotentes que abandonam as trincheiras frontais da descoberta e cessam de aprender coisas novas todo fim de tarde, são exatamente os mesmos fundadores atropelados na esquina do ano subsequente." },

            { type: "divider" },
            { type: "heading", text: "Fique Longe Dessa Tumba" },
            { type: "paragraph", text: "Você constrói um produto? Administra um projeto inovador? Então nunca sacrifique sua essência de calouro apavorado." },
            { type: "paragraph", text: "Quando se ostenta as vestes de uma \"Startup\", a arma atômica suprema frente aos burocratas lentos da indústria consolidada será eternamente uma única virtude intrínseca: a tenacidade indomável da sua capacidade ininterrupta de focar com sangue nos olhos, abraçar doses extremas de curiosidade investigativa e, acima de tudo, exibir cinturas ágeis à destemidez tática." },
            { type: "paragraph", text: "Processualizar é crucial para alargar o balanço, sim. Incontestável. Porém, essa chave inglesa se apresenta também como uma guilhotina pronta para amputar sutilmente, centímetro por centímetro, o fluxo vital de ousadia mental que pulsa dentro de uma companhia." },
            { type: "paragraph", text: "Não submeta o seu sonho a essa morte burocrática e lenta. A chance remanescente para a sobrevivência a longo prazo no atual terreno sanguinário da tecnologia dependerá única e exclusivamente dessa postura fundamentalista: force seu cérebro de fundador a permanecer se comportando e agindo como um iniciante frenético cheio de dúvidas... isso por anos a fio, muito tempo depois de suas roupas e seu escritório terem largado a aparência de \"calouro pobre de garagem\"." },

            { type: "cta", text: "INSCREVA-SE NO CF CLUB", href: "/application" }
        ]
    }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find(post => post.slug === slug);
}
