import kasa from "./assets/kasa.jpg";
import logoKasa from "./assets/logoKasa.svg";
import logoFilmFinder from "./assets/logoFilmFinder.svg";
import logoFisheye from "./assets/logoFisheye.svg";
import movieFinder from "./assets/movieFinder.jpg";
import fisheye from "./assets/fisheye.jpg";
import logoLesPetitsPlats from "./assets/logoLesPetitsPlats.svg";
import lesPetitsPlats from "./assets/lespetitsplats.jpg";
import ohmyfood from "./assets/ohmyfood.jpg";
import logoOhmyfood from "./assets/logoOhmyfood.svg";
import logoSportsee from "./assets/logoSportsee.svg";
import sportsee from "./assets/sportsee.jpg";
import logoArgentBank from "./assets/logoArgentBank.svg";
import logoPortfolio from "./assets/logoPortfolio.svg";
import argentBank from "./assets/argentBank.jpg";
import portfolio from "./assets/portfolio.jpg";

const data = [
  {
    id: 8,
    title: "Portfolio",
    logo: logoPortfolio,
    picture: portfolio,
    descriptionEn:
      "You are currently viewing my portfolio, which I created using React and React Router. I also utilized 'useContext' to effectively manage the application's state. I chose not to use any additional libraries in order to keep things simple. The application is also responsive, multilingual (English, French) and has a light/dark mode.",
    descriptionFr:
      "Vous êtes en train de regarder mon portfolio, que j'ai créé en utilisant React et React Router. J'ai également utilisé 'useContext' pour gérer l'état de l'application. Je n'ai pas utilisé d'autres librairies afin de garder une certaine simplicité. L’application est responsive, multilingue (anglais, français) et possède un mode claire/sombre.",
    tags: ["React", "React Router", "useContext"],
    linkGithub: "https://github.com/Matt-Fr/portfolio",
  },
  {
    id: 7,
    title: "Argent Bank",
    logo: logoArgentBank,
    picture: argentBank,
    descriptionEn:
      "Please note : The backend of the application must be installed before using this project. Please follow the installation instructions on the project's Github page. The ArgentBank application allows for authentication to a bank's service and interaction with its API. Redux Toolkit is used for state management and axios for API calls.",
    descriptionFr:
      "!!important!! Il faut installer le backend de l’application avant de pouvoir utiliser ce projet, suivez les instructions sur la page Github du projet. L’application d'ArgentBank permet de s’authentifier au service d’une banque et d’interagir avec l’API de celle-ci. J’ai utilisé Redux Toolkit pour la gestion du state ainsi qu’axios pour les appels API.",
    tags: ["React", "Redux Toolkit", "axios", "Swagger"],
    linkGithub: "https://github.com/Matt-Fr/franck_matthieu_13_21092022",
  },
  {
    id: 6,
    title: "SportSee",
    logo: logoSportsee,
    picture: sportsee,
    descriptionEn:
      "The Sportsee application is a dashboard which uses data (calories burned, length of workout, etc.) from an external API to create data visualizations of the athletic performances of two individuals. The graphs were created using the Recharts library and the state management using a context hook. The welcome interface contains four buttons for the two individuals: two buttons bring the user to the data visualizations based on the external API, and two buttons also display data visualizations for the same two individuals but this time pulling mock data. The application is not designed for tablet or mobile use (1024 pixels or higher).",
    descriptionFr:
      "L’application Sportsee est un Dashboard utilisant les données d’une API externe et permettant de visualiser les performances sportives des utilisateurs. Les graphs ont été réalisés grâce à la librairie Recharts et le state management grâce à un context. L’interface de l’accueil nous renvoie vers les données de deux utilisateurs (soit venant des données de l’API, soit des données mockées). L’application n’est pas conçue pour tablette et mobile (1024 pixels et plus).",
    tags: ["React", "React Router", "Context", "Recharts"],
    demo: "https://mattfr-sportsee.netlify.app/",
    linkGithub: "https://github.com/Matt-Fr/Franck_Matthieu_12_17052022",
  },
  {
    id: 5,
    title: "Kasa",
    logo: logoKasa,
    picture: kasa,
    descriptionEn:
      "The Kasa apartment rental application was my first project built with React and React Router. The principal skills utilized in this project are the creation of a web application using React as well as the creation of components and routes using React Router. The application enables the user to navigate between various rental properties. When selected, each rental listing contains a brief description of the property, image gallery, and user ratings.",
    descriptionFr:
      "Cette application de location de logements a été mon tout premier projet construit avec React et React Router. Parmi les compétences ciblées, il y a l’initialisation d’une application web avec React, la création de composants et des routes de l’application avec React Router. L’application permet de naviguer entre les différents logements. Ils possèdent tous leurs propres description, galerie d’images et notations. ",
    tags: ["React", "React Router", "Responsive", "SCSS"],
    demo: "https://mattfr-kasa.netlify.app/",
    linkGithub: "https://github.com/Matt-Fr/Franck_Matthieu_11_26042022",
  },
  {
    id: 4,
    title: "FilmFinder",
    logo: logoFilmFinder,
    picture: movieFinder,
    descriptionEn:
      "In creating the FilmFinder project, I learned how to use an external API. This application, created using React and React Router, allows the user to search a film through the use of a search bar. When a film name is selected, the user is directed to a page which includes a short description of the film, and the film rating. The IMDB API was used in order to pull film rating information for display in the application.",
    descriptionFr:
      "J’ai pu m’entrainer, avec ce petit projet, à utiliser pour la première fois une API externe. Cette application, créée à l'aide de React et React Router, permet de rechercher un film à l'aide d'une barre de recherche. En cliquant sur un film, vous serez redirigé sur une page comportant plus d'informations sur ce dernier. Cette application a été réalisé grâce à l'API IMDb.",
    tags: ["React", "React Router", "API IMDb"],
    demo: "https://mattfr-film-finder.netlify.app/",
    linkGithub: "https://github.com/Matt-Fr/film_finder",
  },

  {
    id: 3,
    title: "Les Petits Plats",
    logo: logoLesPetitsPlats,
    picture: lesPetitsPlats,
    descriptionEn:
      "Les Petits Plats is a website developed using vanilla JavaScript which allows the user to enter multiple search criteria using pre-set filters and a search bar to search a database of 50 recipes. The principal skill showcased within this project is the development of an algorithm to display information based on the searched criteria.",
    descriptionFr:
      "Les Petits Plats est un site web développé en JavaScript vanilla permettant de rechercher des recettes de cuisines à l’aide de différents filtres ainsi que plusieurs barres de recherche. Parmi les compétences ciblées : développer un algorithme pour résoudre un problème, analyser un problème informatique.",
    tags: ["Vanilla JS", "HTML & CSS", "Responsive"],
    demo: "https://mattfr-les-petits-plats.netlify.app/",
    linkGithub: "https://github.com/Matt-Fr/FranckMatthieu_7_03012022",
  },
  {
    id: 2,
    title: "Fisheye",
    logo: logoFisheye,
    picture: fisheye,
    descriptionEn:
      "The Fisheye application was my first website created from scratch using vanilla JavaScript through my OpenClassrooms course. The principal skills used in the creation of this website are: Develop a modular web application utilizing several design patterns, write JavaScript code so that is maintainable, manage the events of a site using JavaScript, and website accessibility. Building this site in JavaScript without access to a JavaScript library enabled me to learn the basics of the language and later, to fully understand and appreciate the advantages of a JavaScript framework.",
    descriptionFr:
      "L’application Fisheye a été mon tout premier site web réalisé ex nihilo en Javascript Vanilla avec Openclassrooms. Parmi les compétences ciblées : développer une application web modulaire avec des design patterns, écrire du code JavaScript maintenable, gérer les évènements d'un site avec JavaScript, assurer l'accessibilité d'un site web. Construire ce site en JavaScript sans aucune librairie m’a permis d’apprendre les bases du langage, et plus tard, d’apprécier les avantages d’un framework JS.",
    tags: ["Vanilla JS", "ESLint", "Responsive"],
    demo: "https://matt-fr.github.io/FranckMatthieu_6_28102021/index.html",
    linkGithub: "https://github.com/Matt-Fr/FranckMatthieu_6_28102021",
  },
  {
    id: 1,
    title: "OhMyFood",
    logo: logoOhmyfood,
    picture: ohmyfood,
    descriptionEn:
      "OhMyFood is one of my first projects created exclusively in HTML with the SCSS preprocessor. The site was built with the “mobile first” approach and gave me the opportunity to use CSS animations. Among the principal skills used in this project are: to put in place a navigation structure for a website, to use advanced CSS graphics, to ensure the graphical coherence of the website.",
    descriptionFr:
      "OhMyFood est l’un de mes premiers projets Openclassrooms créés exclusivement en Html avec le préprocesseur SCSS. Le site a été construit avec l’approche « mobile first » et m’a permis de m’initier aux animations CSS. Parmi les compétences ciblées : Mettre en place une structure de navigation pour un site web ; Mettre en œuvre des effets CSS graphiques avancés ; Assurer la cohérence graphique d'un site web.",
    tags: ["HTML & CSS", "Responsive"],
    demo: "https://mattfr-ohmyfood.netlify.app/",
    linkGithub: "https://github.com/Matt-Fr/Franckmatthieu_3_24082021",
  },
];

export default data;
