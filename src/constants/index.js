export const profile = {
  name: "Emilie Pacheco",
  roles: ["AI engineer", "Data engineer"],
  location: "Strasbourg, Grand Est, France",
  bio: "Ingénieure IA & Data chez ARTE. Je construis des systèmes d'IA, des pipelines de données et des knowledge graphs : entrepôt de données et pipelines d'ingestion, génération de métadonnées par IA générative, recherche multimodale, transcription et traduction automatiques de sous-titres, évaluation des systèmes d'IA, avec un intérêt croissant pour l'impact environnemental des systèmes que je contribue à construire.",
};

export const education = [
  {
    school: "ESIEA — École d'ingénieur·e·s d'un numérique utile (Laval)",
    degree: "Diplôme d'ingénieur, Informatique",
    date: "2022 - 2024",
  },
  {
    school: "Cnam (Strasbourg)",
    degree: "Licence en alternance, Informatique générale",
    date: "2020 - 2021",
  },
  {
    school: "IUT Robert Schuman (Strasbourg)",
    degree: "DUT, Informatique",
    date: "2018 - 2020",
  },
];

export const languages = [
  { name: "Français", level: "langue maternelle" },
  { name: "Anglais", level: "C1" },
  { name: "Allemand", level: "A2" },
];

export const interests = [
  "Graphisme (illustration, gravure)",
  "Céramique",
  "Bénévolat",
];

export const contact = {
  email: "emilie.pacheco@orange.fr",
  github: "https://github.com/Mikoteko",
  linkedin: "https://www.linkedin.com/in/emilie-pacheco/",
};

export const technologies = [
  // Langages
  "Python",
  "TypeScript / JavaScript",
  "SQL",
  "Bash",
  // IA / LLM
  "LangChain / LangSmith",
  "Langfuse",
  "LiteLLM",
  "Gemini / Vertex AI",
  "OpenAI / Mistral AI",
  "spaCy",
  "Prompt & context engineering",
  "Évaluation de systèmes d'IA (LLM-as-judge)",
  "Agentic coding (Claude Code, Copilot)",
  // Data
  "PostgreSQL",
  "MongoDB",
  "InfluxDB",
  "OpenSearch / Typesense",
  "Memgraph / FalkorDB",
  "Kestra",
  "n8n",
  "Grafana",
  // Backend / Frontend
  "FastAPI",
  "Node.js",
  "React / Next.js",
  // Ops
  "Docker",
  "Kubernetes (Scaleway)",
  "GitHub Actions / GitLab CI",
  "Git",
  "uv / Poetry",
];

