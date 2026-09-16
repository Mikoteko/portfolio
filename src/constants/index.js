export const profile = {
  name: "Emilie Pacheco",
  roles: ["AI engineer", "Data engineer"],
  location: "Strasbourg, Grand Est, France",
  bio: "Ingénieure IA & Data chez ARTE. Je travaille sur des pipelines de données, de l'IA générative, des graphes de connaissances et l'évaluation des systèmes d'IA, avec un intérêt croissant pour l'impact environnemental des systèmes que je contribue à construire.",
};

export const education = [
  {
    school: "ESIEA — École d'ingénieur·e·s d'un numérique utile",
    degree: "Diplôme d'ingénieur, Informatique",
    date: "2022 - 2024",
  },
  {
    school: "Cnam",
    degree: "Licence en alternance, Informatique générale",
    date: "2020 - 2021",
  },
  {
    school: "IUT Robert Schuman",
    degree: "DUT, Informatique",
    date: "2018 - 2020",
  },
];

export const contact = {
  email: "emilie.pacheco@orange.fr",
  github: "https://github.com/Mikoteko",
  linkedin: "https://www.linkedin.com/in/emilie-pacheco/",
};

export const technologies = [
  "HTML 5",
  "CSS 3",
  "JavaScript",
  "Node JS",
  "Java",
  "Python",
  "Git",
  "Docker",
  "MongoDB",
  "Hadoop",
  "LangChain",
  "Kestra",
  "Memgraph",
  "FalkorDB",
];

export const experiences = [
  {
    title: "AI Engineer",
    company_name: "ARTE",
    date: "Septembre 2025 - Présent",
    points: [
      "Data engineering : gestion des données dans l'entrepôt (amélioration de la qualité, complétude des données manquantes), génération de métadonnées par IA générative (texte ou vidéo vers texte).",
      "Gestion et surveillance des pipelines d'ingestion Kestra, création et maintien d'une taxonomie pour les métadonnées.",
      "Création et maintien d'une base de connaissances, explorations avec Memgraph et FalkorDB.",
      "AI engineering : aide à la création et à la maintenance de SIA, context engineering, évaluation de nos systèmes d'IA.",
      "Travail sur une application de recherche multimodale de contenu et sur la détection de sujets sensibles dans des vidéos, avec une plateforme de feedback sur les vidéos flaggées.",
      "Analyse de l'impact environnemental de nos projets : récupération des données nécessaires et mise en place d'outils pour la collecte des données.",
    ],
  },
  {
    title: "AI Software Engineer",
    company_name: "Altays",
    date: "Septembre 2024 - Décembre 2024",
    points: [
      "Création de 2 nouvelles fonctionnalités d'IA.",
      "Maintien et amélioration du SIA existant et de ses fonctionnalités.",
      "Formation d'un étudiant en alternance et travail de passation de connaissances.",
    ],
  },
  {
    title: "Stage en IA",
    company_name: "Altays",
    date: "Février 2024 - Août 2024",
    points: [
      "Création d'un Système d'IA (API REST en Python) en utilisant LangChain, LangSmith, OpenAI, Mistral AI, Groq...",
      "Création d'une fonctionnalité d'IA intégrée dans le SIRH d'Altays.",
      "Mise en place d'un environnement DevSecOps en utilisant Docker, des pipelines Gitlab et Poetry pour la gestion des packages Python.",
      "Gestion de projet (organisation de réunions, création de roadmaps, organisation de talks sur l'IA...)",
      "Travail de R&D important en amont pour déterminer la meilleure solution à mettre en place",
      "Documentation du SIA",
      "Suivi de l'AI Act et adaptation du SIA en conséquence.",
    ],
  },
  {
    title: "Apprentissage en traitement des données",
    company_name: "Data Players",
    date: "Septembre 2022 - Février 2024",
    points: [
      "Travail de traitement de données grâce au Bus Sémantique, un ETL/ESB open source : création de flux de traitement, amélioration de l'outil, résolution de bugs et création de composants (lecture/récupération/suppression de données depuis des buckets InfluxDB par exemple).",
      "Travail sur le prototype du Data Food Consortium (DFC), axé sur le partage de catalogues produits entre plateformes du milieu de l'alimentation et la mutualisation de flux logistiques.",
      "Création de graphiques pour suivre en temps réel la production d'électricité de panneaux solaires, en utilisant le Bus Sémantique, Grafana et InfluxDB.",
      "Technologies utilisées : Express, RiotJS, NodeJS, Web Components, MongoDB, InfluxDB, Docker.",
    ],
  },
  {
    title: "Stage en data",
    company_name: "Data Players",
    date: "Juin 2022 - Juillet 2022",
    points: [
      "Travail sur le Transiscope (carte d'agrégation de données liées à la transition écologique et sociale) pour l'Assemblée Virtuelle.",
      "Contact d'associations et de bénévoles disposant de données cartographiques, nettoyage des données et ajout sur une carte GoGoCarto.",
      "Utilisation de Grappe.io (Bus Sémantique) et N8N pour le traitement des données, développement de micro-composants pour le Bus Sémantique.",
    ],
  },
  {
    title: "Service civique — programme 100% Transition",
    company_name: "Osons Ici et Maintenant",
    date: "Octobre 2021 - Avril 2022",
    points: [
      "Service civique organisé dans le cadre du programme 100% Transition (INSUP / Osons Ici et Maintenant).",
      "Travail dans un tiers-lieu / espace de coworking : aide à la gestion du quotidien, organisation d'évènements, travail sur le site web.",
      "Travail dans une recyclerie : aide au tri et au rangement des dons, encaissement des clients, co-animation d'ateliers.",
    ],
  },
  {
    title: "Alternance en développement web",
    company_name: "Cirkwi",
    date: "Février 2021 - Juin 2021",
    points: [
      "Développement du site de l'entreprise en PHP, utilisation du framework Symfony, de Git, JS, CSS.",
      "Développement de nouvelles fonctionnalités et résolution de tickets.",
    ],
  },
  {
    title: "Alternance en data",
    company_name: "Talent Business Solutions",
    date: "Juillet 2020 - Janvier 2021",
    points: [
      "Travail de recherche et développement sous Azure.",
      "Modification de cubes de données, création et modification de rapports sous Power BI.",
    ],
  },
  {
    title: "Stage en IOT",
    company_name: "ENGIE Cofely Luxembourg",
    date: "Avril 2020 - Juin 2020",
    points: [
      "Modélisation des systèmes de chauffage et de ventilation d'un bâtiment industriel sous Niagara 4 avec un JACE 8000.",
    ],
  },
];

