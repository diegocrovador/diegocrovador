import type { Lang } from "@/lib/i18n";

// Conteúdo dos cases. Cada bloco é um parágrafo ("p") ou uma imagem ("img").
// As imagens ainda não existem: aparecem como espaço reservado com a legenda.

export type Block =
  | { type: "p"; text: string }
  | { type: "img"; alt: string; caption: string; src?: string };

export type CaseStudy = {
  id: string; // igual nos dois idiomas, liga a versão PT à versão EN
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

const pt: CaseStudy[] = [
  {
    id: "copiloto",
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
    id: "concorrente",
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

const en: CaseStudy[] = [
  {
    id: "copiloto",
    slug: "the-copilot-that-didnt-fly",
    number: "01",
    title: "The Copilot that didn't fly",
    subtitle: "AI assistant for call center agents at a global bank",
    context: "Global bank with a strong presence in Europe and South America",
    role: "UX Designer Specialist, alongside a Researcher Specialist and a UX Manager",
    tags: ["AI", "Research", "Call center"],
    highlight: "MVP in 3 countries in Q1 2027",
    sections: [
      {
        heading: "Four layers, five customers at once",
        blocks: [
          p("For a call center agent, every interaction happens across four layers: the conversation with the customer, that customer's data, the service system, and the material that guides each type of request. Each one demands interpretation effort."),
          p("In the chat, agents move through these layers with up to five customers at the same time, while being measured by Average Handle Time (AHT), the average duration of each interaction."),
          img("AS IS flow", "In the current flow, the agent pays the effort of almost every layer."),
        ],
      },
      {
        heading: "The wrong question",
        blocks: [
          p("With the market buzzing about the topic and the company adopting AI tools, the request arrived with the question already framed: how can we add AI to help the agent?"),
          p("At the peak of the hype, AI was being treated as an end, not a means. But before deciding where to put it, I needed to understand how agents moved between the layers, because each one leaves a debt that someone has to pay: the system or the agent."),
        ],
      },
      {
        heading: "The Copilot that didn't fly",
        blocks: [
          p("We spent two days in the operation, observing and talking with agents and their team leaders, at separate moments. From the agents, we wanted to understand how the work gets done day to day. From the leaders, why it needs to be done that way."),
          p("It became clear that the agent was the one footing the bill. They are the ones who figure out why the customer is reaching out, find the customer's information and navigate the guidance material."),
          p("The irony is that there was already a tool to help with this, called Copilot. In practice, it was just a decision tree, with no integration with any other system. Agents had to find the right flow for the type of request and go through the entire tree for the interaction to be counted. Even experienced agents, who already knew what to do, were penalized by this model."),
          p("Leaders saw Copilot differently. For them, the tool ensures agents share verified information, follow a validated flow and have their interactions counted. But they themselves admitted that, at times, it becomes an obstacle."),
          p("That changed the question. Copilot couldn't simply go away, because what it guarantees for leadership had to keep existing. The problem wasn't a lack of AI. It was who was doing the heavy lifting."),
        ],
      },
      {
        heading: "Replacing the pilot",
        blocks: [
          p("The solution was to flip the logic. Copilot already holds all the rules for each type of request. By connecting that knowledge base to the chat and to customer data, with AI-driven orchestration, it now walks through the flow in place of the agent."),
          img("Flipping the logic", "The same interaction, with the debt of each layer shifted from the agent to Copilot."),
          p("The agent becomes the copilot: they validate what the system proposes and ensure the quality of the service. The operational debt changes sides. Leadership keeps the validated flow and the tracking, and AI stops being the goal and becomes the means that connects everything."),
          img("Concept", "The agent validates Copilot's suggestion instead of going through the entire tree."),
        ],
      },
      {
        heading: "From local exploration to global project",
        blocks: [
          p("The project started as a conceptual exploration for a local market. It gained traction within the company and became a global project. We are now finalizing the MVP design, which will be rolled out in Q1 2027, initially in three of the group's countries."),
        ],
      },
      {
        heading: "What still needs to be proven",
        blocks: [
          p("Some questions still need answers: Does the validator role actually reduce the agent's day-to-day effort? Was AHT reduced? How are quality indicators such as First Call Resolution performing?"),
          p("The most important decision in the project wasn't about the interface. It was changing the question: instead of \"where do we put AI?\", we started asking \"who is paying the operation's debt?\"."),
        ],
      },
    ],
  },
  {
    id: "concorrente",
    slug: "the-competitor-was-already-installed",
    number: "02",
    title: "The competitor was already installed",
    subtitle: "AI assistant for relationship managers at a global bank",
    context: "Global bank with a strong presence in Europe and South America",
    role: "UX Designer Specialist, alongside a Researcher Specialist and a UX Manager",
    tags: ["AI", "Usability testing", "Strategy"],
    highlight: "Research that changed a business decision",
    sections: [
      {
        heading: "A project with no secrets",
        blocks: [
          p("Managers already had two generative AI solutions: an assistant to answer questions about the bank's products and processes, and a sales pitch generator based on an offer. Both lived in separate tools, outside the main system. Many managers forgot about them or didn't even know they existed, and those who used them lost time in a fragmented journey."),
          p("The goal of the first phase was to bring these capabilities together into a single assistant, inside the manager's main system."),
          p("Since we had already done other projects for this audience, we knew the journey well: which tools managers use and why, what they do during the day and what they need to deliver each week. On the surface, the project had no secrets: study the usage patterns of market assistants such as Claude, ChatGPT and Gemini, and design our own, exploring ways to fit it into the manager's journey."),
          img("The assistant inside the manager's system", "Both capabilities brought together in one place, without leaving the main system."),
        ],
      },
      {
        heading: "How to test a conversation without a script",
        blocks: [
          p("Testing was the first challenge. In a dashboard or a transactional journey, for example, users have well-defined paths and use cases. In an AI assistant, the possible questions are virtually endless. Simulating the answers would make the test too guided and limit what we could learn."),
          p("The solution was to use the AI tools we had at hand, such as Devin and Microsoft Copilot, to build a prototype that actually answered, with both capabilities: answering questions and generating pitches. With it, we ran a moderated test with 8 managers."),
          img("Prototype used in the test", "A working prototype, so managers could ask whatever they wanted."),
        ],
      },
      {
        heading: "The competitor was already installed",
        blocks: [
          p("But the UX team wasn't the only one with access to Microsoft Copilot. The managers had it too, and that changed the course of the project."),
          p("During the tests, we found that some managers were already using Copilot for tasks our assistant would only support in future versions: they were generating sales analyses from spreadsheets exported from the system and creating sales pitches. From other research, we knew managers share best practices with each other, so it was only a matter of time before this behavior spread."),
          p("The tests also made clear what managers needed: integration with customer data. That was what would set an internal tool apart from a market tool, and it was exactly what the first phase wouldn't have."),
        ],
      },
      {
        heading: "The best delivery was not launching",
        blocks: [
          p("I presented the results to the requesting team with a question: do we want managers to choose between an established market tool with frequent updates and an internal tool without its main differentiator?"),
          p("The team agreed with the risk. The launch was paused and the product went back for roadmap review. Today, the manager's assistant is being reworked to deliver the capabilities it needs from day zero."),
        ],
      },
      {
        heading: "What remains",
        blocks: [
          p("The research didn't just help fine-tune the interface. It changed a business decision before launching a product with little chance of adoption."),
          p("And it left a lesson about internal assistants: the differentiator isn't the conversation, which market tools already do well, but access to the data only the company has."),
        ],
      },
    ],
  },
];

export const cases: Record<Lang, CaseStudy[]> = { pt, en };

// Encontra o mesmo case no outro idioma
export function counterpart(slug: string, from: Lang, to: Lang) {
  const c = cases[from].find((x) => x.slug === slug);
  return c ? cases[to].find((x) => x.id === c.id) : undefined;
}