export const experiences = [
  {
    title: "AI & Data Engineer",
    company_name: "ARTE",
    date: "Septembre 2025 - Présent",
    points: [
      "Data engineering : gestion de l'entrepôt de données Postgres (amélioration de la qualité et de la fiabilité, complétion des données manquantes via des API externes, dashboard de monitoring des données).",
      "Génération de métadonnées par IA générative (texte ou vidéo vers texte) avec Gemini via LiteLLM, création et gestion d'une taxonomie versionnée pour ces métadonnées, prompts gérés dans Langfuse, évaluation LLM-as-judge des enrichissements.",
      "Gestion et surveillance des pipelines d'ingestion Kestra (Mongo → Postgres → OpenSearch / Typesense), migrations de schéma, alerting Slack.",
      "Création et maintien d'une base de connaissances : pipeline de reconnaissance d'entités nommées (spaCy + LLM + Wikidata) avec arbitrage multi-sources et revue humaine, explorations avec Memgraph et FalkorDB.",
      "AI engineering : contribution à une application de recherche multimodale de contenu et à une application de transcription et de sous-titrage automatiques de programmes en 25 langues (pipeline agentique de traduction, évaluation multi-juges, migration de l'orchestration vers TaskIQ).",
      "Context engineering et évaluation de nos systèmes d'IA : harnais d'évaluation de la recherche, règles métier de suggestions, dashboards de suivi des runs.",
      "Détection automatique de sujets sensibles dans les programmes et plateforme de feedback pour les vidéos signalées (human-in-the-loop).",
      "Analyse de l'impact environnemental de nos projets : collecte des données nécessaires et mise en place d'outils de collecte automatisée, en partenariat avec Hubblo.",
    ],
  },
  {
    title: "AI Engineer (stage puis CDD)",
    company_name: "Altays",
    date: "Février 2024 - Décembre 2024",
    points: [
      "AI engineering : création d'un système d'IA (API REST en Python) avec LangChain, LangSmith, OpenAI, Mistral AI et Groq.",
      "Création de 3 fonctionnalités d'IA, dont une intégrée au SIRH (aide à la rédaction d'offres d'emploi, analyse de CV...).",
      "Data engineering : mise en place d'un environnement DevSecOps avec Docker, des pipelines GitLab et Poetry pour la gestion des packages Python.",
      "Gestion de projet : travail de R&D en amont pour déterminer la meilleure solution à mettre en place, organisation de réunions, création de roadmaps, organisation de talks sur l'IA, documentation du système d'IA.",
      "Suivi de l'AI Act européen et adaptation du système d'IA en conséquence.",
      "Formation d'un étudiant en alternance et passation de connaissances.",
    ],
  },
  {
    title: "Data Engineer (alternance)",
    company_name: "Data Players",
    date: "Juin 2022 - Février 2024",
    points: [
      "Data engineering : traitement de données avec le Bus Sémantique, un ETL / ESB open source : création et maintien de flux de données. Express, RiotJS, NodeJS, MongoDB.",
      "Création de dashboards temps réel pour suivre la production d'électricité de panneaux solaires avec le Bus Sémantique, Grafana et InfluxDB.",
      "Software engineering : maintien et amélioration du Bus Sémantique, création de composants (lecture / récupération / suppression de données dans des buckets InfluxDB par exemple).",
      "Développement sur le prototype du Data Food Consortium : partage de catalogues produits entre plateformes du milieu de l'alimentation.",
      "Stage initial : travail sur le Transiscope (carte d'agrégation de données liées à la transition écologique et sociale), nettoyage de données cartographiques et ajout sur une carte GoGoCarto, traitement de données avec Grappe.io et N8N.",
    ],
  },
  {
    title: "Service civique — programme 100% Transition",
    company_name: "Osons Ici et Maintenant",
    date: "Octobre 2021 - Avril 2022",
    points: [
      "Travail dans un tiers-lieu / espace de coworking : aide à la gestion du quotidien, organisation d'évènements, travail sur le site web.",
      "Travail dans une recyclerie : aide au tri et au rangement des dons, encaissement des clients, co-animation d'ateliers.",
    ],
  },
  {
    title: "Alternance en développement web",
    company_name: "Cirkwi",
    date: "Février 2021 - Juin 2021",
    points: [
      "Développement du site de l'entreprise en PHP (Symfony), Git, JS, CSS : nouvelles fonctionnalités et résolution de tickets.",
    ],
  },
  {
    title: "Alternance en data",
    company_name: "Talent Business Solutions",
    date: "Juillet 2020 - Janvier 2021",
    points: [
      "Recherche et développement sous Azure, modification de cubes de données, création et modification de rapports Power BI.",
    ],
  },
  {
    title: "Stage en IoT",
    company_name: "ENGIE Cofely Luxembourg",
    date: "Avril 2020 - Juin 2020",
    points: [
      "Modélisation des systèmes de chauffage et de ventilation d'un bâtiment industriel sous Niagara 4 avec un JACE 8000.",
    ],
  },
];

const PRIVATE_REPO = "Code sur les dépôts privés de l'organisation ArteGEIE.";

