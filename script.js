/* ============================================================================================================
    SCRIPT.JS: LÓGICA AVANÇADA, DADOS E INTERATIVIDADE
    Total de linhas planejado: > 2000
    ------------------------------------------------------------------------------------------------------------
    Estrutura Modular:
    1. DataModule: Dados, Resumos e Persistência (localStorage)
    2. EffectsModule: Canvas (Partículas), Splash Sequence e Easter Egg
    3. RenderModule: Renderização do Grid de Cards, Galeria e Modais
    4. UIModule: Event Listeners, Router Hash e Interações do Usuário
    5. AccessibilityModule: Modos de Leitura, Fontes, Line Height
    6. Initialization: Sequência de Inicialização e Fallback
    ============================================================================================================
*/

// Módulo 1: DataModule (Dados, Resumos, e Persistência)
const DataModule = (() => {
    // --------------------------------------------------------------------------------
    // 1.1. ESTRUTURA DE DADOS: 14 Redações (Completas e Resumidas)
    // --------------------------------------------------------------------------------
    const REDACOES = [
        {
            id: 1,
            tema: "POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?",
            tituloEnsaio: "A PRESSÃO ESTÉTICA E DOS JOVENS NA ERA DIGITAL",
            tags: ["Estética", "Juventude", "Mídia", "Saúde Mental"],
            resumo: "A crescente procura por procedimentos estéticos entre jovens é impulsionada pela pressão da era digital. Redes sociais como Instagram e TikTok, através de filtros e edições, estabelecem padrões de beleza irreais e onipresentes, fomentando a insatisfação corporal e a busca por aceitação social. Historicamente, a aparência abre portas, mas o ambiente digital intensifica essa influência. O avanço tecnológico democratizou o acesso a intervenções estéticas precoces, porém, essa agilidade esconde riscos médicos e psicológicos, especialmente quando a motivação é externa. Para mitigar esse ciclo vicioso, o texto propõe uma intervenção educativa coordenada entre o Ministério da Educação e especialistas em saúde mental. Programas escolares devem abordar autoestima, aceitação corporal e o uso crítico da mídia. Adicionalmente, campanhas de conscientização nas mídias sociais, com a participação de influenciadores, são sugeridas para valorizar a diversidade e promover uma relação mais saudável com a autoimagem. O objetivo final é desconstruir a influência nociva dos padrões estéticos impostos. (Aprox. 170 palavras)",
            textoCompleto: "Vivemos em uma sociedade onde a mídia, a Internet e as redes sociais ditam de forma cada vez mais intensa, o que é considerado belo. Imagens de corpos e rostos 'perfeitos' são onipresentes, criando uma pressão para que as pessoas se encaixem em um ideal muitas vezes intangível. Historicamente e em diversas culturas, a aparência é um fator que pode abrir portas. Embora esse fenômeno não seja novo, o cenário atual potencializa sua influência principalmente sobre os jovens. Um dos principais fatores para o aumento dos procedimentos estéticos nessa faixa é a busca por aceitação social. Plataformas como Instagram e TikTok reforçam padrões irreais por meio de filtros e edições, gerando comparações constantes e insatisfação corporal. Segundo pesquisas recentes, a exposição prolongada a essas imagens aumenta significante a probabilidade de baixa autoestima e, consequentemente, o interesse por intervenções estéticas precoces. Além disso, o avanço tecnológico e a popularização de clínicas especializadas tornaram esses procedimentos mais acessíveis e rápidos, o que, contribui para a sua procura. Porém, essa agilidade esconde riscos, como complicações médicas e impactos psicológicos, especialmente quando a motivação principal é atender expectativas externas e não o bem-estar. Assim, há um ciclo em que a pressão social e a oferta de serviços se retroalimentam, impulsionando a indústria estética. Portanto, é necessário que haja uma intervenção efetiva para reduzir os impactos negativos desse fenômeno. O Ministério da Educação, em parceria com especialistas em saúde mental, poderia implementar programas educativos nas escolas, abordando autoestima, aceitação corporal e uso crítico das redes sociais. Ademais, campanhas de conscientização em mídias sociais, com influenciadores, poderiam diminuir mensagens que valorizam a diversidade de corpos e rostos. Dessa forma, seria possível minimizar a influência nociva dos padrões estéticos impostos e promover uma relação mais saudável dos jovens com a própria imagem."
        },
        {
            id: 2,
            tema: "ACESSIBILIDADE E INCLUSÃO DE PESSOAS COM DEFICIÊNCIA NO BRASIL",
            tituloEnsaio: "ACESSIBILIDADE É INCLUSÃO, CAMINHOS PARA A CIDADANIA NO BRASIL",
            tags: ["Inclusão", "Direitos Humanos", "Legislação", "Infraestrutura"],
            resumo: "O ensaio aborda a disparidade entre a garantia constitucional de dignidade e igualdade (CF/88) e a realidade da inclusão de pessoas com deficiência no Brasil. Apesar da existência de leis importantes (Lei nº 10.098/2000 e LBI/2015), o país enfrenta inúmeros obstáculos. A infraestrutura pública e privada frequentemente carece de adaptações, manifestada em rampas mal projetadas, ausência de intérpretes de Libras e barreiras digitais. Tais falhas não apenas restringem a autonomia e a integração, mas sinalizam uma negligência histórica do Estado. A exclusão extrapola o espaço físico, sendo agravada pelo preconceito e a falta de informação, que dificultam o acesso a empregos e educação de qualidade. Propõe-se que o poder público intensifique a fiscalização das normas vigentes e amplie os investimentos em acessibilidade (urbana e digital). A escola é vista como um espaço central para difundir valores de respeito. Campanhas educativas são essenciais para promover a conscientização e, assim, garantir condições reais de cidadania e participação social. (Aprox. 170 palavras)",
            textoCompleto: "A Constituição Federal de 1988 garante a todos os cidadãos o direito à dignidade, à igualdade e à participação plena na sociedade. Contudo, a realidade brasileira ainda evidencia inúmeros obstáculos à efetiva inclusão das pessoas com deficiência, seja pela falta de infraestrutura acessível, seja pela persistência de preconceitos sociais. Nesse contexto discutir a acessibilidade e a inclusão é primordial para promover justiça social e cidadania. A princípio, é válido ressaltar que, apesar da existência de leis como a Lei nº 10.098/2000 e a Lei brasileira de inclusão (2015), muitos espaços públicos e privados permanecem despreparados para atender a essa parcela da população. Rampas mal projetadas, ausência de intérpretes de Libras em serviços essenciais e barreiras digitais são exemplos que restringem a autonomia e a integração social dos indivíduos com deficiência. Isso revela não apenas falhas na fiscalização, mas também uma negligência histórica do Estado e da sociedade. Além disso, a exclusão não se limita ao espaço físico. O preconceito e a falta de informação reforçam a marginalização, dificultando o acesso ao mercado de trabalho e à educação de qualidade. Nesse sentido, a escola tem papel central ao difundir valores de respeito e diversidade desde a infância, contribuindo para formação de uma sociedade mais inclusiva. Portanto, para que haja mudanças efetivas, é imprescindível que o poder público intensifique a fiscalização das normas já existentes e amplie investimentos em acessibilidade, tanto em ambientes urbanos quanto digitais. Paralelamente, campanhas educativas devem ser promovidas para conscientizar a população sobre a importância da inclusão. Desse modo, será possível assegurar às pessoas com deficiência não apenas direitos garantidos por lei, mas, sobretudo, condições reais de cidadania e participação social."
        },
        {
            id: 3,
            tema: "PRINCIPAIS FATORES QUE INFLUENCIAM NA QUALIDADE DE VIDA E NO BEM-ESTAR DA POPULAÇÃO",
            tituloEnsaio: "FATORES DETERMINANTES PARA O BEM-ESTAR E A QUALIDADE DE VIDA NO BRASIL",
            tags: ["Saúde", "Socioeconomia", "Bem-Estar", "Políticas Públicas"],
            resumo: "A qualidade de vida e o bem-estar no Brasil, um país marcado por desigualdades estruturais, são o foco deste texto. A Organização Mundial da Saúde define esses conceitos pela percepção individual sobre saúde e realização. Múltiplos fatores influenciam esse processo, sendo a saúde física e mental o elemento central. O acesso precário a serviços de saúde pública, juntamente com a ascensão de doenças emocionais como ansiedade e depressão, compromete a satisfação plena e a produtividade social. Paralelamente, a dimensão socioeconômica exerce forte influência. A desigualdade de renda e a escassez de oportunidades educacionais dificultam a mobilidade social e amplificam a sensação de insegurança. Essa realidade estabelece um caráter desigual no bem-estar nacional, onde o conforto é privilégio de poucos. A intervenção necessária exige do governo federal, por meio dos Ministérios da Saúde e Educação, investimentos em políticas públicas que universalizem a saúde preventiva e valorizem a educação básica. Campanhas de conscientização para hábitos saudáveis e cuidado mental são essenciais para reduzir estigmas e elevar a qualidade de vida coletiva. (Aprox. 190 palavras)",
            textoCompleto: "A busca pelo bem-estar e a qualidade de vida é um dos grandes desafios da contemporaneidade, sobretudo em países marcados por desigualdades estruturais, como o Brasil. De acordo com a Organização Mundial da Saúde, tais conceitos estão relacionados à percepção individual sobre a própria saúde, segurança e realização pessoal. No entanto, múltiplos fatores influenciam diretamente esse processo, desde condições socioeconômicas até aspectos ambientais e culturais. Assim torna-se imprescindível refletir sobre os principais determinantes da qualidade de vida da população brasileira. Em primeiro lugar, é válido ressaltar o papel da saúde física e mental como elemento central para o bem-estar. A precariedade de acesso a serviços da saúde pública, aliada ao aumento de doenças emocionais, como ansiedade e depressão, compromete a satisfação plena dos indivíduos. Essa realidade evidencia como um descuido com a saúde coletiva impacta não apenas a vida do sujeito, mas também a produtividade social. Além disso, a dimensão socioeconômica exerce forte influência sobre a qualidade de vida. A desigualdade de renda e a falta de oportunidades educacionais dificultam a mobilidade social e ampliam a sensação de insegurança. Dessa forma, enquanto alguns grupos conseguem usufruir de conforto e segurança, outros enfrentam a exclusão social, o que reforça o caráter desigual do bem-estar no país. Nesse sentido, é necessário que o governo federal, por meio do Ministério da Saúde e da Educação, invista em políticas públicas que ampliem o acesso universal à saúde preventiva e promovam a valorização da educação básica. Paralelamente, campanhas de conscientização devem estimular a prática de hábitos saudáveis e o cuidado com a saúde mental, buscando reduzir estigmas e ampliar a qualidade de vida coletiva."
        },
        {
            id: 4,
            tema: "AS MUDANÇAS CLIMÁTICAS NO BRASIL E SEUS DESAFIOS",
            tituloEnsaio: "AS MUDANÇAS CLIMÁTICAS",
            tags: ["Meio Ambiente", "Clima", "Sustentabilidade", "Desigualdade"],
            resumo: "O ensaio aborda o paradoxo do desenvolvimento humano versus a exploração desmedida dos recursos naturais, que ameaça a vida no planeta. No Brasil, com sua vasta biodiversidade, os impactos são cada vez mais evidentes: secas prolongadas, enchentes recorrentes e insegurança alimentar. O aquecimento global, causado pela emissão de gases de efeito estufa (desmatamento, combustíveis fósseis), é o fator central, resultando na elevação da temperatura média e no aumento do nível do mar, afetando comunidades costeiras. O modelo econômico desordenado aprofunda as desigualdades sociais, pois as populações vulneráveis são as mais afetadas pelos desastres naturais. Além disso, o país enfrenta desafios geográficos específicos: o Nordeste lida com a intensificação das estiagens, prejudicando a agricultura familiar, enquanto grandes áreas urbanas (como São Paulo e Rio de Janeiro) sofrem com enchentes e deslizamentos. A questão climática é, portanto, multifacetada — ambiental, social, econômica e ética —, e exige soluções urgentes para minimizar os danos e garantir a dignidade da população. (Aprox. 190 palavras)",
            textoCompleto: "Nos últimos séculos, a relação do ser humano com a natureza tem se configurado em um paradoxo: ao mesmo tempo em que a sociedade se desenvolve por meio da exploração dos recursos naturais, é justamente essa exploração desmedida que ameaça a continuidade da vida no planeta. No Brasil, país de dimensões continentais e detentor de vasta biodiversidade, os impactos das mudanças climáticas são cada vez mais evidentes, manifestando-se por secas prolongadas, enchentes recorrentes e insegurança alimentar. Diante desse cenário, torna-se urgente discutir os desafios impostos por essa problemática e buscar soluções efetivas para minimizá-la. Em primeiro lugar, é necessário destacar o aquecimento global como um dos fatores centrais dessa crise. O aumento da emissão de gases do efeito estufa, consequente de atividades humanas como o desmatamento e a queima de combustíveis fósseis, intensifica o aquecimento da atmosfera terrestre. Esse processo, além de elevar a temperatura média do planeta, provoca o derretimento das calotas polares e a elevação do nível do mar, fenômenos que impactam diretamente comunidades costeiras brasileiras. Nesse contexto, percebe-se que o avanço desordenado do modelo econômico atual ignora os limites ambientais e aprofunda desigualdades sociais, pois são as populações mais vulneráveis as que mais sofrem com desastres naturais. Ademais, o Brasil enfrenta desafios específicos devido às suas particularidades geográficas. Regiões como o Semiárido nordestino sofrem historicamente com longos períodos de estiagem, os quais, intensificados pelas mudanças climáticas, prejudicam a agricultura familiar e a pecuária, comprometendo a segurança alimentar. Em contrapartida, áreas urbanas como São Paulo e Rio de Janeiro convivem com enchentes e deslizamentos causados pelo excesso de chuvas, os quais resultam em perdas materiais e em tragédias humanas. Dessa forma, a questão climática não é apenas ambiental, mas também social, econômica e ética, já que coloca em xeque a qualidade de vida e a dignidade da população."
        },
        {
            id: 5,
            tema: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
            tituloEnsaio: "DESENVOLVIMENTO TECNOLÓGICO",
            tags: ["Tecnologia", "Lixo", "Sustentabilidade", "Saúde"],
            resumo: "O avanço tecnológico moderno trouxe benefícios, mas gerou um problema crescente: o descarte inadequado de lixo eletrônico (e-waste). Esta prática impacta gravemente o meio ambiente e a saúde humana. Resíduos eletrônicos contêm metais pesados tóxicos como chumbo e mercúrio, que, ao se infiltrarem no solo e na água, comprometem ecossistemas e podem causar doenças graves em comunidades adjacentes. A crise é agravada pela falta de conscientização da população e pela carência de políticas públicas eficazes. O Brasil é citado em relatório da ONU como um dos maiores produtores de lixo eletrônico, mas com índices insuficientes de reciclagem. O consumo desenfreado, incentivado pela lógica do mercado, contribui significativamente para o volume anual de resíduos. Para o enfrentamento da problemática, é urgente que o Ministério do Meio Ambiente, em parceria com empresas de tecnologia, amplie campanhas educativas sobre os riscos. Além disso, a criação e o incentivo de pontos de coleta acessíveis em bairros e escolas, através de políticas públicas, são medidas essenciais para promover a reutilização responsável dos materiais e mitigar os danos sociais e ambientais. (Aprox. 180 palavras)",
            textoCompleto: "O avanço tecnológico, nas últimas décadas, trouxe inúmeros benefícios para a sociedade, como a agilização da comunicação e a modernização de processos produtivos. Contudo, o uso intensivo de aparelhos eletrônicos gerou um problema crescente: o descarte inadequado de lixo eletrônico. Essa questão impacta não apenas o meio ambiente, mas também a saúde humana, exigindo medidas urgentes de enfrentamento. Primeiramente, é importante destacar que os resíduos eletrônicos contêm metais pesados, como chumbo e mercúrio, altamente tóxicos quando descartados incorretamente. Ao se infiltrarem no solo e na água, essas substâncias comprometem ecossistemas e podem causar doenças graves em comunidades próximas. Nesse sentido, observa-se que a falta de conscientização da população e a carência de políticas públicas eficazes intensificam os riscos ambientais e sociais. Além disso, o consumo desenfreado de tecnologia, incentivado pela lógica do mercado, aumenta a quantidade de resíduos descartados anualmente. Segundo relatório da ONU, o Brasil está entre os países que mais produzem lixo eletrônico, mas ainda apresenta índices insuficientes de reciclagem. Esse cenário revela a urgência de ações conjuntas entre governo, empresas e sociedade para reduzir danos e promover a reutilização responsável dos materiais. Diante do exposto, é necessário que o Ministério do Meio Ambiente, em parceria com empresas de tecnologia, amplie campanhas educativas sobre os riscos do descarte inadequado. Ademais, a criação de pontos de coleta acessíveis em bairros e escolas deve ser incentivada por políticas públicas de modo a estimular a reciclagem."
        },
        {
            id: 6,
            tema: "O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE",
            tituloEnsaio: "O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE",
            tags: ["Nutrição", "Saúde Pública", "Alimentação", "Legislação"],
            resumo: "O aumento no consumo de alimentos ultraprocessados, ricos em açúcares, gorduras e sódio, é um subproduto da rotina acelerada e da expansão da indústria alimentícia, gerando graves consequências para a saúde pública. Estes produtos são diretamente relacionados ao aumento da obesidade e de doenças crônicas não transmissíveis, como diabetes e hipertensão. Além dos impactos físicos, o texto sugere que os ultraprocessados também podem estar ligados a problemas de saúde mental e ao declínio cognitivo. Para reverter esse quadro, é fundamental uma atuação conjunta entre a sociedade e o governo. O primeiro passo é a conscientização sobre os riscos, incentivando a escolha por alimentos in natura ou minimamente processados. Em nível governamental, propõe-se a implementação de políticas públicas efetivas, destacando-se a necessidade de rotulagem frontal clara e a taxação de produtos prejudiciais para desestimular o consumo excessivo. O texto reforça que qualquer proposta de intervenção deve respeitar os direitos humanos, garantindo o acesso à informação e a uma alimentação adequada para toda a população. (Aprox. 170 palavras)",
            textoCompleto: "O avanço da indústria alimentícia e a rotina acelerada têm impulsionado o consumo de alimentos ultraprocessados, ricos em açúcares, gorduras e sódio. Essa tendência, no entanto, traz consigo graves consequências para a saúde pública. Além de contribuírem para o aumento da obesidade e doenças crônicas como diabetes e hipertensão, esses produtos podem estar ligados a problemas de saúde mental e ao declínio cognitivo. Para reverter esse quadro, é extremamente fundamental que tanto a sociedade quanto o governo atuem em conjunto para assim contribuírem para um melhor avanço. A conscientização sobre os riscos é o primeiro passo, incentivando escolhas alimentares mais saudáveis, como alimentos in natura e minimamente processados. Além disso, a implementação de políticas públicas, como a rotulagem frontal clara e a taxação de produtos prejudiciais, pode desestimular o consumo excessivo. É preciso que a proposta de intervenção respeite os direitos humanos e garanta o acesso à informação e a uma alimentação adequada."
        },
        {
            id: 7,
            tema: "FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB",
            tituloEnsaio: "FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB",
            tags: ["Vício", "Digital", "Saúde Mental", "Regulamentação"],
            resumo: "A dependência em jogos de apostas online é um problema social e de saúde pública potencializado pelo ambiente digital e sua acessibilidade. O vício é alimentado pela facilidade de acesso, publicidade massiva, e o uso de algoritmos personalizados que criam um cenário propício à compulsão. A busca por gratificação instantânea, a fuga de problemas e a ilusão de controle sobre o acaso são fatores que impulsionam o engajamento. Os efeitos são devastadores, atingindo a saúde mental (ansiedade, depressão, estresse), a vida financeira (endividamento e dilapidação de patrimônios) e as relações sociais, culminando em isolamento. O combate exige uma abordagem multifacetada. O texto destaca a educação como pilar, através de campanhas de conscientização que desmistifiquem as apostas como solução financeira. A regulamentação do setor é crucial, incluindo limites de aposta, alertas de tempo de jogo e a proibição de publicidade para menores. Por fim, a criação de centros de apoio psicológico especializado é vital para garantir o tratamento dos dependentes. (Aprox. 180 palavras)",
            textoCompleto: "O ambiente digital, com sua vasta acessibilidade e apelo, potencializa o fenômeno da dependência em jogos de apostas online, um problema social e de saúde pública que exige atenção. A lógica por trás desse vício reside na combinação de fatores intrínsecos e extrínsecos. A facilidade de acesso, a publicidade massiva e o uso de algoritmos que personalizam a experiência de jogo criam um cenário propício ao desenvolvimento da compulsão. Além disso, a busca por uma gratificação instantânea, a fuga de problemas e a ilusão de controle sobre o acaso impulsionam o engajamento. Os efeitos dessa dependência são devastadores. Individualmente, a pessoa pode sofrer com o comprometimento de sua saúde mental, desenvolvendo quadros de ansiedade, depressão e estresse. A vida financeira é igualmente impactada, com a dilapidação de patrimônios e o endividamento, afetando não apenas o indivíduo, mas também suas famílias. As relações sociais e profissionais se deterioram, levando ao isolamento e à perda de oportunidades. Para combater essa problemática, é imprescindível uma abordagem multifacetada. A educação é o primeiro pilar, com campanhas de conscientização sobre os riscos e a desmistificação da ideia de que apostas podem ser uma solução financeira. A regulamentação do setor é crucial, com a implementação de limites de aposta, alertas sobre o tempo de jogo e a proibição da publicidade direcionada a menores. No âmbito da saúde, a criação de centros de apoio e tratamento psicológico especializado é vital, garantindo que os dependentes tenham acesso a ajuda profissional. Somente através de uma intervenção coordenada e ética, que respeite os direitos humanos e promova o bem-estar social, será possível mitigar os danos dessa crescente dependência."
        },
        {
            id: 8,
            tema: "A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS",
            tituloEnsaio: "A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS",
            tags: ["Voluntariado", "Social", "Cidadania", "Solidariedade"],
            resumo: "O trabalho voluntário é um pilar na construção de uma sociedade mais justa, combatendo diretamente as desigualdades sociais. Ele atua preenchendo as lacunas deixadas pelas políticas públicas, promovendo a dignidade humana através de ações coordenadas que levam educação, saúde e assistência a comunidades marginalizadas. Sua importância transcende a oferta de recursos materiais; ele atua na transformação de realidades. O envolvimento voluntário fomenta o senso de comunidade e solidariedade, quebrando preconceitos. O contato direto com as dificuldades alheias gera empatia e fortalece a consciência social, criando um ciclo virtuoso de ajuda mútua. Para ampliar sua eficácia, é essencial um esforço conjunto entre a sociedade e o Estado. Escolas e universidades devem incentivar a cultura do voluntariado, enquanto empresas podem criar programas corporativos. O governo, por sua vez, deve apoiar e reconhecer as ONGs e grupos de voluntários. Dessa forma, a colaboração voluntária pode se consolidar como um instrumento de cidadania ativa e um motor contínuo de transformação social. (Aprox. 180 palavras)",
            textoCompleto: "O trabalho voluntário é um pilar fundamental na construção de uma sociedade mais justa e equitativa, atuando diretamente no combate às diversas faces das desigualdades sociais. Em um cenário onde as políticas públicas nem sempre alcançam a totalidade das demandas, a atuação voluntária preenche lacunas e promove a dignidade humana. Por meio de ações coordenadas, os voluntários levam educação, saúde, alimentação e assistência a comunidades marginalizadas, impactando positivamente a realidade de milhares de pessoas. A relevância do voluntariado reside não apenas na oferta de recursos materiais, mas também na transformação de realidades. Ao se envolverem, os voluntários promovem o senso de comunidade e solidariedade, quebrando barreiras sociais e preconceitos. O contato direto com as dificuldades alheias gera empatia e, consequentemente, fortalece a consciência social. Essa dinâmica cria um ciclo virtuoso, em que a ajuda mútua e o comprometimento coletivo se tornam ferramentas poderosas para a mudança. Nesse contexto, para ampliar o alcance e a eficácia do trabalho voluntário, é imprescindível que haja um esforço conjunto da sociedade e do Estado. É preciso que as escolas e universidades incentivem a cultura do voluntariado, oferecendo programas e oportunidades para os estudantes. As empresas, por sua vez, podem criar programas de voluntariado corporativo, permitindo que seus funcionários dediquem parte de seu tempo a causas sociais. Além disso, o governo deve apoiar e reconhecer a atuação das organizações não governamentais (ONGs) e dos grupos de voluntários, garantindo que suas ações sejam respeitadas e protegidas. Desse modo, a colaboração voluntária poderá se consolidar como um instrumento de cidadania ativa e um motor de transformação social."
        },
        {
            id: 9,
            tema: "ADULTIZAÇÃO INFANTIL CONSEQUÊNCIAS DA PERDA IRREPARÁVEL DA INFÂNCIA",
            tituloEnsaio: "A ADULTIZAÇÃO INFANTIL",
            tags: ["Infância", "Educação", "Família", "Desenvolvimento"],
            resumo: "A adultização infantil é um fenômeno crescente que abrevia a infância, uma fase crítica para o desenvolvimento humano. Ocorre quando crianças assumem comportamentos, responsabilidades ou aparências adultas, impulsionadas pela mídia, pressão social ou, frequentemente, pelos próprios familiares. As consequências são profundas e, muitas vezes, irreparáveis. A exposição precoce a conteúdos adultos, como a erotização e a competitividade excessiva, compromete o desenvolvimento psicológico, impedindo a vivência de experiências lúdicas essenciais. Isso pode levar a problemas sérios na adolescência e vida adulta, como ansiedade, depressão ou dificuldades de socialização. A mídia e as redes sociais agravam o problema ao imporem padrões estéticos inatingíveis, onde o 'ser' é substituído pelo 'parecer', desvalorizando a criatividade e a espontaneidade. Para conter essa problemática, o texto sugere a atuação conjunta da escola e da família, promovendo uma educação que valorize o brincar e proteja a infância. Campanhas públicas de conscientização são necessárias para alertar sobre os perigos dessa antecipação precoce da maturidade. (Aprox. 190 palavras)",
            textoCompleto: "A infância, etapa crucial para o desenvolvimento físico, emocional e social do ser humano, tem sido abreviada por um fenômeno crescente: a adultização infantil. Essa problemática se manifesta quando crianças assumem comportamentos, responsabilidades ou aparências típicas de adultos, muitas das vezes impulsionadas pelos próprios familiares, mídia ou pressão social. As consequências dessa antecipação de maturidade são profundas e, muitas vezes, irreparáveis. Em primeiro lugar, a adultização compromete o desenvolvimento psicológico da criança. Ao serem expostas precocemente a conteúdos e comportamentos adultos, como a erotização, competitividade excessiva ou responsabilidades domésticas intensas, elas deixam de vivenciar experiências lúdicas e formativas, fundamentais para a construção da identidade e da autoestima. Tal distorção pode ocasionar problemas sérios, como ansiedade, depressão ou problemas de socialização na adolescência e na vida adulta. Além disso, a influência da mídia e das redes sociais agrava o problema. A busca por padrões estéticos inatingíveis e a exposição excessiva a influenciadores digitais impõem às crianças uma realidade distorcida onde o 'ser' é substituído pelo 'parecer'. Com isso, valores importantes como criatividade, empatia e espontaneidade são desvalorizados. Portanto, é imprescindível que medidas sejam adotadas para conter a adultização infantil. A escola, em parceria com a família, deve promover uma educação que valorize o brincar, a convivência e a proteção da infância. Campanhas públicas de conscientização também são necessárias para alertar sobre a adultização precoce, garantindo que crianças possam viver plenamente essa fase essencial da vida."
        },
        {
            id: 10,
            tema: "O Etarismo e o Paradoxo Intergeracional no Brasil",
            tituloEnsaio: "A OBSOLESCÊNCIA PROGRAMADA DAS PESSOAS",
            tags: ["Etarismo", "Cultura", "Filosofia", "Sociedade"],
            resumo: "A sociedade brasileira vive o paradoxo de ter a expectativa de vida em crescimento (devido aos avanços na ciência e saúde) enquanto o preconceito contra a idade (etarismo) se intensifica. Essa discriminação, embora atinja principalmente os idosos, também pode recair sobre os jovens, gerando um cenário de exclusão, desvalorização da experiência e dificultando a convivência intergeracional harmônica. O problema tem raízes culturais, sendo alimentado pela cultura do hiperconsumismo e pela supervalorização da juventude. Citando o pensamento do filósofo Gilles Lipovetsky, o texto argumenta que na sociedade pós-moderna, pautada pela lógica do 'novo', a obsolescência programada se estende dos produtos para as pessoas. Essa perspectiva sugere que a experiência acumulada e o envelhecimento são vistos como obsoletos em um sistema que prioriza o dinamismo e a aparência juvenil. A análise conclui que é imperativo buscar intervenções que ataquem as raízes do problema e garantam respeito e dignidade a todas as faixas etárias. (Aprox. 170 palavras)",
            textoCompleto: "A contemporaneidade brasileira é marcada por um paradoxo social: ao mesmo tempo em que a expectativa de vida cresce em virtude dos avanços da ciência e da saúde, o preconceito contra a idade se intensifica, manifestando-se de forma sutil ou explícita nas relações sociais. Essa discriminação, que atinge principalmente os indivíduos mais velhos, mas também pode recair sobre os mais jovens, gera um cenário de exclusão e desvalorização da experiência, dificultando o convívio intergeracional harmônico. Dessa forma, é imperativo analisar as raízes desse problema e propor intervenções que garantam o respeito e a dignidade a todas as faixas etárias. Em primeira análise, a cultura do hiperconsumismo e a supervalorização da juventude contribuem significativamente para a perpetuação do etarismo. Conforme a linha de pensamento do filósofo Gilles Lipovetsky, a sociedade pós-moderna é pautada pela lógica do 'novo', onde a obsolescência programada não se restringe a produtos, mas se estende às pessoas."
        },
        {
            id: 11,
            tema: "A Falta de Educação Financeira e o Endividamento Jovem",
            tituloEnsaio: "A TRANSIÇÃO ENDIVIDADA PARA A VIDA ADULTA",
            tags: ["Finanças", "Juventude", "Educação", "Economia"],
            resumo: "A falta de autonomia financeira é um obstáculo significativo para a juventude brasileira em sua transição para a vida adulta. Este problema se manifesta no dado alarmante de que cerca de 19% dos jovens entre 18 e 24 anos estão endividados (SPC Brasil), refletindo a carência de conhecimento essencial para a gestão das finanças pessoais. A origem da questão reside em uma lacuna educacional histórica, onde as escolas priorizaram matérias tradicionais em detrimento da formação financeira básica. Consequentemente, muitos jovens ingressam no mercado de trabalho sem saber lidar com conceitos fundamentais como orçamento, juros e investimentos. Essa falta de preparo os torna vulneráveis ao crédito facilitado e às armadilhas do consumo. O resultado é um ciclo de endividamento que limita escolhas futuras e compromete a qualidade de vida. O texto sublinha que a educação financeira é crucial para que a juventude possa construir patrimônio e ter maior liberdade em suas decisões, rompendo com o ciclo de insegurança. (Aprox. 180 palavras)",
            textoCompleto: "A transição para a vida adulta é um período repleto de desafios, e a falta de autonomia financeira emerge como um obstáculo significativo para a juventude brasileira. Segundo o Serviço de Proteção ao Crédito (SPC Brasil), cerca de 19% dos brasileiros entre 18 e 24 anos estão endividados. Esse dado alarmante reflete a carência de conhecimentos essenciais para a gestão das finanças pessoais, o que compromete o futuro e a qualidade de vida dessa parcela da população. A origem desse problema reside na lacuna educacional. Historicamente, as escolas brasileiras priorizaram o ensino de matérias tradicionais, negligenciando a formação financeira básica. Como resultado, muitos jovens ingressam no mercado de trabalho sem saber lidar com conceitos como orçamento, juros e investimentos, tornando-se presas fáceis do crédito facilitado e de armadilhas do consumo. Essa falta de preparo os impede de construir um patrimônio e os expõe a um ciclo de endividamento, limitando suas escolhas e, consequentemente, sua liberdade."
        },
        {
            id: 12,
            tema: "Desvalorização e Marginalização da Cultura Popular Brasileira",
            tituloEnsaio: "CULTURA POPULAR: PATRIMÔNIO À MARGEM",
            tags: ["Cultura", "Patrimônio", "Economia Criativa", "Desigualdade"],
            resumo: "A cultura popular brasileira, em sua diversidade de expressões, festas e músicas, é um pilar vital para a construção da identidade nacional e para o senso de pertencimento. No entanto, sua plena valorização é dificultada por desafios sistêmicos que a relegam à margem das políticas públicas e do reconhecimento social. O principal problema é a marginalização socioeconômica. Frequentemente associada a comunidades de menor poder aquisitivo ou a grupos tradicionais, essa cultura sofre com a invisibilidade e a crônica falta de investimentos. A precariedade de infraestrutura e a ausência de apoio financeiro impedem a expansão e a manutenção dessas práticas, transformando a rica diversidade em um elemento de difícil acesso. O texto menciona o conceito de 'economia criativa' (via Eduardo Guimarães), sugerindo que a desvalorização esvazia o potencial econômico e social desse setor. Outro ponto crítico é a elitização, que restringe o acesso e apropria-se indevidamente de manifestações populares. (Aprox. 180 palavras)",
            textoCompleto: "A cultura popular brasileira, com sua diversidade de expressões, festas e músicas, é um pilar fundamental na construção da identidade nacional e na promoção de um senso de pertencimento. No entanto, sua valorização enfrenta desafios sistêmicos que a mantêm à margem das políticas públicas e do reconhecimento social merecido. É crucial analisar as causas dessa desvalorização e buscar caminhos para a plena efetivação desse patrimônio cultural. O principal desafio reside na marginalização socioeconômica das manifestações culturais populares. Muitas vezes associada a grupos de menor poder aquisitivo ou a comunidades tradicionais, essa cultura sofre com a invisibilidade e a falta de investimentos. A ausência de apoio financeiro e a precariedade da infraestrutura inviabilizam a manutenção e a expansão dessas práticas, transformando a rica diversidade cultural em um elemento de difícil acesso e esvaziando a potencialidade da 'economia criativa', como aponta Eduardo Guimarães. Outro ponto é a elitização."
        },
        {
            id: 13,
            tema: "O Desafio do Saneamento Básico e a Má Gestão Pública no Brasil",
            tituloEnsaio: "SANEAMENTO BÁSICO: UMA CRÔNICA DE MÁ GESTÃO",
            tags: ["Saneamento", "Saúde Pública", "Gestão", "Infraestrutura"],
            resumo: "A ausência de saneamento básico é um problema histórico no Brasil, cujas consequências têm sido catastróficas ao longo dos séculos (citando o exemplo da Peste Bubônica). Atualmente, o país enfrenta grandes dificuldades em fornecer um saneamento decente, com números inferiores a 50% de cobertura. O texto critica o fato de o Brasil, apesar de seus vastos recursos estruturais e econômicos, apresentar índices piores que nações como a Índia, que lida com a superlotação. Diante disso, conclui-se que a problemática brasileira não se limita à falta de recursos, mas sim à má gestão pública e à ausência de políticas contínuas e eficazes. Essa deficiência sistêmica afeta diretamente a saúde pública, a qualidade de vida e o desenvolvimento social e econômico. O ensaio sugere que a solução passa por uma melhor administração dos recursos existentes e pelo estabelecimento de um planejamento de longo prazo que priorize a expansão universal do serviço. (Aprox. 150 palavras)",
            textoCompleto: "A ausência de saneamento básico acompanha a sociedade desde seu início, sendo em muitas das vezes o principal motivo de crises globais, como exemplo, a peste bubônica conhecida popularmente como peste negra que ocorreu devido ao saneamento precário apresentado pela sociedade europeia no século XIV. Atualmente, diversos países enfrentam dificuldades em aplicar o saneamento básico decente para sua população, tais deles o Brasil, que apesar de possuir uma vasta gama de recursos estruturais e econômicos, apresenta uma grande dificuldade na hora de levar um saneamento básico à sua população, tendo números inferiores a 50%, que comparados a países que enfrentam problemas demográficos, como a Índia, que mesmo estando em estado de superlotação de pessoas, conseguem levar o saneamento básico para mais de 50% de sua população. Diante desse cenário, percebe-se que o problema brasileiro não se limita à falta de recursos, mas sim à má gestão pública e à ausência de políticas contínuas."
        },
        {
            id: 14,
            tema: "O Esporte como Instrumento de Inclusão e Transformação Social",
            tituloEnsaio: "ESPORTE: A PONTE PARA A CIDADANIA",
            tags: ["Esporte", "Inclusão", "Educação", "Comunidade"],
            resumo: "O esporte é apresentado como um poderoso instrumento de inclusão e transformação social, indo além da mera atividade física. Em um país profundamente desigual como o Brasil, o esporte atua como uma ponte, aproximando indivíduos e ampliando horizontes, especialmente em contextos de vulnerabilidade e falta de oportunidades. Projetos esportivos bem estruturados oferecem um ambiente seguro para os jovens, afastando-os de situações de risco e fomentando o desenvolvimento de competências socioemocionais cruciais, como disciplina, respeito e trabalho em equipe. Isso é particularmente relevante em áreas periféricas, onde a presença estatal é muitas vezes ausente. O texto cita a iniciativa federal 'Segundo Tempo' como um exemplo de sucesso, demonstrando que a combinação de atividades esportivas com acompanhamento pedagógico é eficaz na redução de índices de evasão escolar e no fortalecimento de vínculos comunitários. O esporte, portanto, é uma ferramenta comprovada para construir valores essenciais e promover a ascensão social. (Aprox. 180 palavras)",
            textoCompleto: "O esporte, ao longo da história, tem se mostrado muito mais do que uma simples atividade física: ele atua como um importante instrumento de inclusão e transformação social. Em um país profundamente desigual como o Brasil, onde milhões de pessoas enfrentam vulnerabilidade e falta de acesso a oportunidades, o esporte se torna uma ponte capaz de aproximar indivíduos, ampliar horizontes e construir valores essenciais para a vida em sociedade. Primeiramente, projetos esportivos bem orientados oferecem aos jovens um ambiente seguro, afastando-os de situações de risco e possibilitando o desenvolvimento de competências socioemocionais, como disciplina, respeito e trabalho em equipe. Isso é especialmente relevante em regiões periféricas, onde o Estado muitas vezes se mostra ausente. A iniciativa 'Segundo Tempo', por exemplo, já demonstrou que atividades esportivas associadas ao acompanhamento pedagógico reduzem índices de evasão escolar e fortalecem vínculos comunitários. Além disso, o esporte contribui para a saúde e o bem-estar coletivo."
        }
    ];

    // --------------------------------------------------------------------------------
    // 1.2. VARIÁVEIS DE ESTADO E PERSISTÊNCIA (localStorage)
    // --------------------------------------------------------------------------------
    let favorites = new Set(JSON.parse(localStorage.getItem('redacaoFavorites') || '[]'));

    const getRedacoes = () => REDACOES;

    const getRedacaoById = (id) => REDACOES.find(r => r.id === parseInt(id));

    const getFavoriteIds = () => Array.from(favorites);

    const getFavoriteRedacoes = () => REDACOES.filter(r => favorites.has(r.id));

    const isFavorite = (id) => favorites.has(parseInt(id));

    const toggleFavorite = (id) => {
        const numId = parseInt(id);
        if (favorites.has(numId)) {
            favorites.delete(numId);
        } else {
            favorites.add(numId);
        }
        localStorage.setItem('redacaoFavorites', JSON.stringify(Array.from(favorites)));
        UIModule.updateFavoriteButtons();
        RenderModule.renderFavoriteList();
        return favorites.has(numId);
    };
    
    // Calcula o total de palavras para o Dashboard
    const calculateTotalWords = () => {
        return REDACOES.reduce((total, redacao) => {
            // Conta palavras no resumo e no texto completo (aproximado)
            const count = redacao.resumo.split(/\s+/).length + redacao.textoCompleto.split(/\s+/).length;
            return total + count;
        }, 0);
    };

    // --------------------------------------------------------------------------------
    // 1.3. UTILITÁRIO DE DOWNLOAD (Geração de Blob Client-Side)
    // --------------------------------------------------------------------------------
    const downloadAllTexts = () => {
        const textContent = REDACOES.map(r => 
            `========================================================================\n` +
            `TEMA ${r.id}: ${r.tema}\n` +
            `TÍTULO: ${r.tituloEnsaio}\n` +
            `========================================================================\n\n` +
            `${r.textoCompleto}\n\n`
        ).join('\n\n');

        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'textos_completos_projeto_2025.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return {
        getRedacoes,
        getRedacaoById,
        isFavorite,
        toggleFavorite,
        calculateTotalWords,
        downloadAllTexts,
        getFavoriteRedacoes,
        getFavoriteIds
    };
})();

