// Conteúdo dos cases. Cada bloco é um parágrafo ("p") ou uma imagem ("img").
// As imagens ainda não existem: aparecem como espaço reservado com a legenda.

export type Block =
  | { type: "p"; text: string }
  | { type: "img"; alt: string; caption: string; src?: string };

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  context: string;
  role: string;
  tags: string[];
  highlight: string;
  sections: { heading: string; blocks: Block[] }[];
};

const p = (text: string): Block => ({ type: "p", text });
const img = (alt: string, caption: string): Block => ({ type: "img", alt, caption });

export const cases: CaseStudy[] = [
  {
    slug: "o-copiloto-que-nao-pilotava",
    number: "01",
    title: "O Copiloto que não pilotava",
    subtitle: "Assistente de IA para operadores de call center de um banco global",
    context: "Banco global com forte presença na Europa e na América do Sul",
    role: "UX Designer Specialist, junto de um Researcher Specialist e um UX Manager",
    tags: ["IA", "Pesquisa", "Call center"],
    highlight: "MVP em 3 países no 1º tri de 2027",
    sections: [
      {
        heading: "Quatro camadas, cinco clientes ao mesmo tempo",
        blocks: [
          p("Para um operador de call center, cada atendimento acontece em quatro camadas: a conversa com o cliente, os dados desse cliente, o sistema de atendimento e o material que guia cada tipo de atendimento. Cada uma exige esforço de interpretação."),
          p("No chat, ele interage por essas camadas com até cinco clientes ao mesmo tempo, enquanto é medido pelo Average Handle Time (AHT), o tempo médio de cada atendimento."),
          img("Fluxo AS IS", "No fluxo atual, o operador paga o esforço de quase todas as camadas."),
        ],
      },
      {
        heading: "A pergunta errada",
        blocks: [
          p("Com o mercado aquecido com o tema e a empresa adotando ferramentas de IA, o pedido chegou com a pergunta pronta: como podemos inserir IA para ajudar o operador?"),
          p("No auge do hype, a IA estava sendo tratada como fim, e não como meio. Mas antes de decidir onde colocá-la, eu precisava entender como o operador se movia entre as camadas, porque cada uma deixa um débito que alguém precisa pagar: o sistema ou o operador."),
        ],
      },
      {
        heading: "O Copiloto que não pilotava",
        blocks: [
          p("Passamos dois dias na operação, observando e conversando com operadores e com seus líderes, em momentos separados. Dos operadores, queríamos entender como o trabalho é feito no dia a dia. Dos líderes, por que ele precisa ser feito daquela forma."),
          p("Ficou claro que o operador é quem pagava a conta. É ele quem entende o motivo do contato, encontra as informações do cliente e navega pelo material guia."),
          p("A ironia é que já existia uma ferramenta para ajudá-lo nisso, chamada Copiloto. Na prática, era só uma árvore de decisão, sem integração com nenhum outro sistema. O operador precisava encontrar o fluxo certo condizente ao tipo de atendimento e percorrer a árvore inteira para que o atendimento fosse contabilizado. Até o operador experiente, que já sabia o que fazer, era punido por esse modelo."),
          p("Os líderes viam o Copiloto de outro jeito. Para eles, a ferramenta garante que o operador passe informação verificada, siga um fluxo validado e tenha seus atendimentos contabilizados. Mas eles mesmos reconheciam que, às vezes, ela vira um obstáculo."),
          p("Isso mudou a pergunta. O Copiloto não podia simplesmente sair, porque o que ele garante para a liderança precisava continuar existindo. O problema não era a falta de IA. Era quem estava fazendo o trabalho pesado."),
        ],
      },
      {
        heading: "Substituindo o piloto",
        blocks: [
          p("A solução foi inverter a lógica. O Copiloto já tem todas as regras de cada tipo de atendimento. Conectando essa base ao chat e aos dados do cliente, com uma orquestração feita por IA, ele passa a percorrer o fluxo no lugar do operador."),
          img("Inversão da lógica", "O mesmo atendimento, com o débito de cada camada transferido do operador para o Copiloto."),
          p("O operador passa a ser o copiloto: ele valida o que o sistema propõe e garante a qualidade do atendimento. O débito operacional muda de lado. A liderança mantém o fluxo validado e a contabilização, e a IA deixa de ser o objetivo para virar o meio que conecta tudo."),
          img("Conceito", "O operador valida a sugestão do Copiloto em vez de percorrer a árvore inteira."),
        ],
      },
      {
        heading: "De exploração local a projeto global",
        blocks: [
          p("O projeto começou como uma exploração conceitual para um mercado local. Ganhou força dentro da empresa e se tornou um projeto global. Hoje estamos finalizando o desenho do MVP, que será implementado no 1º trimestre de 2027, inicialmente em três países do grupo."),
        ],
      },
      {
        heading: "O que ainda precisa ser provado",
        blocks: [
          p("Algumas perguntas precisam ser respondidas: O papel de validador reduz de fato o esforço do operador no dia a dia? O AHT foi reduzido? Como estão os indicadores de qualidade como o First Call Resolution?"),
          p("A decisão mais importante do projeto não foi de interface. Foi trocar a pergunta: em vez de \"onde colocamos IA?\", passamos a perguntar \"quem está pagando o débito da operação?\"."),
        ],
      },
    ],
  },
  {
    slug: "o-concorrente-ja-estava-instalado",
    number: "02",
    title: "O concorrente já estava instalado",
    subtitle: "Assistente de IA para gerentes de um banco global",
    context: "Banco global com forte presença na Europa e na América do Sul",
    role: "UX Designer Specialist, junto de um Researcher Specialist e um UX Manager",
    tags: ["IA", "Teste de usabilidade", "Estratégia"],
    highlight: "Pesquisa que mudou uma decisão de negócio",
    sections: [
      {
        heading: "Um projeto sem segredo",
        blocks: [
          p("Os gerentes já tinham duas soluções de IA generativa: um assistente para tirar dúvidas sobre produtos e processos do banco e um gerador de pitch comercial a partir de uma oferta. As duas ficavam em ferramentas separadas, fora do sistema principal. Muitos gerentes esqueciam ou nem sabiam que elas existiam, e quem usava perdia tempo com uma jornada fragmentada."),
          p("O objetivo da primeira fase era reunir essas capacidades em um único assistente, dentro do sistema principal do gerente."),
          p("Como já tínhamos feito outros projetos para esse público, conhecíamos bem a jornada: quais ferramentas o gerente acessa e por quê, o que faz durante o dia e o que precisa entregar na semana. Aparentemente, o projeto não tinha segredo: estudar os padrões de uso dos assistentes do mercado, como Claude, ChatGPT e Gemini e desenhar o nosso, explorando formas de inseri-lo na jornada do gerente."),
          img("O assistente dentro do sistema do gerente", "As duas capacidades reunidas em um só lugar, sem sair do sistema principal."),
        ],
      },
      {
        heading: "Como testar uma conversa sem roteiro",
        blocks: [
          p("Testar foi o primeiro desafio. Em um dashboard ou em uma jornada transacional, por exemplo, o usuário tem caminhos e casos de uso bem definidos. Em um assistente de IA, as perguntas possíveis são praticamente infinitas. Simular as respostas deixaria o teste guiado demais e limitaria o que poderíamos aprender."),
          p("A solução foi usar ferramentas de IA que tínhamos à disposição, como o Devin e o Microsoft Copilot, para criar um protótipo que respondesse de verdade, com as duas capacidades: tirar dúvidas e gerar pitch. Com ele, fizemos um teste moderado com 8 gerentes."),
          img("Protótipo usado no teste", "Um protótipo funcional, para que o gerente perguntasse o que quisesse."),
        ],
      },
      {
        heading: "O concorrente já estava instalado",
        blocks: [
          p("Só que o time de UX não era o único com acesso ao Microsoft Copilot. Os gerentes também tinham e essa informação mudou o rumo do projeto."),
          p("Nos testes, descobrimos que alguns gerentes já usavam o Copilot para tarefas que o nosso assistente só teria em versões futuras, eles estavam gerando análises de vendas a partir de planilhas exportadas do sistema e criando pitches comerciais. Por outras pesquisas, sabíamos que os gerentes compartilham boas práticas entre si, era questão de tempo até esse comportamento se espalhar."),
          p("Os testes também deixaram claro o que os gerentes precisavam: integração com os dados do cliente. Era isso que diferenciaria uma ferramenta interna de uma ferramenta de mercado, e era justamente o que a primeira fase não teria."),
        ],
      },
      {
        heading: "A melhor entrega foi não lançar",
        blocks: [
          p("Apresentei os resultados para a área demandante com uma pergunta: queremos que o gerente escolha entre uma ferramenta de mercado consolidada com atualizações frequentes, e uma ferramenta interna sem o seu principal diferencial?"),
          p("A área concordou com o risco. O lançamento foi pausado e o produto voltou para revisão de roadmap. Hoje, o assistente do gerente está sendo revisto para entregar as capacidades que precisa no D zero."),
        ],
      },
      {
        heading: "O que fica",
        blocks: [
          p("A pesquisa não serviu só para ajustar a interface. Ela mudou uma decisão de negócio antes do lançamento de um produto com pouca chance de adoção."),
          p("E deixou uma lição sobre assistentes internos: o diferencial não está na conversa, que as ferramentas de mercado já fazem bem, mas no acesso aos dados que só a empresa tem."),
        ],
      },
    ],
  },
];