export const projects = [
  {
    name: "ARTE Translate — transcription & traduction de sous-titres par IA",
    description:
      "Plateforme interne de génération, traduction, relecture et évaluation qualité de sous-titres (25 langues). Backend FastAPI + PostgreSQL avec un pipeline agentique de traduction, mémoire de traduction, évaluation multi-juges (COMET) et prompts versionnés dans Langfuse ; frontend React. Contributions : migration de l'orchestration (Temporal → TaskIQ), intégration Langfuse, normalisation des retours d'évaluateurs, tests d'API Bruno en CI, glossaire d'entités nommées. " +
      PRIVATE_REPO,
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Langfuse", "LLM", "Docker"],
    source_code_link: "",
  },
  {
    name: "ai-data — entrepôt & pipelines de données",
    description:
      "Ingestion et enrichissement du catalogue ARTE : pipelines Kestra (Mongo → Postgres → OpenSearch / Typesense), génération de métadonnées par Gemini, taxonomie versionnée, embeddings, évaluation LLM-as-judge, détection de sujets sensibles avec outillage éditorial, base de connaissances d'entités nommées (spaCy + LLM + Wikidata, arbitrage et revue humaine), dashboard de qualité des données. " +
      PRIVATE_REPO,
    tags: ["Python", "Kestra", "PostgreSQL", "MongoDB", "OpenSearch", "Gemini", "LiteLLM", "Langfuse", "spaCy", "Docker"],
    source_code_link: "",
  },
  {
    name: "ai-platform — applications France 2030 (IRIS, SMASH, dashboard, éditeur de métadonnées)",
    description:
      "Applications métier reposant sur l'entrepôt ai-data : recherche catalogue, exploration cartographique, dashboards de données et éditeur de métadonnées. Contributions : pages de couverture des données, badge de sensibilité éditoriale, page de revue des entités nommées, page de suivi des expérimentations NER, déploiement CI automatisé sur Kubernetes. " +
      PRIVATE_REPO,
    tags: ["TypeScript", "Next.js", "React", "Hono", "PostgreSQL", "Kubernetes"],
    source_code_link: "",
  },
  {
    name: "IRIS — assistant de recherche catalogue",
    description:
      "Assistant de recherche authentifié pour le catalogue ARTE : recherche structurée, outils SQL en lecture seule, workflows d'évaluation, rendu riche des résultats, génération et embeddings via Vertex AI. " +
      PRIVATE_REPO,
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Vertex AI"],
    source_code_link: "",
  },
  {
    name: "AI Search Platform — moteur de recherche IA mutualisé",
    description:
      "Plateforme de recherche IA partagée entre les produits ARTE, remplaçant les recherches par mots-clés en silo : API de recherche FastAPI, playground interne et framework d'évaluation. Contributions : règles métier de suggestions avec observabilité (rule trace), intégration des règles dans le harnais d'évaluation, dashboards de runs. " +
      PRIVATE_REPO,
    tags: ["Python", "FastAPI", "Next.js", "Typesense", "Redis", "Langfuse"],
    source_code_link: "",
  },
  {
    name: "ai-graph — knowledge graph ARTE",
    description:
      "Graphe de connaissances pour la compréhension d'intention et la recherche sémantique (GraphRAG) : ontologie et taxonomie (ADR), pipeline NER (spaCy multi-langues → raffinement LLM → Wikidata) alimentant Memgraph, stack de prototypage (Memgraph, Postgres, Redis, Jupyter). " +
      PRIVATE_REPO,
    tags: ["Python", "Memgraph", "Cypher", "spaCy", "LLM", "Docker"],
    source_code_link: "",
  },
  {
    name: "Ranking d'illustrabilité de frames vidéo",
    description:
      "Expérimentations pour proposer aux éditeurs une shortlist de frames par plan : extraction, segmentation en plans (PySceneDetect), métriques techniques, score esthétique appris (CLIP-aesthetic), dédup par embeddings, pipeline visages, évaluation LLM et UI d'évaluation, traçage Langfuse, serveur GPU dédié. " +
      PRIVATE_REPO,
    tags: ["Python", "CLIP", "PySceneDetect", "Langfuse", "Docker", "GPU"],
    source_code_link: "",
  },
  {
    name: "ARTE Trivia Quest — jeu de quiz d'équipe (hackdays)",
    description:
      "Quiz d'équipe façon Trivial Pursuit pour ~25 personnes : les équipes répondent sur leurs téléphones, l'écran animateur est projeté. API + WebSocket + front dans un seul conteneur, pipeline de génération de questions, mascottes et animations de combat. " +
      PRIVATE_REPO,
    tags: ["Python", "FastAPI", "WebSocket", "React", "Docker"],
    source_code_link: "",
  },
  {
    name: "SIA Altays",
    description:
      "Un système d'IA permettant de générer du texte, synthétiser du contenu textuel et synthétiser des profils de candidats à des offres d'emploi. Code sur le dépôt GitLab privé de l'entreprise.",
    tags: ["LangChain", "LangSmith", "Python", "Poetry", "Docker", "GitLab", "SQLite", "SQLAlchemy", "Bash"],
    source_code_link: "",
  },
  {
    name: "Le Bus Sémantique",
    description:
      "Un outil open source permettant d'interopérer des données hétérogènes techniquement et sémantiquement, facilement. (Un N8N ou Zapier open source !)",
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
];