export const projects = [
  {
    name: "Le Bus Sémantique",
    description:
      "Un outil open source permettant d'intéropérer des données hétérogènes techniquement et sémantiquement, facilement. (Un N8N ou Zapier open source !)",
    tags: ["nodeJS", "javascript", "riotJS", "Docker", "MongoDB", "scripts bash"],
    source_code_link: "https://github.com/assemblee-virtuelle/Semantic-Bus",
  },
  {
    name: "Documentation du Bus Sémantique",
    description:
      "Mise en place d'une documentation pour le Bus Sémantique en utilisant Docusaurus et une pipeline CI/CD permettant de déployer automatiquement le site dès qu'une modification est réalisée. Des documents sont importés depuis un autre dépôt Github.",
    tags: ["Docusaurus", "Docker"],
    source_code_link: "https://github.com/assemblee-virtuelle/semantic-bus-documentation",
  },
  {
    name: "Pipeline de données Prats ENR",
    description:
      "Vous pouvez retrouver sur ce site, le monitoring des données provenant de panneaux solaires grâce à Grafana.",
    tags: ["InfluxDB", "Grafana", "Bus Sémantique"],
    source_code_link: "https://energiesdeprats.fr/",
  },
  {
    name: "Prototype du Data Food Consortium",
    description:
      "Le prototype du Data Food Consortium est l'implémentation d'un standard créé par l'association. Son objectif principal est d'aider des plateformes de distribution de produits alimentaires à partager leurs catalogues de produits entre elles.",
    tags: ["HTML", "CSS", "Javascript", "NodeJS", "Semapps", "Apache Jena Fuseki"],
    source_code_link: "https://github.com/datafoodconsortium/prototype",
  },
  {
    name: "Barre de chargement de levée de fonds",
    description:
      "Barre de chargement pour une levée de fonds se branchant sur une API, utilise Github Page et est intégrée sur Wordpress dans une iframe.",
    tags: ["HTML", "CSS", "Javascript"],
    source_code_link: "https://github.com/data-players/progress-bar-fundraise",
  },
  {
    name: "Dashboard de contrôle du Transiscope",
    description:
      "Un outil créé pour l'association Transiscope, permettant de vérifier en temps réel si différentes sources de données ont des problèmes ou non.",
    tags: ["HTML", "CSS", "Javascript"],
    source_code_link: "https://gitlab.com/transiscope/dashboard-transiscope",
  },
  {
    name: "SIA Altays",
    description:
      "Un SIA permettant de générer du texte, synthétiser du contenu textuel et synthétiser des profils de candidats à des offres d'emploi. Code sur le dépôt Gitlab privé de l'entreprise.",
    tags: ["LangChain", "LangSmith", "Python", "Poetry", "Docker", "Gitlab", "SQLite", "SQLAlchemy", "Bash"],
    source_code_link: "",
  },
];
