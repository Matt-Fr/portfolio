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

const data = [
  {
    id: 1,
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
    id: 2,
    title: "FilmFinder",
    logo: logoFilmFinder,
    picture: movieFinder,
    descriptionEn:
      "I'm baby vexillologist stumptown swag, put a bird on it tote bag DIY meggings. Post-ironic lomo ethical etsy keffiyeh pitchfork wayfarers austin cold-pressed tofu blue bottle 8-bit helvetica butcher. Helvetica la croix austin air plant. Subway tile bespoke praxis dreamcatcher chia forage lyft humblebrag lumbersexual synth brunch la croix.",
    descriptionFr:
      "Meggings bitters poutine reprehenderit chillwave bicycle rights. Leggings raw denim scenester, dreamcatcher vice ut cred freegan sed fixie aute wolf. Keffiyeh af hammock keytar edison bulb tilde, williamsburg lomo. Pork belly lo-fi roof party pop-up, aesthetic lomo tonx neutra PBR&B semiotics commodo laborum fugiat deep v four dollar toast. Shaman poutine ennui tbh, jianbing minim single-origin coffee williamsburg coloring book. Trust fund tumeric adaptogen stumptown you probably haven't heard of them 90's magna direct trade pitchfork skateboard pariatur letterpress fam gentrify.",
    tags: ["React", "HTML & CSS", "Responsive"],
    demo: "https://mattfr-film-finder.netlify.app/",
    linkGithub: "https://github.com/Matt-Fr/film_finder",
  },

  {
    id: 4,
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
    id: 3,
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
    id: 5,
    title: "OhMyFood",
    logo: logoOhmyfood,
    picture: ohmyfood,
    descriptionEn:
      "I'm baby vexillologist stumptown swag, put a bird on it tote bag DIY meggings. Post-ironic lomo ethical etsy keffiyeh pitchfork wayfarers austin cold-pressed tofu blue bottle 8-bit helvetica butcher. Helvetica la croix austin air plant. Subway tile bespoke praxis dreamcatcher chia forage lyft humblebrag lumbersexual synth brunch la croix.",
    descriptionFr:
      "Meggings bitters poutine reprehenderit chillwave bicycle rights. Leggings raw denim scenester, dreamcatcher vice ut cred freegan sed fixie aute wolf. Keffiyeh af hammock keytar edison bulb tilde, williamsburg lomo. Pork belly lo-fi roof party pop-up, aesthetic lomo tonx neutra PBR&B semiotics commodo laborum fugiat deep v four dollar toast. Shaman poutine ennui tbh, jianbing minim single-origin coffee williamsburg coloring book. Trust fund tumeric adaptogen stumptown you probably haven't heard of them 90's magna direct trade pitchfork skateboard pariatur letterpress fam gentrify.",
    tags: ["HTML & CSS", "Responsive"],
    demo: "https://mattfr-ohmyfood.netlify.app/",
    linkGithub: "https://github.com/Matt-Fr/Franckmatthieu_3_24082021",
  },
];

export default data;
