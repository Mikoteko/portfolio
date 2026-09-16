export const profile = {
  name: "Emilie Pacheco",
  roles: ["Software engineer", "Data engineer", "AI engineer"],
  bio: "Ingénieure logicielle/data passionnée par l'IA, l'interopérabilité de données et les architectures ouvertes.",
};

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
];

export const experiences = [
  {
    title: "AI software engineer en CDD",
    company_name: "Altays",
    date: "Septembre 2024 - Décembre 2024",
    points: [
      "Création de 2 nouvelles fonctionnalités d'IA.",
      "Maintien et amélioration du SIA existant et de ses fonctionnalités.",
      "Formation d'un étudiant en alternance et travail de passation de connaissances.",
    ],
  },
  {
    title: "AI software engineer en stage",
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
    title: "Data engineer en alternance",
    company_name: "Data Players",
    date: "Août 2022 ->",
    points: [
      "Interopérabilité de données : création de flux de traitement de données en utilisant le Bus Sémantique.",
      "Création de composants, résolution de bugs pour le Bus Sémantique (JS, NodeJS, RiotJS).",
      "Aide à la mise en place d'une pipeline de traitement de données provenant de panneaux solaires : réception de fichiers FTP, traitement automatisé des fichiers grâce à un webhook, insertion en base InfluxDB, calculs sur les données et insertion dans une deuxième base InfluxDB.",
      "Mise en place d'une documentation pour le Bus Sémantique en utilisant Docusaurus avec import automatique d'un Wiki Github.",
      "Pipelines CI/CD Github/Gitlab avec Github Page.",
      "Création d'un serveur InfluxDB et configuration (en utilisant Docker).",
      "Création d'une barre de chargement pour une levée de fonds afin d'être intégrée dans une iframe sur Wordpress.",
      "Installation d'un serveur Wordpress.",
      "Création de documentation technique.",
    ],
  },
  {
    title: "Web Developper en stage",
    company_name: "Data Food Consortium pour Data Players",
    date: "Avril 2023 - Mai 2023",
    points: [
      "Amélioration du prototype graphiquement à partir d'une maquette Figma.",
      "Résolution de bugs frontend et backend sur le prototype.",
      "Modification de l'ontologie en fonction des erreurs rencontrées.",
      "Préparation de contenu pour un webinaire.",
    ],
  },
  {
    title: "Data engineer en stage",
    company_name: "Transiscope pour Data Players",
    date: "Mai 2022 - Juin 2022",
    points: [
      "Créer des flux de traitement de données pour les sources de données du projet (carte OSM, carte GoGoCarto, api JSON, fichiers statiques, Google Spreadsheets...)",
      "Régler les problèmes présents sur les différents flux de traitement des données et uniformiser les traitements.",
      "Dashboard de vérification de l'état des sources de données mis en place, vérification de la taille et du type des réponses.",
    ],
  },
  {
    title: "Service civique dans la transition",
    company_name: "La Boucle, La Zone à Partager",
    date: "Feb 2020 - Jul 2021",
    points: [
      "Aide à la mise en place d'un site web et à la création du café associatif d'un espace de coworking.",
      "Vente, tri et animation d'ateliers dans une recyclerie.",
    ],
  },
  {
    title: "Web Developper en alternance",
    company_name: "Cirkwi",
    date: "Mars 2021 - Juin 2021",
    points: [
      "Résolution de bugs et développement de fonctionnalités pour un générateur de site de l'entreprise.",
      "Générateur de site en PHP, utilisation du framework Symfony, de Git, de Javascript, CSS, HTML...",
    ],
  },
  {
    title: "Data analyst en alternance.",
    company_name: "Talent Business Solutions",
    date: "Juillet 2020 - Février 2021",
    points: [
      "Conception de rapports Power BI pour des clients de l'entreprise.",
      "Résolution de problèmes d'encodage dans des Azure Functions.",
      "Recherche d'une solution pour transférer automatiquement des données entrées dans une table A vers une table B sous PowerShell dans Azure.",
      "Modification de cubes de données OLAP.",
      "Création d'une formation sur Power BI.",
    ],
  },
  {
    title: "Stagiaire en IOT",
    company_name: "Engie Cofely Luxembourg",
    date: "Mai 2020 - Juin 2020",
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