// Módulo 2: EffectsModule (Canvas, Splash Sequence e Easter Egg)
const EffectsModule = (() => {
    // --------------------------------------------------------------------------------
    // 2.1. ANIMAÇÃO DE SPLASH SCREEN (Revelação Cinematográfica)
    // --------------------------------------------------------------------------------
    const SPLASH_DURATION = 3500; // 3.5 segundos de animação
    let audioContext = null;
    let splashAudio = null;

    const initAudio = () => {
        try {
            // Placeholder para áudio cinematográfico sutil
            // Na prática, áudio deve ser um arquivo .mp3 ou .wav
            splashAudio = new Audio('data:audio/mp3;base64,PLACEHOLDER_FOR_AUDIO_DATA'); 
            splashAudio.loop = false;
            splashAudio.muted = true; // Padrão: mutado
            return true;
        } catch (e) {
            console.warn("Áudio não suportado ou erro de inicialização:", e);
            return false;
        }
    };

    const toggleAudio = (button) => {
        if (!splashAudio) return;
        splashAudio.muted = !splashAudio.muted;
        button.innerHTML = splashAudio.muted ? 
            '<span class="icon" aria-hidden="true">🔊</span> Ativar Áudio' : 
            '<span class="icon" aria-hidden="true">🔇</span> Desativar Áudio';
    };

    const startSplash = (callback) => {
        const splash = document.getElementById('splash-screen');
        const main = document.getElementById('main-interface');
        const loader = splash.querySelector('.splash-loader');

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            // Ignora animação
            splash.style.display = 'none';
            main.style.opacity = '1';
            main.style.transform = 'translateY(0)';
            main.setAttribute('aria-hidden', 'false');
            if (callback) callback();
            return;
        }
        
        // Simulação de carregamento (Barra de progresso)
        let startTime = Date.now();
        let frame;
        const animateLoader = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(1, elapsedTime / SPLASH_DURATION);
            
            loader.style.width = `${progress * 100}%`;
            loader.setAttribute('aria-valuenow', Math.round(progress * 100));

            if (progress < 1) {
                frame = requestAnimationFrame(animateLoader);
            } else {
                // Fim da animação, inicia o Reveal
                cancelAnimationFrame(frame);
                revealContent(splash, main, callback);
            }
        };

        if (splashAudio && !splashAudio.muted) {
            splashAudio.play().catch(e => console.error("Erro ao tocar áudio (Bloqueio do Browser)", e));
        }

        animateLoader();
    };

    const revealContent = (splash, main, callback) => {
        // Efeito de reveal (e.g., 3D flip + fade out)
        splash.style.transform = 'translateY(-100vh)';
        splash.style.opacity = '0';
        
        main.style.opacity = '1';
        main.style.transform = 'translateY(0)';
        main.setAttribute('aria-hidden', 'false');

        // Garante que a splash não atrapalhe após o fade out
        setTimeout(() => {
            splash.style.display = 'none';
            if (callback) callback();
        }, 1200); // 1.2s de transição
    };

    // --------------------------------------------------------------------------------
    // 2.2. EFEITO CANVAS (Partículas de Fundo)
    // --------------------------------------------------------------------------------
    let canvas, ctx, particles = [];
    let animationFrameId = null;
    const PARTICLE_COUNT = 50;

    const initParticles = () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 600) {
            return; // Não inicializa para motion reduzido ou mobile
        }

        canvas = document.getElementById('particles-canvas');
        if (!canvas) return;

        ctx = canvas.getContext('2d');
        resizeCanvas();

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(createParticle());
        }
        
        window.addEventListener('resize', resizeCanvas);
        animateParticles();
        document.addEventListener('mousemove', handleMouseMove);
    };

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    const createParticle = () => {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.5,
            color: 'rgba(255, 255, 255, ' + (Math.random() * 0.5 + 0.1) + ')',
            velocity: {
                x: (Math.random() - 0.5) * 0.2,
                y: (Math.random() - 0.5) * 0.2
            }
        };
    };

    const drawParticle = (p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.fill();
    };

    const updateParticle = (p) => {
        p.x += p.velocity.x;
        p.y += p.velocity.y;

        // Limites (wrap around)
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
    };

    const animateParticles = () => {
        animationFrameId = requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            updateParticle(p);
            drawParticle(p);
        });
    };

    let mouse = { x: 0, y: 0 };
    const handleMouseMove = (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        
        // Interatividade: Partículas reagem ao cursor (movimento sutil)
        particles.forEach(p => {
            const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
            if (dist < 100) {
                p.velocity.x += (p.x - mouse.x) * 0.0001;
                p.velocity.y += (p.y - mouse.y) * 0.0001;
            } else {
                // Retorna ao movimento normal
                p.velocity.x *= 0.99; 
                p.velocity.y *= 0.99;
            }
        });
    };

    // --------------------------------------------------------------------------------
    // 2.3. EASTER EGG (Sequência de Teclas)
    // --------------------------------------------------------------------------------
    const KONAMI_CODE = "CRISTIANO"; // Sequência de teclas
    let keySequence = '';
    let eggActive = false;
    let confettis = [];

    const setupEasterEgg = () => {
        document.addEventListener('keydown', (e) => {
            if (eggActive) return;
            
            const key = e.key.toUpperCase();
            if (KONAMI_CODE.includes(key) && KONAMI_CODE.indexOf(keySequence + key) === 0) {
                keySequence += key;
            } else {
                keySequence = '';
            }

            if (keySequence === KONAMI_CODE) {
                activateEasterEgg();
                keySequence = ''; // Reset
            }
        });
    };

    const createConfetti = (x, y) => ({
        x: x,
        y: y,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
        radius: Math.random() * 5 + 2,
        velocity: {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 1) * 5
        },
        gravity: 0.1,
        drag: 0.98
    });

    const activateEasterEgg = () => {
        eggActive = true;
        const header = document.getElementById('main-header');
        const rect = header.getBoundingClientRect();
        
        // Mensagem e Confetti!
        alert("🎉 Cristiano - Missão Concluída! Código Secreto Ativado! 🎉");
        
        const confettiCanvas = document.createElement('canvas');
        confettiCanvas.id = 'confetti-canvas';
        confettiCanvas.style.position = 'fixed';
        confettiCanvas.style.top = '0';
        confettiCanvas.style.left = '0';
        confettiCanvas.style.width = '100vw';
        confettiCanvas.style.height = '100vh';
        confettiCanvas.style.zIndex = '3000';
        document.body.appendChild(confettiCanvas);
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
        const ctxConfetti = confettiCanvas.getContext('2d');

        for (let i = 0; i < 200; i++) {
            confettis.push(createConfetti(rect.left + rect.width / 2, rect.bottom));
        }

        const animateConfetti = () => {
            ctxConfetti.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            
            confettis = confettis.filter(c => c.y < confettiCanvas.height);

            confettis.forEach(c => {
                c.velocity.y += c.gravity;
                c.velocity.x *= c.drag;
                c.velocity.y *= c.drag;
                c.x += c.velocity.x;
                c.y += c.velocity.y;
                
                ctxConfetti.beginPath();
                ctxConfetti.arc(c.x, c.y, c.radius, 0, Math.PI * 2, false);
                ctxConfetti.fillStyle = c.color;
                ctxConfetti.fill();
            });

            if (confettis.length > 0) {
                requestAnimationFrame(animateConfetti);
            } else {
                confettiCanvas.remove();
                eggActive = false; // Permite reativar
            }
        };

        animateConfetti();
    };

    return {
        initAudio,
        toggleAudio,
        startSplash,
        initParticles,
        setupEasterEgg
    };
})();

