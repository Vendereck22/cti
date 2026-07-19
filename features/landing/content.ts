import type { PublicLandingContent } from "./types";

export const landingContent = {
  seo: {
    title: "CTI RDC - Transfert d'argent simple et securise",
    description:
      "Simulez un transfert, consultez les frais indicatifs et trouvez une agence CTI proche de vous.",
  },
  header: {
    companyName: "CTI RDC",
    logoLabel: "CTI",
    logoDescription: "Transfert d'argent",
    mobileMenuLabel: "Ouvrir la navigation",
    navigation: [
      { label: "Accueil", href: "/" },
      { label: "A propos", href: "/a-propos" },
      { label: "Agences", href: "/agences" },
      { label: "Aide", href: "/aide" },
      { label: "Contact", href: "/contacts" },
    ],
    primaryCta: { label: "Simuler", href: "/#simulateur" },
    secondaryCta: { label: "Trouver une agence", href: "/#agences" },
  },
  hero: {
    eyebrow: "CTI RDC",
    title: "Envoyez et recevez de l'argent avec CTI, simplement et en confiance.",
    description:
      "Simulez votre transfert, estimez les frais et retrouvez l'agence CTI la plus proche avant de vous presenter au guichet.",
    primaryCta: { label: "Simuler un envoi", href: "/#simulateur" },
    secondaryCta: { label: "Trouver une agence", href: "/#agences" },
    metrics: [
      { value: "RDC + Belgique", label: "Points de service cibles" },
      { value: "Code unique", label: "Retrait securise" },
      { value: "AML/KYC", label: "Controle d'identite" },
    ],
    visual: {
      src: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=1400",
      alt: "Client au guichet lors d'un paiement par carte, image illustrative CTI",
      eyebrow: "Service en agence",
      title: "Un accompagnement humain au guichet.",
      description:
        "Chaque estimation prepare le passage en agence, ou les frais et les pieces sont confirmes avec le client.",
    },
  },
  estimator: {
    badge: "Estimation indicative",
    title: "Combien recevra le beneficiaire ?",
    description:
      "Choisissez un montant et une devise pour voir une estimation avant le passage en agence.",
    amountLabel: "Montant envoye",
    sourceCurrencyLabel: "Devise d'envoi",
    targetCurrencyLabel: "Devise de retrait",
    destinationLabel: "Destination",
    resultLabel: "Montant estime a retirer",
    feeLabel: "Frais indicatifs",
    rateLabel: "Taux indicatif",
    totalLabel: "Total a prevoir",
    submitLabel: "Simuler l'envoi",
    sameCurrencyLabel: "Meme devise",
    unavailableRateLabel: "Taux indicatif indisponible pour cette paire.",
    legalNote:
      "Cette simulation ne cree pas de transaction. Les frais et taux finaux sont confirmes en agence.",
    initialAmount: 100,
    initialSourceCurrency: "EUR",
    initialTargetCurrency: "CDF",
    initialDestinationId: "kinshasa-gombe",
    currencies: [
      { code: "EUR", label: "EUR - Euro" },
      { code: "USD", label: "USD - Dollar US" },
      { code: "CDF", label: "CDF - Franc congolais" },
    ],
    destinations: [
      {
        id: "kinshasa-gombe",
        label: "Kinshasa, Gombe",
        country: "RDC",
        city: "Kinshasa",
      },
      {
        id: "kinshasa-limete",
        label: "Kinshasa, Limete",
        country: "RDC",
        city: "Kinshasa",
      },
      {
        id: "bruxelles",
        label: "Bruxelles",
        country: "Belgique",
        city: "Bruxelles",
      },
    ],
    rates: [
      {
        sourceCurrency: "EUR",
        targetCurrency: "CDF",
        rate: 3120,
        fixedFee: 4,
        percentageFee: 0.02,
        updatedAtLabel: "Indicatif au guichet",
      },
      {
        sourceCurrency: "USD",
        targetCurrency: "CDF",
        rate: 2850,
        fixedFee: 5,
        percentageFee: 0.018,
        updatedAtLabel: "Indicatif au guichet",
      },
      {
        sourceCurrency: "EUR",
        targetCurrency: "USD",
        rate: 1.08,
        fixedFee: 4,
        percentageFee: 0.015,
        updatedAtLabel: "Indicatif au guichet",
      },
    ],
  },
  trust: [
    {
      title: "Agences physiques",
      description: "Un reseau de guichets pour envoyer, recevoir et verifier votre operation.",
      icon: "agency",
    },
    {
      title: "Retrait par code",
      description: "Chaque transfert est associe a un code unique et a une piece d'identite.",
      icon: "lock",
    },
    {
      title: "Controle AML/KYC",
      description: "Les operations sont accompagnees de controles de conformite.",
      icon: "shield",
    },
    {
      title: "Frais lisibles",
      description: "Une estimation claire avant confirmation finale au guichet.",
      icon: "money",
    },
  ],
  process: {
    eyebrow: "Comment ca marche",
    title: "Un parcours simple, encadre par l'agence.",
    description:
      "CTI accompagne le client de la simulation au retrait, avec des etapes faciles a comprendre.",
    visual: {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
      alt: "Documents financiers et calculatrice pour preparer une operation, image illustrative CTI",
      eyebrow: "Avant le guichet",
      title: "La simulation clarifie le montant avant la validation.",
      description:
        "Le client arrive avec une idee du montant, des frais et des informations a presenter.",
    },
    steps: [
      {
        step: "01",
        title: "Presentez-vous en agence",
        description:
          "Choisissez l'agence CTI la plus proche avec votre piece d'identite valide.",
      },
      {
        step: "02",
        title: "Donnez les informations",
        description:
          "Indiquez le beneficiaire, le montant et la devise, puis confirmez les frais.",
      },
      {
        step: "03",
        title: "Le beneficiaire retire",
        description:
          "Le retrait se fait avec le code unique et une piece d'identite.",
      },
    ],
  },
  services: {
    eyebrow: "Services CTI",
    title: "Les actions essentielles des le premier ecran.",
    description:
      "La page oriente rapidement vers les besoins les plus frequents des clients CTI.",
    actionLabel: "Continuer",
    cards: [
      {
        title: "Envoyer de l'argent",
        description: "Preparez votre passage en agence avec une estimation claire.",
        icon: "send",
        href: "/#simulateur",
      },
      {
        title: "Recevoir un transfert",
        description: "Retrouvez les informations utiles pour retirer avec votre code.",
        icon: "wallet",
        href: "/#faq",
      },
      {
        title: "Suivre un transfert",
        description: "Gardez le code unique comme repere pour demander l'etat d'une operation.",
        icon: "search",
        href: "/aide",
      },
      {
        title: "Consulter les taux",
        description: "Comprenez les taux indicatifs et les frais avant validation.",
        icon: "money",
        href: "/#taux",
      },
      {
        title: "Localiser une agence",
        description: "Filtrez les agences CTI par ville ou par pays.",
        icon: "map",
        href: "/#agences",
      },
    ],
  },
  whyChoose: {
    eyebrow: "Pourquoi nous choisir",
    title: "Une solution de transfert pensée pour la confiance et la proximité.",
    description:
      "CTI combine un accompagnement humain, des agences physiques et des contrôles clairs pour rendre chaque opération plus lisible avant le passage au guichet.",
    points: [
      {
        title: "Un réseau d'agences réel",
        description:
          "Les clients peuvent se présenter dans un point CTI identifié pour envoyer, recevoir ou demander une assistance sur leur opération.",
        icon: "agency",
      },
      {
        title: "Des contrôles rassurants",
        description:
          "La vérification d'identité, le code de retrait et les contrôles AML/KYC accompagnent le parcours sans le rendre confus.",
        icon: "shield",
      },
      {
        title: "Des frais plus lisibles",
        description:
          "Le simulateur donne une estimation utile des frais et du montant de retrait avant confirmation finale en agence.",
        icon: "money",
      },
      {
        title: "Un suivi plus simple",
        description:
          "Le code unique sert de repère pour le bénéficiaire et facilite les échanges avec l'équipe CTI en cas de question.",
        icon: "search",
      },
    ],
  },
  rateInfo: {
    eyebrow: "Taux et frais",
    title: "Une estimation utile, sans creer de transaction.",
    description:
      "Les montants affiches servent a preparer l'envoi. Le taux final peut varier selon la devise, le montant et la validation au guichet.",
    points: [
      "Les frais affiches sont indicatifs et confirmes en agence.",
      "Le taux depend de la devise d'envoi et de retrait.",
      "Aucune operation n'est creee depuis la landing page.",
    ],
  },
  agencyLocator: {
    eyebrow: "Agences proches",
    title: "Trouvez rapidement un point de service CTI.",
    description:
      "Recherchez par ville, pays ou nom d'agence pour preparer votre passage.",
    searchPlaceholder: "Ville, pays ou agence",
    mapTitle: "Carte des agences CTI",
    mapDescription: "Selectionnez une agence pour afficher sa position exacte sur la carte.",
    mapSelectedLabel: "Choisir sur la carte",
    mapOpenLabel: "Ouvrir la carte",
    mapUnavailableLabel: "Coordonnees cartographiques indisponibles pour cette agence.",
    mapFrameTitle: "Carte de l'agence",
    selectAgencyLabel: "Afficher sur la carte",
    agencyCountSingular: "agence",
    agencyCountPlural: "agences",
    networkLabel: "points CTI",
    emptyState: "Aucune agence ne correspond a cette recherche.",
    agencies: [
      {
        id: "gombe",
        name: "CTI Gombe",
        address: "Avenue des Entreprises, Gombe",
        city: "Kinshasa",
        country: "RDC",
        phone: "+243 000 000 001",
        hours: "Lun - Sam, 08:30 - 17:30",
        latitude: -4.305,
        longitude: 15.312,
        mapPosition: { x: 56, y: 58 },
      },
      {
        id: "limete",
        name: "CTI Limete",
        address: "Boulevard Lumumba, Limete",
        city: "Kinshasa",
        country: "RDC",
        phone: "+243 000 000 002",
        hours: "Lun - Ven, 09:00 - 17:00",
        latitude: -4.36,
        longitude: 15.34,
        mapPosition: { x: 64, y: 64 },
      },
      {
        id: "bruxelles",
        name: "CTI Bruxelles",
        address: "Quartier Matonge, Bruxelles",
        city: "Bruxelles",
        country: "Belgique",
        phone: "+32 000 00 00 00",
        hours: "Lun - Sam, 10:00 - 18:00",
        latitude: 50.836,
        longitude: 4.363,
        mapPosition: { x: 42, y: 34 },
      },
    ],
  },
  security: {
    eyebrow: "Securite et conformite",
    title: "Une experience rassurante pour chaque transfert.",
    description:
      "CTI met l'accent sur l'identification, la tracabilite et la confidentialite des operations.",
    visual: {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
      alt: "Poignee de main professionnelle symbolisant la confiance, image illustrative CTI",
      eyebrow: "Controle operationnel",
      title: "Des controles lisibles pour garder la confiance.",
      description:
        "Les informations utiles sont verifiees au bon moment, sans complexifier l'experience client.",
    },
    points: [
      {
        title: "Verification d'identite",
        description: "L'envoi et le retrait s'appuient sur une piece d'identite valide.",
        icon: "check",
      },
      {
        title: "Journalisation",
        description: "Les operations sont suivies pour faciliter le controle et l'assistance.",
        icon: "clock",
      },
      {
        title: "Confidentialite",
        description: "Les donnees clients doivent rester protegees et limitees au besoin metier.",
        icon: "shield",
      },
    ],
  },
  testimonials: {
    eyebrow: "Témoignages",
    title: "Des clients qui recherchent surtout de la clarté.",
    description:
      "Ces exemples illustrent les attentes principales autour de CTI : comprendre les frais, retrouver une agence et retirer avec les bonnes informations.",
    items: [
      {
        quote:
          "La simulation m'aide à préparer le montant avant de passer en agence. Je sais quelles informations vérifier avec le conseiller.",
        name: "Client diaspora",
        role: "Envoi vers Kinshasa",
        location: "Bruxelles",
      },
      {
        quote:
          "Le code de retrait et la pièce d'identité donnent un cadre clair au bénéficiaire. C'est plus simple à expliquer à la famille.",
        name: "Bénéficiaire CTI",
        role: "Retrait en agence",
        location: "Kinshasa",
      },
      {
        quote:
          "Pouvoir chercher une agence par ville avant de se déplacer rend le parcours beaucoup plus pratique, surtout sur mobile.",
        name: "Utilisateur CTI",
        role: "Recherche agence",
        location: "RDC",
      },
    ],
  },
  faq: {
    eyebrow: "Aide",
    title: "Questions frequentes",
    description:
      "Les reponses essentielles pour comprendre les pieces, les codes, les frais et les retraits.",
    items: [
      {
        id: "piece-identite",
        question: "Quelle piece faut-il pour envoyer ou recevoir ?",
        answer:
          "Une piece d'identite valide est demandee afin de verifier l'expediteur ou le beneficiaire.",
      },
      {
        id: "code-retrait",
        question: "Comment le beneficiaire retire-t-il l'argent ?",
        answer:
          "Le beneficiaire se presente en agence avec le code unique du transfert et sa piece d'identite.",
      },
      {
        id: "frais",
        question: "Les frais affiches par le simulateur sont-ils definitifs ?",
        answer:
          "Non. Le simulateur affiche une estimation. Les frais finaux sont confirmes au guichet avant validation.",
      },
      {
        id: "delais",
        question: "Combien de temps prend un transfert ?",
        answer:
          "Le delai depend de l'agence, de la devise et des controles necessaires. L'agence confirme le delai au moment de l'operation.",
      },
      {
        id: "devises",
        question: "Quelles devises sont disponibles ?",
        answer:
          "Les devises disponibles peuvent varier selon les agences. Les exemples de la landing sont indicatifs.",
      },
      {
        id: "agence",
        question: "Puis-je commencer un transfert en ligne ?",
        answer:
          "La landing permet de simuler et de trouver une agence. Elle ne cree pas encore de transaction en ligne.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Pret a demarrer ?",
    title: "Preparez votre transfert avant de vous rendre en agence.",
    description:
      "Estimez le montant, verifiez les informations utiles et choisissez le point CTI le plus pratique.",
    primaryCta: { label: "Simuler maintenant", href: "/#simulateur" },
    secondaryCta: { label: "Voir les agences", href: "/#agences" },
  },
  footer: {
    description:
      "CTI accompagne les transferts d'argent avec un service clair, proche des agences et centre sur la confiance.",
    contactTitle: "Contact",
    contactItems: ["Kinshasa, RDC", "Bruxelles, Belgique", "contact@cti.example"],
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Agences", href: "/agences" },
          { label: "Aide", href: "/aide" },
        ],
      },
      {
        title: "Informations",
        links: [
          { label: "A propos", href: "/a-propos" },
          { label: "Contact", href: "/contacts" },
          { label: "Mentions legales", href: "#" },
          { label: "Confidentialite", href: "#" },
        ],
      },
    ],
    legal: "© 2026 CTI RDC. Informations indicatives, sous reserve de validation officielle.",
  },
  publicPages: {
    about: {
      eyebrow: "Notre Histoire",
      title: "CTI RDC : Plus proche de vous, a chaque transfert.",
      description:
        "Depuis notre creation, CTI s'engage a offrir une solution de transfert d'argent fiable, humaine et securisee. Notre mission est de rapprocher les familles et les professionnels a travers un reseau d'agences physiques en RDC et en Belgique, en garantissant transparence et rapidite.",
      visual: {
        src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
        alt: "Equipe CTI RDC souriante",
        eyebrow: "Notre Equipe",
        title: "L'humain au centre",
        description: "Des professionnels devoues a la reussite de vos operations financieres.",
      },
      highlights: [
        {
          title: "Notre Mission",
          description:
            "Faciliter l'envoi et le retrait d'argent avec un parcours clair, humain et controle pour la RDC et la Belgique.",
          icon: "shield",
        },
        {
          title: "Notre Vision",
          description:
            "Devenir le partenaire de confiance numero un pour tous vos transferts internationaux, avec une presence locale forte.",
          icon: "agency",
        },
        {
          title: "Proximite & Equipe",
          description:
            "Une equipe dediee a Kinshasa et Bruxelles, prete a vous accompagner au guichet pour chaque operation.",
          icon: "map",
        },
      ],
      storyBlocks: [
        {
          eyebrow: "Notre Mission",
          title: "Sécuriser et humaniser vos transferts d'argent.",
          description:
            "Chez CTI, notre mission est claire : offrir une expérience de transfert d'argent transparente, rapide et encadrée. Nous mettons un point d'honneur à accompagner chaque client avec clarté, du calcul des frais jusqu'au retrait au guichet.",
        },
        {
          eyebrow: "Notre Vision",
          title: "Le pont financier de confiance entre l'Europe et la RDC.",
          description:
            "Nous aspirons à devenir la référence absolue pour la diaspora et nos partenaires. Une institution bâtie sur la confiance, qui relie les réalités locales congolaises aux standards financiers internationaux.",
        },
      ],
      team: {
        eyebrow: "Notre Équipe",
        title: "L'humain au cœur de chaque opération CTI.",
        description: "Des professionnels dévoués, formés aux normes de conformité, prêts à vous accompagner.",
        members: [
          {
            name: "Marie Dubois",
            role: "Responsable Agence Bruxelles",
            image: {
              src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
              alt: "Portrait de Marie Dubois",
            },
          },
          {
            name: "Jean-Paul Makambo",
            role: "Directeur des Opérations Kinshasa",
            image: {
              src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
              alt: "Portrait de Jean-Paul Makambo",
            },
          },
          {
            name: "Sophie Kalala",
            role: "Conseillère Clientèle",
            image: {
              src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
              alt: "Portrait de Sophie Kalala",
            },
          },
          {
            name: "Marc Peeters",
            role: "Analyste Conformité",
            image: {
              src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
              alt: "Portrait de Marc Peeters",
            },
          },
        ],
      },
      agencyShowcase: {
        eyebrow: "Nos Agences",
        title: "Des espaces CTI proches, visibles et rassurants.",
        description:
          "Quelques exemples d'agences physiques pensées pour accueillir les clients, vérifier les informations et accompagner les opérations avec sérieux.",
        agencies: [
          {
            name: "CTI Gombe",
            location: "Kinshasa, RDC",
            image: {
              src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900",
              alt: "Intérieur moderne d'une agence de service, image illustrative CTI Gombe",
            },
          },
          {
            name: "CTI Limete",
            location: "Kinshasa, RDC",
            image: {
              src: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&q=80&w=900",
              alt: "Espace d'accueil professionnel, image illustrative CTI Limete",
            },
          },
          {
            name: "CTI Bruxelles",
            location: "Bruxelles, Belgique",
            image: {
              src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=900",
              alt: "Bureaux professionnels lumineux, image illustrative CTI Bruxelles",
            },
          },
          {
            name: "Accueil guichet CTI",
            location: "Réseau CTI",
            image: {
              src: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=900",
              alt: "Accueil client au guichet, image illustrative du réseau CTI",
            },
          },
        ],
      },
      primaryCta: { label: "Trouver une agence", href: "/agences" },
      secondaryCta: { label: "Contacter CTI", href: "/contacts" },
    },
    contact: {
      eyebrow: "Contact",
      title: "Nous sommes a votre ecoute.",
      description:
        "Que ce soit pour une assistance technique, une question sur les frais ou un suivi de transfert, nos equipes a Kinshasa et Bruxelles sont la pour vous aider.",
      visual: {
        src: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1200",
        alt: "Service client au telephone",
        eyebrow: "Assistance client",
        title: "Toujours disponibles",
        description: "Nos conseillers sont la pour repondre a vos questions en temps reel.",
      },
      highlights: [
        {
          title: "Agence Gombe, Kinshasa",
          description: "Avenue des Entreprises. Telephone : +243 000 000 001. Ouvert Lun-Sam.",
          icon: "phone",
        },
        {
          title: "Agence Matonge, Bruxelles",
          description: "Quartier Matonge. Telephone : +32 000 00 00 00. Ouvert Lun-Sam.",
          icon: "agency",
        },
        {
          title: "Support",
          description: "Consultez notre FAQ pour trouver rapidement des reponses sur les pieces d'identite et les delais.",
          icon: "search",
        },
      ],
      primaryCta: { label: "Voir l'aide", href: "/aide" },
      secondaryCta: { label: "Voir les agences", href: "/agences" },
    },
  },
} satisfies PublicLandingContent;
