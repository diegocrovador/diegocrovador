export const langs = ["pt", "en"] as const;
export type Lang = (typeof langs)[number];

export const htmlLang: Record<Lang, string> = { pt: "pt-BR", en: "en" };

export const homePath = (lang: Lang) => (lang === "pt" ? "/" : "/en");
export const casePath = (lang: Lang, slug: string) =>
  lang === "pt" ? `/cases/${slug}` : `/en/cases/${slug}`;
export const sectionPath = (lang: Lang, id: string) =>
  lang === "pt" ? `/#${id}` : `/en#${id}`;

// Textos fixos da interface
export const ui = {
  pt: {
    skip: "Pular para o conteúdo",
    home: "início",
    mainNav: "Principal",
    nav: { cases: "Cases", process: "Processo", about: "Sobre", contact: "Contato" },
    process: "Processo",
    howIWork: "Como eu trabalho",
    phase: "Fase",
    cta: "Vamos conversar",
    viewCases: "Ver cases",
    getInTouch: "Entrar em contato",
    work: "Trabalhos",
    selectedCases: "Cases selecionados",
    readCase: "Ler case",
    inProgress: "Em construção",
    aboutMe: "Sobre mim",
    photoOf: "Foto de",
    newTab: "(abre em nova aba)",
    allCases: "Todos os cases",
    case: "Case",
    context: "Contexto",
    myRole: "Meu papel",
    nextCase: "Próximo case",
    image: "Imagem",
    langSwitch: "Idioma",
    menu: "Menu",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    contactMe: "Fale comigo",
  },
  en: {
    skip: "Skip to content",
    home: "home",
    mainNav: "Main",
    nav: { cases: "Cases", process: "Process", about: "About", contact: "Contact" },
    process: "Process",
    howIWork: "How I work",
    phase: "Phase",
    cta: "Let's talk",
    viewCases: "View cases",
    getInTouch: "Get in touch",
    work: "Work",
    selectedCases: "Selected cases",
    readCase: "Read case",
    inProgress: "In progress",
    aboutMe: "About me",
    photoOf: "Photo of",
    newTab: "(opens in a new tab)",
    allCases: "All cases",
    case: "Case",
    context: "Context",
    myRole: "My role",
    nextCase: "Next case",
    image: "Image",
    langSwitch: "Language",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contactMe: "Get in touch",
  },
} satisfies Record<Lang, unknown>;
