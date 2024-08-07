import { MovieTypes } from "./movies-types";

const movies: MovieTypes[] = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    description:
      "Debbie Ocean a pris cinq ans, huit mois, 12 jours pour organiser le plus gros vol de sa vie. Elle sait ce que ça va prendre: une équipe des meilleures personnes dans le domaine, en commençant par sa partenaire Lou Miller.",
    releaseDate: "05/06/2018",
    duration: "1h 50min",
    liked: false,
    disliked: false,
    likes: 4,
    dislikes: 1,
    imageUrl:
      "https://www.cinematraque.com/wp-content/uploads/2018/06/22982384-25449853.jpg",
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    liked: false,
    description:
      "Katie Price, 17 ans, est une adolescente comme les autres, ou presque. Elle ne peut en aucun cas être exposée à la lumière du jour, sous peine d'en mourir. La journée, elle compose et joue de la guitare, et observe le monde depuis sa chambre, notamment Charlie Reed, son voisin. À la nuit tombée, ses rêves prennent vie. Elle sort chanter dans la gare près de chez elle. Un soir, elle se retrouve face à Charlie. Lui est instantanément sous le charme et se met en tête de la revoir.",
    releaseDate: "13/06/2018",
    duration: "1h 31min",
    disliked: false,
    likes: 2,
    dislikes: 0,
    imageUrl:
      "https://resizing.flixster.com/lOupmVFYQfRSpVYQiaGLIugV8tA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13401697_v_h9_aa.jpg",
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    liked: false,
    description:
      "Le gourou de la télécommunication, Winston Deavor, recrute Elastigirl pour combattre des criminels et faire en sorte que le publique retombe en amour avec les superhéros. M. Incroyable, lui, reste à la maison et fait face à son plus grand défi: s'occuper des problèmes de ses trois enfants.",
    releaseDate: "04/07/2018",
    duration: "1h 58min",
    disliked: false,
    likes: 3,
    dislikes: 1,
    imageUrl:
      "https://actu.6play.fr/wp-content/uploads/2023/12/les-indestructibles-2-film-M6.jpg",
  },
  {
    id: "4",
    title: "Sans un bruit",
    liked: false,
    disliked: false,
    category: "Thriller",
    likes: 6,
    description:
      "Dans le nord de l'État de New York, un couple et ses deux enfants doivent rester silencieux dans leur ferme isolée pour éviter des créatures mystérieuses qui utilisent le son pour chasser leurs proies.",
    releaseDate: "06/04/2018",
    duration: "1h 30min",
    dislikes: 6,
    imageUrl:
      "https://www.close-upmag.com/wp-content/uploads/2018/06/Sans-un-Bruit-affiche-film.jpg",
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drama",
    likes: 16,
    dislikes: 2,
    description:
      "En 1985, le boxeur russe Ivan Drago a tué l'ancien champion américain Apollo Creed lors d'un match tragique qui a abasourdi le monde. Allant à l'encontre des conseils de son entraîneur Rocky Balboa, le fils d'Apollo, Adonis Johnson accepte un défi du fils de Drago -- un boxeur dangereux.",
    releaseDate: "21/11/2018",
    duration: "2h 10min",
    liked: false,
    disliked: false,
    imageUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/e77a71b6027d69f1942d5c65a761c13b38c52ce1be99218c9babea09a5974f5e.jpg",
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    liked: false,
    description:
      "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent. Dans un restaurant, un couple de jeunes braqueurs, Pumpkin et Yolanda, discutent des risques que comporte leur activité. Deux truands, Jules Winnfield et son ami Vincent Vega, qui revient d'Amsterdam, ont pour mission de récupérer une mallette au contenu mystérieux et de la rapporter à Marsellus Wallace.",
    releaseDate: "26/10/1994",
    duration: "2h 34min",
    disliked: false,
    likes: 11,
    dislikes: 3,
    imageUrl:
      "https://w0.peakpx.com/wallpaper/10/269/HD-wallpaper-movie-pulp-fiction-uma-thurman.jpg",
  },
  {
    id: "7",
    title: "Seven",
    category: "Thriller",
    liked: false,
    disliked: false,
    description:
      "Peu avant sa retraite, l'inspecteur William Somerset, un flic désabusé, est chargé de faire équipe avec un jeune idéaliste, David Mills. Ils enquêtent tout d'abord sur le meurtre d'un homme obèse que son assassin a obligé à manger jusqu'à ce que mort s'ensuive. L'enquête vient à peine de commencer qu'un deuxième crime, tout aussi macabre, est commis, puis un troisième. Petit à petit, les deux policiers font le lien entre tous ces assassinats.",
    releaseDate: "31/01/1996",
    duration: "2h 10min",
    likes: 2,
    dislikes: 1,
    imageUrl:
      "https://proxymedia.woopic.com/api/v1/images/331%2FSEVENXXXXXXW0201235_BAN1_2424_NEWTV_HD.jpg",
  },
  {
    id: "8",
    title: "Inception",
    category: "Thriller",
    description:
      "Dom Cobb est un voleur expérimenté dans l'art périlleux de l'extraction : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant.",
    releaseDate: "21/07/2010",
    duration: "2h 28min",
    likes: 2,
    liked: false,
    disliked: false,
    dislikes: 1,
    imageUrl:
      "https://static.hitek.fr/img/actualite/2015/06/fb_9389e514fca06a37ba2cba3493be1fbc-large.jpeg",
  },
  {
    id: "9",
    title: "Gone Girl",
    liked: false,
    description:
      "Le matin de leur cinquième anniversaire de mariage, Amy, la femme de Nick Dunne, disparaît de leur maison cossue de banlieue de St-Louis. La police vient rapidement faire enquête et trouve plusieurs indices suspects qui pointent vers un crime violent.",
    releaseDate: "08/10/2014",
    duration: "2h 29min",
    disliked: false,
    category: "Thriller",
    likes: 4,
    dislikes: 1,
    imageUrl:
      "https://keithandthemovies.com/wp-content/uploads/2014/11/gone-girl-poster.jpg",
  },
  {
    id: "10",
    title: "Batman The Dark Knight",
    liked: false,
    disliked: false,
    description:
      "Batman est plus que jamais déterminé à éradiquer le crime organisé qui sème la terreur en ville. Epaulé par le lieutenant Jim Gordon et par le procureur de Gotham City, Harvey Dent, Batman voit son champ d'action s'élargir. La collaboration des trois hommes s'avère très efficace et ne tarde pas à porter ses fruits jusqu'à ce qu'un criminel redoutable vienne plonger la ville de Gotham City dans le chaos.",
    releaseDate: "13/08/2008",
    duration: "2h 32min",
    category: "Action",
    likes: 8,
    dislikes: 2,
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/jbfe7ww0-1/poster/g/k/c/medium-ashd-wall-poster-batman-the-dark-knight-bat-signal-original-imaet2nugm94hvyj.jpeg?q=20&crop=false",
  },
  {
    id: "11",
    title: "Fight Club",
    category: "Drama",
    likes: 6,
    description:
      "Pourvu d'une situation des plus enviable, un jeune homme à bout de nerfs retrouve un équilibre relatif en compagnie de Marla, rencontrée dans un groupe d'entraide. Il fait également la connaissance de Tyler Durden, personnage enthousiaste et charismatique.",
    releaseDate: "10/11/1999",
    duration: "2h 19min",
    dislikes: 0,
    liked: false,
    disliked: false,
    imageUrl:
      "https://img.lemde.fr/2017/07/20/0/46.5/456/304/664/0/75/0/72d8bf7_30301-jzg2qw.57co9a4i.png",
  },
  {
    id: "12",
    title: "Forrest Gump",
    category: "Drama",
    liked: false,
    description:
      "Sur un banc, à Savannah, en Géorgie, Forrest Gump attend le bus. Comme celui-ci tarde à venir, le jeune homme raconte sa vie à ses compagnons d'ennui. A priori, ses capacités intellectuelles plutôt limitées ne le destinaient pas à de grandes choses. Qu'importe.",
    releaseDate: "07/09/1994",
    duration: "2h 22min",
    disliked: false,
    likes: 5,
    dislikes: 0,
    imageUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/28ad5a615d61071e9d1aebbf684c89fcc3a8c5b3528d8ba778bb13198764d840.jpg",
  },
  {
    id: "13",
    title: "Matrix",
    category: "Science Fiction",
    likes: 4,
    liked: false,
    description:
      "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. À cheval entre deux mondes, Neo est assailli par d'étranges songes et des messages cryptés provenant d'un certain Morpheus. Celui-ci l'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu'est-ce que la Matrice ?",
    releaseDate: "23/06/1999",
    duration: "2h 16min",
    disliked: false,
    dislikes: 2,
    imageUrl:
      "https://tgtrs.wordpress.com/wp-content/uploads/2021/09/unnamed-1.jpg",
  },
  {
    id: "14",
    title: "Le Parrain",
    category: "Crime",
    likes: 3,
    liked: false,
    description:
      "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain' de cette famille, marie sa fille à un bookmaker. Sollozzo, `parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe.",
    releaseDate: "15/03/1972",
    duration: "2h 55min",
    disliked: false,
    dislikes: 1,
    imageUrl:
      "https://popcult.blog/wp-content/uploads/2022/03/the-godfather-banner.png",
  },
  {
    id: "15",
    title: "Les Évadés",
    category: "Drama",
    liked: false,
    description:
      "En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à `Shawshank', le pénitencier le plus sévère de l'Etat du Maine. Il y fait la rencontre de Red, un homme désabusé, détenu depuis 20 ans. Commence alors une grande histoire d'amitié entre les deux hommes.",
    releaseDate: "22/09/1995",
    duration: "2h 22min",
    disliked: false,
    likes: 7,
    dislikes: 0,
    imageUrl:
      "https://facts.net/wp-content/uploads/2023/06/46-facts-about-the-movie-the-shawshank-redemption-1687241293.jpeg",
  },
  {
    id: "16",
    title: "Le Roi Lion Film",
    category: "Animation",
    likes: 5,
    description:
      "Au fond de la savane africaine, tous les animaux célèbrent la naissance de Simba, leur futur roi. Les mois passent. Simba idolâtre son père, le roi Mufasa, qui prend à cœur de lui faire comprendre les enjeux de sa royale destinée. Mais tout le monde ne semble pas de cet avis.",
    releaseDate: "19/07/2019",
    duration: "1h 58min",
    liked: false,
    disliked: false,
    dislikes: 1,
    imageUrl:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6E3379DBFDA41CF305BFD7FE6D14FDB5F901F0CDC9B27C66D7E6FBEA2864B4F2/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
  },
  {
    id: "17",
    title: "Gladiator",
    category: "Action",
    likes: 4,
    description:
      "Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de Marc Aurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d'esclaves, il devient gladiateur et prépare sa vengeance.",
    releaseDate: "03/05/2000",
    duration: "2h 35min",
    liked: false,
    disliked: false,
    dislikes: 0,
    imageUrl: "https://i.ebayimg.com/images/g/OLAAAOSw-htbPPgw/s-l1200.webp",
  },
  {
    id: "18",
    title: "Titanic",
    category: "Romance",
    liked: false,
    disliked: false,
    likes: 9,
    description:
      "En 1997, l'épave du Titanic est l'objet d'une exploration fiévreuse, menée par des chercheurs de trésor en quête d'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l'une des rescapées du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912.",
    releaseDate: "07/01/1998",
    duration: "3h 14min",
    dislikes: 2,
    imageUrl:
      "https://www.justologist.com/content/images/2023/08/p20056_v_h10_ab.jpg",
  },
  {
    id: "19",
    title: "Top Gun Maverick",
    category: "Action",
    liked: false,
    disliked: false,
    likes: 6,
    description:
      "Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine, Pete Maverick Mitchell est à sa place, repoussant les limites en tant que pilote d'essai courageux et esquivant l'avancement de grade qui le mettrait à la terre. Entraînant de jeunes diplômés pour une mission spéciale, Maverick doit affronter les fantômes de son passé et ses peurs les plus profondes, aboutissant à une mission qui exige le sacrifice ultime de ceux qui choisissent de la piloter.",
    releaseDate: "19/05/2022",
    duration: "2h 28min",
    dislikes: 0,
    imageUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/5099b0bb5c1a20bc2f43fe3a4934c94412c842a595deb5220d70a7ee959aae29._UR1920,1080_.jpg",
  },
];

export const movies$: Promise<MovieTypes[]> = new Promise((resolve) =>
  setTimeout(() => resolve(movies), 100)
);
