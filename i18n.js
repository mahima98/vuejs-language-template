import { createI18n } from "vue-i18n";
const messages = {
  en: {
    message: {
      hello: "hello world",
    },
    menu: {
      about: "About",
      work: "Work",
      latest: "Latest",
      people: "People & Careers",
      contact: "Contact",
    },
    homepage: {
      descriptionOne_1: "We make people",
      descriptionOne_2: "more valuable to brands",
      headingOne: "HOW WE DO IT",
      descriptionTwo_1: "We use data-driven creativity",
      descriptionTwo_2: "to solve business problems",
      descriptionThree:
        "By harnessing powerful insights and smart targeting, we’re able to create behavior-changing ideas and experiences that deliver value to brands. Supported by our proprietary Creative Intelligence process, unique tools and global partners, we are able to put data at the heart of everything we do to orchestrate experiences that deliver creativity with precision and purpose.",
      headingTwo: "BUSINESS PROBLEMS WE’VE SOLVED",
      headingThree: "Can a love story double as a hearing test?",
      headingFour: "How close to an AFL player can you get?",
      link1: "Find out here",
      link2: "View our work",
      backToTop: "Return to top",
      footer:
        "&copy; Proximity Worldwide 2018. All Rights Reserved. Privacy statement.",
    },
  },
  fr: {
    message: {
      hello: "Таки здравствуйте",
    },
    menu: {
      about: "A propos",
      work: "Nos campagnes",
      latest: "News",
      people: "Equipe & carrière",
      contact: "Contact",
    },
    homepage: {
      descriptionOne_1: "Nous faisons des gens",
      descriptionOne_2: "plus précieux pour les marques",
      headingOne: "COMMENT NOUS LE FAISONS",
      descriptionTwo_1: "Nous utilisons la créativité basée sur les données",
      descriptionTwo_2: "pour résoudre des problèmes commerciaux",
      descriptionThree:
        "En exploitant des informations puissantes et un ciblage intelligent, nous sommes en mesure de créer des idées et des expériences qui changent les comportements et qui apportent de la valeur aux marques. Soutenus par notre processus exclusif Creative Intelligence, des outils uniques et des partenaires mondiaux, nous sommes en mesure de placer les données au cœur de tout ce que nous faisons pour orchestrer des expériences qui offrent une créativité avec précision et sens.",
      headingTwo: "PROBLÈMES COMMERCIAUX QUE NOUS AVONS RÉSOLUS",
      headingThree: "Une histoire d'amour peut-elle servir de test auditif ?",
      headingFour:
        "À quelle distance d'un joueur de l'AFL pouvez-vous vous rapprocher?",
      link1: "Découvrez ici",
      link2: "Voir notre travail",
      backToTop: "Retourner en haut",
      footer:
        "© Proximity Worldwide 2018. Tous droits réservés. Déclaration de confidentialité.",
    },

    about: "A propos",
    work: "Nos Campagne",
  },
};
const i18n = createI18n({
  locale: "en",
  messages,
});
export default i18n;
