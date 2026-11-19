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
    caseInProgress: {
      title: "Novo case",
      summary: "Estou documentando um novo projeto. Em breve ele estará disponível aqui.",
    },
  },
  en: {
    description: "Portfolio of Diego Crovador, UX Specialist.",
    headline: "Simplifying complexity is what I strive for.",
    intro:
      "I love working on complex projects, the kind where even the brief is hard to write.",
    about: [
      "Throughout my career, I've worked with very different kinds of people, and from the start one thing has always been clear: understanding how people work is essential. Everyone has their own process and their own way of dealing with problems and goals. Getting the most out of every interaction and turning it into collaboration is a defining part of how I work. This dynamic is essential when building a product. Whether you're in design, technology or business, the success of your delivery also depends on how you receive the product and how you prepare it for the next stage. Both require interaction between people with different backgrounds and goals, and this is exactly where I've seen many projects and products get lost.",
      "I try to spend half of my effort aligning the understanding of the project's problem and goal, and the other half looking not for the best solution, but for the one with the highest chance of success given the moment and context. I love working on complex projects, the kind where even the brief is hard to write. Simplifying that complexity is what I strive for.",
    ],
    contactTitle: "Need to solve a problem? Let's talk!",
    caseInProgress: {
      title: "New case",
      summary: "I'm documenting a new project. It will be available here soon.",
    },
  },
};
