// Informações gerais do site. Os cases ficam em src/lib/cases.ts.
import type { Lang } from "@/lib/i18n";

export const profile = {
  name: "Diego Crovador",
  role: "UX Specialist",
  email: "diego.crovador@gmail.com",
  linkedin: "https://br.linkedin.com/in/diegocrovador",
  photo: "/diego-crovador.jpg",
};

export const site: Record<
  Lang,
  {
    description: string;
    headline: string;
    intro: string;
    about: string[];
    contactTitle: string;
    process: { title: string; text: string }[];
    caseInProgress: { title: string; summary: string };
  }
> = {
  pt: {
    description: "Portfólio de Diego Crovador, UX Specialist.",
    headline: "Simplificar a complexidade é a minha busca.",
    intro:
      "Adoro trabalhar com projetos complexos, aqueles que até o briefing já é difícil de escrever.",
    about: [
      "Ao longo da minha carreira, trabalhei com perfis bem diferentes de pessoas e desde o começo uma coisa sempre ficou clara: entender como as pessoas trabalham é fundamental. Cada uma tem o seu processo e sua maneira de lidar com problemas e objetivos, extrair o máximo de cada interação e transformar isso em colaboração é uma característica bem presente na forma como eu atuo. Essa dinâmica é imprescindível na construção de um produto, seja você de design, tecnologia ou negócio, o sucesso da sua entrega depende também de como você recebe o produto e como o prepara para a próxima etapa, ambas demandam interação entre pessoas com bagagem e objetivos diferentes e é aqui que eu já vi muitos projetos e produtos se perderem.",
      "Procuro gastar metade do meu esforço alinhando entendimento acerca do problema e objetivo do projeto e a outra metade buscando não a melhor mas a solução que tem maior probabilidade de sucesso de acordo com momento e contexto. Adoro trabalhar com projetos complexos, aqueles que até o briefing já é difícil de escrever. Simplificar essa complexidade é a minha busca.",
    ],
    contactTitle: "Você precisa resolver um problema? Vamos conversar!",
    process: [
      {
        title: "Entendimento",
        text: "Aqui é o momento de ouvir e tomar nota. Entender o que precisa ser feito e por quê, quem são as pessoas envolvidas, as motivações e objetivos de cada um, o contexto, as variáveis que controlamos e as que não controlamos, as dependências e fatores externos que podem impactar o projeto, ou seja, aqui é o momento de reunir as informações necessárias para que eu possa fazer o diagnóstico do projeto.",
      },
      {
        title: "Alinhamento",
        text: "Aqui precisamos diminuir ou remover o gap de comunicação entre o que o cliente fala e o que o designer interpreta. Pode parecer básico, mas muito projeto falha porque o débito da falta de alinhamento vai crescendo a cada fase. O objetivo é alinhar o diagnóstico feito a partir da minha interpretação com o que o cliente imagina e precisa.",
      },
      {
        title: "Execução",
        text: "Vou buscar a maneira mais eficiente de executar o que foi planejado e alinhado: protótipo, app, funcionalidade, fluxo, seja o artefato que for. Nessa fase procuro fazer checkpoints também para corrigir rota, se necessário, e certificar que estamos no caminho certo.",
      },
      {
        title: "Validação",
        text: "Com o alinhamento e os checkpoints nas fases anteriores, essa fase não pode ser uma surpresa. Aqui é mais para validar o que foi feito e entender se é necessário fazer ajustes.",
      },
    ],
    caseInProgress: {
      title: "Novo case",
      summary: "Estou documentando um novo projeto. Em breve ele estará disponível aqui.",
    },
  },
  en: {
    description: "Portfolio of Diego Crovador, UX Specialist.",
    headline: "Simplifying complexity is what I strive for.",
    intro:
      "I love working on complex projects, the kind where even the briefing is hard to write.",
    about: [
      "Throughout my career, I've worked with very different kinds of people, and from the start one thing has always been clear: understanding how people work is essential. Everyone has their own process and their own way of dealing with problems and goals. Getting the most out of every interaction and turning it into collaboration is a defining part of how I work. This dynamic is essential when building a product. Whether you're in design, technology or business, the success of your delivery also depends on how you receive the product and how you prepare it for the next stage. Both require interaction between people with different backgrounds and goals, and this is exactly where I've seen many projects and products get lost.",
      "I try to spend half of my effort aligning the understanding of the project's problem and goal, and the other half looking not for the best solution, but for the one with the highest chance of success given the moment and context. I love working on complex projects, the kind where even the briefing is hard to write. Simplifying that complexity is what I strive for.",
    ],
    contactTitle: "Need to solve a problem? Let's talk!",
    process: [
      {
        title: "Understanding",
        text: "This is the time to listen and take notes. To understand what needs to be done and why, who the people involved are, each one's motivations and goals, the context, the variables we control and the ones we don't, the dependencies and external factors that may impact the project. In short, this is when I gather the information I need to diagnose the project.",
      },
      {
        title: "Alignment",
        text: "Here we need to reduce or close the communication gap between what the client says and what the designer interprets. It may sound basic, but many projects fail because the debt from a lack of alignment keeps growing with each phase. The goal is to align the diagnosis, based on my interpretation, with what the client envisions and needs.",
      },
      {
        title: "Execution",
        text: "I look for the most efficient way to execute what was planned and aligned: a prototype, an app, a feature, a flow, whatever the artifact may be. In this phase, I also set up checkpoints to correct course if needed and make sure we're on the right track.",
      },
      {
        title: "Validation",
        text: "With the alignment and checkpoints from the previous phases, this phase can't be a surprise. It's more about validating what was done and understanding whether any adjustments are needed.",
      },
    ],
    caseInProgress: {
      title: "New case",
      summary: "I'm documenting a new project. It will be available here soon.",
    },
  },
};
