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
      "I'm baby brunch migas YOLO twee pickled gluten-free. Hell of vape art party, tote bag poutine sartorial blue bottle hella la croix DIY microdosing ennui ramps. Vexillologist portland mlkshk keytar tousled. Flexitarian four dollar toast paleo yuccie tacos dreamcatcher thundercats microdosing hexagon wolf. Prism banh mi poutine, bicycle rights tonx air plant authentic vice farm-to-table deep v truffaut DSA mlkshk letterpress twee. Edison bulb cronut etsy before they sold out, roof party venmo twee palo santo.",
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
      "I'm baby vexillologist stumptown swag, put a bird on it tote bag DIY meggings. Post-ironic lomo ethical etsy keffiyeh pitchfork wayfarers austin cold-pressed tofu blue bottle 8-bit helvetica butcher. Helvetica la croix austin air plant. Subway tile bespoke praxis dreamcatcher chia forage lyft humblebrag lumbersexual synth brunch la croix.",
    descriptionFr:
      "Meggings bitters poutine reprehenderit chillwave bicycle rights. Leggings raw denim scenester, dreamcatcher vice ut cred freegan sed fixie aute wolf. Keffiyeh af hammock keytar edison bulb tilde, williamsburg lomo. Pork belly lo-fi roof party pop-up, aesthetic lomo tonx neutra PBR&B semiotics commodo laborum fugiat deep v four dollar toast. Shaman poutine ennui tbh, jianbing minim single-origin coffee williamsburg coloring book. Trust fund tumeric adaptogen stumptown you probably haven't heard of them 90's magna direct trade pitchfork skateboard pariatur letterpress fam gentrify.",
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
      "I'm baby vexillologist stumptown swag, put a bird on it tote bag DIY meggings. Post-ironic lomo ethical etsy keffiyeh pitchfork wayfarers austin cold-pressed tofu blue bottle 8-bit helvetica butcher. Helvetica la croix austin air plant. Subway tile bespoke praxis dreamcatcher chia forage lyft humblebrag lumbersexual synth brunch la croix.",
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