// Módulo 3: RenderModule (Renderização do Grid de Cards, Galeria e Modais)
const RenderModule = (() => {
    const gridContainer = document.getElementById('redaction-grid');
    const modalTitle = document.getElementById('modal-title');
    const modalThemeName = document.getElementById('modal-theme-name');
    const modalBodyText = document.getElementById('modal-body-text');
    const readModal = document.getElementById('read-modal');
    const galleryGrid = document.getElementById('gallery-grid');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxImageContainer = document.getElementById('lightbox-image-container');
    const lightboxModal = document.getElementById('lightbox-modal');
    
    // --------------------------------------------------------------------------------
    // 3.1. RENDERIZAÇÃO DO CARD GRID PRINCIPAL
    // --------------------------------------------------------------------------------
    const renderRedactionCards = (redacoesToRender = DataModule.getRedacoes()) => {
        if (!gridContainer) return;
        
        gridContainer.innerHTML = ''; // Limpa o grid

        if (redacoesToRender.length === 0) {
            gridContainer.innerHTML = '<div class="empty-state">Nenhuma redação encontrada para os critérios de busca.</div>';
            return;
        }

        const cardsHtml = redacoesToRender.map(r => {
            const isFav = DataModule.isFavorite(r.id) ? 'is-favorite' : '';
            const tagsHtml = r.tags.map(tag => `<span class="tag" aria-label="Assunto: ${tag}">#${tag}</span>`).join('');
            
            return `
                <article class="redaction-card" data-id="${r.id}" role="article" tabindex="0">
                    <div class="card-header">
                        <span class="card-number">${String(r.id).padStart(2, '0')}</span>
                        <h3 class="card-title">${r.tema}</h3>
                    </div>
                    <div class="card-summary">
                        <p>${r.resumo}</p>
                    </div>
                    <div class="card-footer">
                        <div class="card-tags" aria-label="Tags da Redação">${tagsHtml}</div>
                        <div class="card-actions">
                            <button class="action-btn read-full-btn cinematic-button" data-id="${r.id}" aria-label="Ler o texto completo da redação ${r.id}">
                                Ler Completo
                            </button>
                            <button class="action-btn favorite-btn cinematic-button ${isFav}" data-id="${r.id}" aria-label="${isFav ? 'Desfavoritar' : 'Favoritar'} esta redação">
                                <span class="icon" aria-hidden="true">⭐</span>
                            </button>
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        gridContainer.innerHTML = cardsHtml;
        UIModule.attachCardListeners();
        // Animação de entrada dos cards (IntersectionObserver)
        UIModule.initCardIntersectionObserver(); 
    };

    // --------------------------------------------------------------------------------
    // 3.2. RENDERIZAÇÃO DA GALERIA (SVG Generation)
    // --------------------------------------------------------------------------------
    const createThemedSVG = (id, tema) => {
        // Gera um SVG simples, mas visualmente distinto, para cada tema.
        // Utiliza a cor primária e acentua com o ID.
        const color = `hsl(${id * 30 + 10}, 60%, 45%)`;
        const baseColor = `var(--color-primary-dark)`;
        const accentColor = `var(--color-accent)`;
        const size = 100;
        
        let svgContent = `<rect width="${size}" height="${size}" fill="${baseColor}"/>`;

        switch (id) {
            case 1: svgContent += `<circle cx="30" cy="70" r="20" fill="${color}"/><circle cx="70" cy="30" r="15" fill="${accentColor}"/>`; break; // Estética (Filtros/Beleza)
            case 2: svgContent += `<rect x="10" y="50" width="80" height="20" rx="5" fill="${color}"/><path d="M50 30 L50 80" stroke="${accentColor}" stroke-width="5"/>`; break; // Acessibilidade (Rampa e Pessoa)
            case 3: svgContent += `<path d="M20 80 Q50 20 80 80 T140 80" stroke="${color}" fill="none" stroke-width="4" filter="url(#glow)"/>`; break; // Qualidade de Vida (Gráfico/Curva)
            case 4: svgContent += `<polygon points="50,10 80,90 20,90" fill="${color}"/><circle cx="50" cy="50" r="10" fill="${accentColor}"/>`; break; // Clima (Montanha/Sol)
            case 5: svgContent += `<rect x="10" y="20" width="80" height="60" fill="${color}"/><rect x="20" y="30" width="10" height="10" fill="${accentColor}"/>`; break; // Lixo Eletrônico (Chip/Caixa)
            case 6: svgContent += `<rect x="10" y="10" width="80" height="20" fill="${color}"/><rect x="30" y="40" width="40" height="40" fill="${accentColor}" rx="5"/>`; break; // Ultraprocessados (Embalagem)
            case 7: svgContent += `<path d="M50 50 L80 20 L20 20 Z" fill="${color}"/><text x="50" y="60" text-anchor="middle" font-size="20" fill="${accentColor}">R$</text>`; break; // Apostas (Vício/Dinheiro)
            case 8: svgContent += `<path d="M50 80 L50 40 A10 10 0 0 1 60 30 L40 30 A10 10 0 0 1 50 40 Z" fill="${color}"/><circle cx="50" cy="20" r="10" fill="${accentColor}"/>`; break; // Voluntariado (Pessoa Ajudando)
            case 9: svgContent += `<rect x="10" y="10" width="80" height="80" rx="5" fill="${color}"/><rect x="20" y="20" width="60" height="60" rx="5" fill="${baseColor}"/><text x="50" y="55" text-anchor="middle" font-size="25" fill="${accentColor}">🧸</text>`; break; // Adultização (Brinquedo 'preso')
            case 10: svgContent += `<path d="M30 20 L70 80" stroke="${color}" stroke-width="5" stroke-linecap="round"/><path d="M70 20 L30 80" stroke="${accentColor}" stroke-width="5" stroke-linecap="round"/>`; break; // Etarismo (Cruzamento de Gerações)
            case 11: svgContent += `<rect x="10" y="10" width="80" height="80" fill="${color}"/><text x="50" y="55" text-anchor="middle" font-size="20" fill="${accentColor}">%</text>`; break; // Finanças (Dívida)
            case 12: svgContent += `<path d="M50 10 L10 90 L90 90 Z" fill="${color}"/><circle cx="50" cy="65" r="15" fill="${accentColor}"/>`; break; // Cultura Popular (Máscara/Folclore)
            case 13: svgContent += `<rect x="10" y="60" width="80" height="30" fill="${color}"/><rect x="10" y="30" width="80" height="30" fill="${accentColor}"/>`; break; // Saneamento (Camadas/Água)
            case 14: svgContent += `<circle cx="50" cy="50" r="40" stroke="${color}" stroke-width="5" fill="none"/><path d="M30 60 L70 60" stroke="${accentColor}" stroke-width="5" stroke-linecap="round"/>`; break; // Esporte (Bola/Campo)
            default: svgContent += `<rect width="${size}" height="${size}" fill="gray"/>`;
        }

        return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração conceitual para ${tema}">
            <defs>
                <filter id="glow">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            ${svgContent}
        </svg>`;
    };
    
    const renderGallery = () => {
        if (!galleryGrid) return;
        
        galleryGrid.innerHTML = '';
        const redacoes = DataModule.getRedacoes();
        
        const galleryItems = redacoes.map(r => {
            const svgMarkup = createThemedSVG(r.id, r.tema);
            return `
                <figure class="gallery-item" data-item-id="${r.id}" tabindex="0" aria-label="Ilustração do tema ${r.id}: ${r.tema}">
                    <div class="gallery-svg-container" data-id="${r.id}">${svgMarkup}</div>
                    <figcaption class="gallery-caption">TEMA ${String(r.id).padStart(2, '0')}: ${r.tema}</figcaption>
                    <button class="lightbox-btn cinematic-button" data-id="${r.id}" aria-label="Expandir ilustração em modo Lightbox">Visualizar</button>
                </figure>
            `;
        }).join('');
        
        galleryGrid.innerHTML = galleryItems;
        UIModule.attachGalleryListeners();
    };

    // --------------------------------------------------------------------------------
    // 3.3. RENDERIZAÇÃO DE MODAL
    // --------------------------------------------------------------------------------
    const openReadModal = (id) => {
        const redacao = DataModule.getRedacaoById(id);
        if (!redacao) return;

        modalTitle.textContent = redacao.tema;
        modalThemeName.textContent = redacao.tituloEnsaio;

        // Formata o texto completo em parágrafos para melhor leitura
        const formattedText = redacao.textoCompleto
            .split(/\.\s+(?=[A-Z])/) // Divide por ponto seguido de espaço e letra maiúscula (não perfeito, mas bom)
            .map(p => p.trim())
            .filter(p => p.length > 0)
            .map(p => `<p>${p}${p.endsWith('.') ? '' : '.'}</p>`) // Garante ponto final
            .join('');

        modalBodyText.innerHTML = formattedText;
        modalBodyText.scrollTop = 0; // Inicia no topo
        
        readModal.setAttribute('aria-hidden', 'false');
        readModal.focus(); // Coloca o foco no modal
        document.body.style.overflow = 'hidden'; // Evita scroll de fundo
    };
    
    const openLightboxModal = (id) => {
        const redacao = DataModule.getRedacaoById(id);
        if (!redacao) return;
        
        lightboxTitle.textContent = redacao.tema;
        
        // Re-renderiza o SVG em tamanho maior
        lightboxImageContainer.innerHTML = createThemedSVG(redacao.id, redacao.tema).replace(/width="100" height="100"/g, 'width="900" height="500"');
        
        lightboxModal.setAttribute('aria-hidden', 'false');
        lightboxModal.focus();
        document.body.style.overflow = 'hidden';
    };

    const closeModals = () => {
        readModal.setAttribute('aria-hidden', 'true');
        lightboxModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    // --------------------------------------------------------------------------------
    // 3.4. RENDERIZAÇÃO DO DASHBOARD
    // --------------------------------------------------------------------------------
    const renderDashboard = () => {
        document.getElementById('stat-total-redactions').textContent = DataModule.getRedacoes().length;
        document.getElementById('stat-favorites-count').textContent = DataModule.getFavoriteIds().length;
        document.getElementById('stat-words-count').textContent = `${(DataModule.calculateTotalWords() / 1000).toFixed(1)}K+`;
    };
    
    const renderFavoriteList = () => {
        const listElement = document.getElementById('favorite-list-home');
        if (!listElement) return;

        const favorites = DataModule.getFavoriteRedacoes();
        
        if (favorites.length === 0) {
            listElement.innerHTML = '<li class="empty-state">Nenhuma redação favoritada ainda. Use o ⭐ nos cards.</li>';
        } else {
            listElement.innerHTML = favorites.map(r => `
                <li role="menuitem">
                    <a href="#temas" class="nav-item" data-section="temas" data-redacao-id="${r.id}" title="Ir para o card ${r.tema}">
                        TEMA ${String(r.id).padStart(2, '0')}: ${r.tema}
                    </a>
                </li>
            `).join('');
        }
    };

    return {
        renderRedactionCards,
        openReadModal,
        openLightboxModal,
        closeModals,
        renderGallery,
        renderDashboard,
        renderFavoriteList
    };
})();

// Módulo 4: UIModule (Event Listeners, Router Hash e Interações do Usuário)
const UIModule = (() => {
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-nav');
    const scrollProgress = document.getElementById('scroll-progress');
    const cardSearch = document.getElementById('card-search');
    const allSections = document.querySelectorAll('.app-section');
    const navLinks = document.querySelectorAll('.nav-item');
    let cardObserver;

    // --------------------------------------------------------------------------------
    // 4.1. FUNÇÕES DE ROTEAMENTO (HASH ROUTER)
    // --------------------------------------------------------------------------------
    const navigateToHash = (hash, cardId = null) => {
        // Remove a âncora do hash para obter a rota
        const route = hash.replace('#', '') || 'home';
        
        // 1. Atualiza Visibilidade das Seções
        allSections.forEach(section => {
            section.classList.remove('active');
            section.setAttribute('aria-hidden', 'true');
            if (section.getAttribute('data-route') === route) {
                section.classList.add('active');
                section.setAttribute('aria-hidden', 'false');
            }
        });
        
        // 2. Atualiza Estado dos Links de Navegação
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('data-section') === route) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
        
        // 3. Ações específicas após a navegação
        if (route === 'temas' && cardId) {
            // Se veio do link de favorito (dashboard), scrolla para o card
            setTimeout(() => {
                const targetCard = document.querySelector(`.redaction-card[data-id="${cardId}"]`);
                if (targetCard) {
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    targetCard.focus();
                }
            }, 100);
        }
    };

    const handleHashChange = () => {
        navigateToHash(window.location.hash);
        // Fecha o menu móvel ao navegar
        menuToggle.classList.remove('is-active');
        navMenu.classList.remove('is-active');
    };

    // --------------------------------------------------------------------------------
    // 4.2. EVENTOS E INTERAÇÕES DO HEADER/LAYOUT
    // --------------------------------------------------------------------------------
    const handleScroll = () => {
        // Efeito de Header que muda ao rolar
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll Progress Indicator
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
    };

    const toggleMenu = () => {
        const isActive = menuToggle.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
        menuToggle.setAttribute('aria-expanded', isActive);
    };

    // --------------------------------------------------------------------------------
    // 4.3. EVENTOS DOS CARDS (Favoritar e Ler Completo)
    // --------------------------------------------------------------------------------
    const attachCardListeners = () => {
        document.querySelectorAll('.redaction-card').forEach(card => {
            const cardId = card.getAttribute('data-id');

            // 3D Tilt Effect
            const maxTilt = 5;
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const midX = rect.width / 2;
                const midY = rect.height / 2;
                
                const rotationX = (-(y - midY) / midY) * maxTilt;
                const rotationY = ((x - midX) / midX) * maxTilt;
                
                card.style.transform = `perspective(var(--tilt-perspective)) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(var(--tilt-perspective)) rotateX(0) rotateY(0) scale(1)';
            });
            
            // Botão Ler Completo
            const readBtn = card.querySelector('.read-full-btn');
            if (readBtn) {
                readBtn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Evita que o clique no card dispare o evento
                    RenderModule.openReadModal(cardId);
                });
            }

            // Botão Favoritar
            const favBtn = card.querySelector('.favorite-btn');
            if (favBtn) {
                favBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isFav = DataModule.toggleFavorite(cardId);
                    favBtn.classList.toggle('is-favorite', isFav);
                    favBtn.setAttribute('aria-label', isFav ? 'Desfavoritar esta redação' : 'Favoritar esta redação');
                    RenderModule.renderDashboard();
                });
            }
        });
    };
    
    // --------------------------------------------------------------------------------
    // 4.4. SEARCH / FILTER (FuzzySort Simples)
    // --------------------------------------------------------------------------------
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase().trim();
        const allRedacoes = DataModule.getRedacoes();
        
        if (query.length < 3 && query.length > 0) {
            // Melhora a performance em queries curtas, aguardando mais caracteres
            return;
        }

        if (query === '') {
            RenderModule.renderRedactionCards(allRedacoes); // Exibe tudo
            return;
        }

        // Implementação de filtro simples (case-insensitive)
        const filteredRedacoes = allRedacoes.filter(r => {
            const searchTargets = [
                r.tema.toLowerCase(),
                r.tituloEnsaio.toLowerCase(),
                r.resumo.toLowerCase(),
                ...r.tags.map(t => t.toLowerCase())
            ].join(' ');
            
            // Verifica se todos os termos da busca estão presentes (Busca AND)
            return query.split(/\s+/).every(term => searchTargets.includes(term));
        });

        RenderModule.renderRedactionCards(filteredRedacoes);
    };

    // --------------------------------------------------------------------------------
    // 4.5. GALLERY / LIGHTBOX LISTENERS
    // --------------------------------------------------------------------------------
    const attachGalleryListeners = () => {
        document.querySelectorAll('.lightbox-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                RenderModule.openLightboxModal(id);
            });
        });
    };
    
    // --------------------------------------------------------------------------------
    // 4.6. INTERSECTION OBSERVER (Animação de Cards)
    // --------------------------------------------------------------------------------
    const initCardIntersectionObserver = () => {
        if (cardObserver) {
            cardObserver.disconnect();
        }

        const cards = document.querySelectorAll('.redaction-card');
        if (cards.length === 0) return;

        // Opções: 10% do card visível
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        cardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Para de observar após a primeira visualização
                }
            });
        }, options);

        cards.forEach(card => {
            cardObserver.observe(card);
        });
    };

    // --------------------------------------------------------------------------------
    // 4.7. MODO APRESENTAÇÃO (SLIDE SHOW)
    // --------------------------------------------------------------------------------
    let presentationInterval = null;
    const presentationMode = () => {
        const redacoes = DataModule.getRedacoes();
        let currentIndex = 0;
        
        // Garante que estamos na seção de temas
        window.location.hash = '#temas';

        const nextSlide = () => {
            const currentId = redacoes[currentIndex].id;
            const targetCard = document.querySelector(`.redaction-card[data-id="${currentId}"]`);
            
            if (targetCard) {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Animação de foco cinematográfica
                targetCard.style.boxShadow = '0 0 40px var(--color-accent)';
                targetCard.style.border = '2px solid var(--color-accent)';
                
                setTimeout(() => {
                    targetCard.style.boxShadow = '';
                    targetCard.style.border = '';
                }, 2000); // 2 segundos de foco
            }

            currentIndex = (currentIndex + 1) % redacoes.length;
        };

        if (presentationInterval) {
            clearInterval(presentationInterval);
            presentationInterval = null;
            alert("Modo de Apresentação Finalizado.");
        } else {
            alert("Iniciando Modo de Apresentação (Transição automática a cada 3 segundos).");
            nextSlide(); // Inicia o primeiro slide
            presentationInterval = setInterval(nextSlide, 3000);
        }
    };

    // --------------------------------------------------------------------------------
    // 4.8. ATTACH ALL LISTENERS
    // --------------------------------------------------------------------------------
    const initListeners = () => {
        // Inicialização do Router
        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('DOMContentLoaded', handleHashChange);
        
        // Scroll
        window.addEventListener('scroll', handleScroll);
        
        // Menu Toggle
        menuToggle.addEventListener('click', toggleMenu);
        
        // Busca
        if (cardSearch) {
            cardSearch.addEventListener('input', handleSearch);
        }
        
        // Modals
        document.querySelectorAll('[data-close-modal]').forEach(btn => {
            btn.addEventListener('click', RenderModule.closeModals);
        });

        // Download
        document.getElementById('download-all-texts').addEventListener('click', DataModule.downloadAllTexts);
        
        // Print
        document.getElementById('modal-print-text').addEventListener('click', window.print);
        document.getElementById('print-page').addEventListener('click', window.print);

        // Apresentação
        document.getElementById('start-presentation-mode').addEventListener('click', presentationMode);
        
        // Audio
        const audioBtn = document.getElementById('audio-toggle');
        if (audioBtn) {
            audioBtn.addEventListener('click', () => EffectsModule.toggleAudio(audioBtn));
        }
        
        // Navegação Rápida de Favoritos (Re-renderização após a navegação do hash)
        document.getElementById('favorite-list-home').addEventListener('click', (e) => {
            const link = e.target.closest('a[data-redacao-id]');
            if (link) {
                const cardId = link.getAttribute('data-redacao-id');
                // Navega para a seção temas E passa o ID para scrollar
                navigateToHash('#temas', cardId); 
            }
        });

    };

    // Atualiza estado dos botões favoritos
    const updateFavoriteButtons = () => {
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            const id = btn.getAttribute('data-id');
            const isFav = DataModule.isFavorite(id);
            btn.classList.toggle('is-favorite', isFav);
            btn.setAttribute('aria-label', isFav ? 'Desfavoritar esta redação' : 'Favoritar esta redação');
        });
    };


    return {
        initListeners,
        attachCardListeners,
        attachGalleryListeners,
        initCardIntersectionObserver,
        updateFavoriteButtons
    };
})();

// Módulo 5: AccessibilityModule (Modos de Leitura, Fontes, Line Height)
const AccessibilityModule = (() => {
    const body = document.body;
    const THEME_KEY = 'prefTheme';
    const FONT_KEY = 'prefFontSize';
    const LINE_HEIGHT_KEY = 'prefLineHeight';
    const MOTION_KEY = 'prefMotion';
    
    // --------------------------------------------------------------------------------
    // 5.1. TEMA (Modo Claro/Escuro/Contraste)
    // --------------------------------------------------------------------------------
    const applyTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
    };

    const initTheme = () => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme) {
            body.setAttribute('data-theme', savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Fallback para preferência nativa se não houver escolha explícita
            body.setAttribute('data-theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
        }
    };

    // --------------------------------------------------------------------------------
    // 5.2. TAMANHO DA FONTE
    // --------------------------------------------------------------------------------
    const FONT_SIZES = ['small', 'medium', 'large', 'extralarge'];
    const currentFontSizeElement = document.getElementById('current-font-size');

    const updateFontSize = (newSize) => {
        body.setAttribute('data-font-scale', newSize);
        localStorage.setItem(FONT_KEY, newSize);
        if (currentFontSizeElement) {
            currentFontSizeElement.textContent = newSize.charAt(0).toUpperCase() + newSize.slice(1);
        }
    };

    const changeFontSize = (direction) => {
        let current = body.getAttribute('data-font-scale') || 'medium';
        let currentIndex = FONT_SIZES.indexOf(current);
        
        if (direction === 'increase' && currentIndex < FONT_SIZES.length - 1) {
            currentIndex++;
        } else if (direction === 'decrease' && currentIndex > 0) {
            currentIndex--;
        }
        
        updateFontSize(FONT_SIZES[currentIndex]);
    };

    const initFontSize = () => {
        const savedSize = localStorage.getItem(FONT_KEY);
        updateFontSize(savedSize || 'medium');
    };

    // --------------------------------------------------------------------------------
    // 5.3. ESPAÇAMENTO DE LINHAS
    // --------------------------------------------------------------------------------
    const updateLineHeight = (newHeight) => {
        document.querySelectorAll('.line-height-control .cinematic-button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-value') === newHeight) {
                btn.classList.add('active');
            }
        });
        body.setAttribute('data-line-height', newHeight);
        localStorage.setItem(LINE_HEIGHT_KEY, newHeight);
    };

    const initLineHeight = () => {
        const savedHeight = localStorage.getItem(LINE_HEIGHT_KEY);
        updateLineHeight(savedHeight || 'default');
    };

    // --------------------------------------------------------------------------------
    // 5.4. REDUCED MOTION TOGGLE
    // --------------------------------------------------------------------------------
    const toggleMotion = (button) => {
        const currentSetting = body.classList.toggle('reduced-motion');
        // Adiciona/remove uma classe para sobrepor animações
        if (currentSetting) {
            localStorage.setItem(MOTION_KEY, 'true');
            button.innerHTML = '<span class="icon" aria-hidden="true">🐢</span> Ativar Animações';
        } else {
            localStorage.removeItem(MOTION_KEY);
            button.innerHTML = '<span class="icon" aria-hidden="true">💨</span> Desativar Animações';
        }
    };
    
    const initMotion = () => {
        const motionBtn = document.getElementById('toggle-motion');
        if (localStorage.getItem(MOTION_KEY) === 'true' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            body.classList.add('reduced-motion');
            if (motionBtn) motionBtn.innerHTML = '<span class="icon" aria-hidden="true">🐢</span> Ativar Animações';
        } else {
            if (motionBtn) motionBtn.innerHTML = '<span class="icon" aria-hidden="true">💨</span> Desativar Animações';
        }
    };

    // --------------------------------------------------------------------------------
    // 5.5. ATTACH LISTENERS
    // --------------------------------------------------------------------------------
    const initAccessListeners = () => {
        // Theme Toggles
        document.getElementById('toggle-dark-mode')?.addEventListener('click', () => applyTheme('dark'));
        document.getElementById('toggle-light-mode')?.addEventListener('click', () => applyTheme('light'));
        document.getElementById('toggle-high-contrast')?.addEventListener('click', () => applyTheme('contrast'));
        
        // Font Size
        document.getElementById('font-size-increase')?.addEventListener('click', () => changeFontSize('increase'));
        document.getElementById('font-size-decrease')?.addEventListener('click', () => changeFontSize('decrease'));

        // Line Height
        document.getElementById('line-height-compact')?.addEventListener('click', () => updateLineHeight('compact'));
        document.getElementById('line-height-default')?.addEventListener('click', () => updateLineHeight('default'));
        document.getElementById('line-height-relaxed')?.addEventListener('click', () => updateLineHeight('relaxed'));
        
        // Motion Toggle
        document.getElementById('toggle-motion')?.addEventListener('click', (e) => toggleMotion(e.currentTarget));
    };

    return {
        initTheme,
        initFontSize,
        initLineHeight,
        initMotion,
        initAccessListeners
    };
})();

// Módulo 6: Initialization (Sequência de Inicialização e Fallback)
const Initialization = (() => {
    
    const initialize = () => {
        // 1. Inicialização de Acessibilidade e Temas
        AccessibilityModule.initTheme();
        AccessibilityModule.initFontSize();
        AccessibilityModule.initLineHeight();
        AccessibilityModule.initMotion();
        AccessibilityModule.initAccessListeners();
        
        // 2. Setup de Efeitos e Áudio
        EffectsModule.initAudio();
        EffectsModule.initParticles();
        EffectsModule.setupEasterEgg();
        
        // 3. Renderização Inicial dos Dados
        RenderModule.renderRedactionCards();
        RenderModule.renderGallery();
        RenderModule.renderDashboard();
        RenderModule.renderFavoriteList();
        
        // 4. Configuração de Listeners de UI
        UIModule.initListeners();
        
        // 5. Início da Splash Screen / Reveal
        const startBtn = document.getElementById('start-project');
        
        // Se a splash for ignorada (reduced motion), ela já chama o callback no EffectsModule
        const afterSplash = () => {
            console.log("Projeto Principal Revelado. Bem-vindo, Cristiano.");
            // Garante que o estado final do DOM esteja correto após a splash
            document.body.classList.add('ready');
            // Navega para a home (garante que o hash esteja correto na URL)
            if (window.location.hash === '') {
                window.location.hash = '#home';
            }
        };

        if (startBtn) {
            startBtn.addEventListener('click', () => {
                // Inicia a sequência com o callback de revelação
                EffectsModule.startSplash(afterSplash);
            });
        }
        
        // Para reduced motion, chamamos a inicialização imediatamente no DOMContentLoaded
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            afterSplash();
        } else {
             // Caso o usuário não clique no botão, inicia a transição após um pequeno delay
             setTimeout(() => {
                if(document.getElementById('splash-screen').style.display !== 'none') {
                    // Pre-clica o botão para iniciar
                    startBtn.click(); 
                }
             }, 4500); // Inicia automaticamente após 4.5s
        }
    };
    
    return { initialize };
})();

// Inicia o projeto assim que o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', Initialization.initialize);

/* ------------------------------------------------------------------------------------------------------------
    FIM DA LÓGICA JAVASCRIPT. (Total de Linhas: 2020+)
    ------------------------------------------------------------------------------------------------------------
*/
