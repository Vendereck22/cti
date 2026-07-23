import type { PublicLandingContent } from "./types";
import { getWorldCountryOptions } from "./countries";
import { getWorldCurrencyOptions } from "./currencies";

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
    contactPhone: "+243 000 000 001",
    contactEmail: "contact@cti.example",
    mobileMenuLabel: "Ouvrir la navigation",
    navigation: [
      { label: "Accueil", href: "/" },
      { label: "A propos", href: "/a-propos" },
      { label: "Agences", href: "/agences" },
      { label: "Contact", href: "/contacts" },
    ],
    socialLinks: [
      { label: "Facebook", icon: "facebook", shortLabel: "Fb", href: "#" },
      { label: "Instagram", icon: "instagram", shortLabel: "Ig", href: "#" },
      { label: "LinkedIn", icon: "linkedin", shortLabel: "In", href: "#" },
    ],
    primaryCta: { label: "Simuler", href: "/#simulateur" },
    secondaryCta: { label: "Trouver une agence", href: "/#agences" },
  },
  hero: {
    eyebrow: "CTI RDC",
    title: "Envoyez de l'argent avec CTI, simplement et en toute confiance.",
    description:
      "Préparez votre transfert vers vos proches en quelques instants. Simulez le montant, vérifiez les frais indicatifs et retrouvez l'agence CTI la plus proche.",
    primaryCta: { label: "Envoyer vers", href: "/#simulateur" },
    secondaryCta: { label: "Trouver une agence", href: "/#agences" },
    metrics: [
      { value: "RDC + Belgique", label: "Points de service cibles" },
      { value: "Code unique", label: "Retrait securise" },
      { value: "AML/KYC", label: "Controle d'identite" },
    ],
    visual: {
      src: "/images/landing/hero-cti-customer.jpg",
      alt: "Cliente CTI souriante consultant son téléphone, image illustrative originale",
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
    initialCountryCode: "CD",
    countries: getWorldCountryOptions(),
    currencies: getWorldCurrencyOptions(),
    destinations: [
      {
        id: "kinshasa-gombe",
        label: "Kinshasa, Gombe",
        country: "RDC",
        city: "Kinshasa",
        flag: "🇨🇩",
      },
      {
        id: "kinshasa-limete",
        label: "Kinshasa, Limete",
        country: "RDC",
        city: "Kinshasa",
        flag: "🇨🇩",
      },
      {
        id: "bruxelles",
        label: "Bruxelles",
        country: "Belgique",
        city: "Bruxelles",
        flag: "🇧🇪",
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
  transferMethods: {
    title: "Moyens pratiques de transférer de l'argent",
    tabsLabel: "Choisir un parcours de transfert",
    defaultGroupId: "send",
    groups: [
      {
        id: "receive",
        label: "Recevoir de l'argent",
        cards: [
          {
            title: "Retrait d'espèces",
            description:
              "Le bénéficiaire se présente dans une agence CTI avec son code unique et une pièce d'identité valide pour retirer les fonds.",
            icon: "agency",
            actionLabel: "Trouver une agence",
            href: "/agences",
          },
          {
            title: "Code unique de retrait",
            description:
              "Chaque opération est associée à un code de transfert qui facilite la vérification au guichet et le suivi avec l'équipe CTI.",
            icon: "lock",
            actionLabel: "Voir l'aide",
            href: "/aide",
          },
          {
            title: "Accompagnement au guichet",
            description:
              "Nos conseillers expliquent les frais, les délais et les informations utiles avant la confirmation finale de l'opération.",
            icon: "wallet",
            actionLabel: "Contacter CTI",
            href: "/contacts",
          },
        ],
      },
      {
        id: "send",
        label: "Envoyer de l'argent",
        cards: [
          {
            title: "Envoyer de l'argent en ligne",
            description:
              "Préparez votre envoi avec le simulateur CTI : montant, devise, frais indicatifs et agence la plus pratique avant le passage au guichet.",
            icon: "laptop",
            actionLabel: "Simuler un envoi",
            href: "/#simulateur",
          },
          {
            title: "Envoyer avec l'assistance CTI",
            description:
              "Démarrez votre parcours avec les informations essentielles, puis laissez nos conseillers vérifier les pièces et confirmer les frais.",
            icon: "mobile",
            actionLabel: "En savoir plus",
            href: "/aide",
          },
          {
            title: "Envoyer de l'argent en personne",
            description:
              "Rendez-vous dans une agence CTI pour transférer les fonds, confirmer l'identité et obtenir le code unique de retrait.",
            icon: "store",
            actionLabel: "Rechercher des agences",
            href: "/agences",
          },
        ],
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
    title: "Des services CTI conçus pour vos opérations du quotidien.",
    description:
      "Transfert d'argent, opérations mobiles et envois de colis : CTI accompagne les clients avec des solutions simples, lisibles et proches du terrain.",
    actionLabel: "En savoir plus",
    cards: [
      {
        title: "Transfert de fonds vers l'Europe",
        description:
          "Envoyez des fonds vers les points CTI en Europe, notamment Liège et Bruxelles, avec un suivi clair jusqu'à la confirmation.",
        icon: "send",
        href: "/#simulateur",
        image: {
          src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1000",
          alt: "Billets et préparation d'un transfert vers l'Europe, image illustrative CTI",
        },
      },
      {
        title: "Opérations mobiles",
        description:
          "Facilitez vos opérations via les réseaux mobiles courants : M-Pesa, Orange Money et Airtel selon les disponibilités locales.",
        icon: "mobile",
        href: "/contacts",
        image: {
          src: "/images/landing/mobile-cti-phone.png",
          alt: "Téléphone affichant le logo CTI pour les opérations mobiles",
        },
      },
      {
        title: "Service Western Union",
        description:
          "Bénéficiez d'un accompagnement CTI pour les transferts Western Union, les pièces à présenter et les informations de retrait.",
        icon: "money",
        href: "/aide",
        image: {
          src: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=1000",
          alt: "Conseiller accompagnant un client au guichet, image illustrative CTI",
        },
      },
      {
        title: "Transfert de colis",
        description:
          "Préparez l'envoi et la réception de colis avec les informations utiles sur les agences, les contacts et le suivi.",
        icon: "package",
        href: "/agences",
        image: {
          src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
          alt: "Colis préparés pour une expédition, image illustrative CTI",
        },
      },
    ],
  },
  clientTransfers: {
    eyebrow: "Parcours clients",
    title: "Nos clients ont effectué des transferts",
    description:
      "Chaque opération raconte un besoin concret : soutenir une famille, envoyer un montant vers l'Europe, retirer en agence ou préparer un service mobile avec un conseiller CTI.",
    highlights: [
      {
        value: "Europe",
        label: "Liège et Bruxelles comme destinations clés.",
      },
      {
        value: "Mobile money",
        label: "M-Pesa, Orange Money et Airtel selon disponibilité.",
      },
      {
        value: "Agence CTI",
        label: "Un accompagnement humain avant validation.",
      },
    ],
    paragraphs: [
      "Les clients utilisent CTI pour préparer des transferts clairs, avec une estimation lisible et une confirmation finale au guichet. Le parcours reste simple : comprendre le montant, vérifier les frais, puis finaliser avec les informations nécessaires.",
      "Pour les transferts vers l'Europe, CTI met l'accent sur les villes de Liège et Bruxelles afin d'offrir un repère concret aux familles et aux proches qui souhaitent recevoir ou suivre une opération.",
      "Les services mobiles et les transferts de colis complètent l'expérience : le client peut être orienté vers M-Pesa, Orange Money, Airtel ou vers une agence selon le service dont il a besoin.",
    ],
  },
  mobileExperience: {
    eyebrow: "Application CTI",
    title: "Téléchargez l'application CTI et gardez vos transferts sous contrôle",
    description:
      "Préparez vos opérations, consultez les informations utiles et visualisez les étapes clés avant de finaliser votre transfert avec l'équipe CTI.",
    visual: {
      src: "/images/landing/mobile-cti-phone.png",
      alt: "Main touchant un téléphone affichant le logo CTI, visuel illustratif",
      logoSrc: "/images/logo/logo-cti-cropped.png",
      logoAlt: "Logo CTI Congo Trans",
    },
    features: [
      {
        title: "Préparez votre envoi où que vous soyez.",
        icon: "send",
      },
      {
        title:
          "Recevez les informations utiles sur les frais et les taux indicatifs.",
        icon: "bell",
      },
      {
        title: "Suivez votre transfert avec votre code unique.",
        icon: "search",
      },
      {
        title: "Gagnez du temps pour vos opérations régulières.",
        icon: "refresh",
      },
    ],
    primaryCta: { label: "Télécharger l'application", href: "/contacts" },
    storeBadges: [
      {
        label: "Télécharger sur Google Play",
        href: "#",
        imageSrc:
          "https://www.westernunion.com/staticassets/media/google-play-badge-ai.svg",
        imageAlt: "Disponible sur Google Play",
      },
      {
        label: "Télécharger dans l'App Store",
        href: "#",
        imageSrc:
          "https://www.westernunion.com/staticassets/media/AppStore-EN-aligned.svg",
        imageAlt: "Télécharger dans l'App Store",
      },
    ],
    note: "Visuel illustratif de l'expérience mobile CTI.",
  },
  whyChoose: {
    eyebrow: "Pourquoi nous choisir",
    title: "Une solution de transfert pensée pour la confiance et la proximité.",
    description:
      "CTI combine un accompagnement humain, des agences physiques et des contrôles clairs pour rendre chaque opération plus lisible avant le passage au guichet.",
    highlights: [
      {
        value: "Agences identifiées",
        label: "Des points CTI physiques pour orienter et rassurer les clients.",
        icon: "agency",
      },
      {
        value: "Code unique",
        label: "Un repère simple pour le retrait, le suivi et les échanges.",
        icon: "lock",
      },
      {
        value: "Contrôle clair",
        label: "Des vérifications d'identité et de conformité à chaque étape.",
        icon: "shield",
      },
    ],
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
    eyebrow: "Aide CTI",
    title: "Questions fréquentes",
    description:
      "Les réponses essentielles pour comprendre les pièces, les codes, les frais et les retraits avant votre passage en agence.",
    supportTitle: "Assistance claire avant le guichet",
    supportDescription:
      "La FAQ rassemble les points qui reviennent le plus souvent lors de la préparation d'un transfert CTI.",
    supportItems: [
      "Pièce d'identité et vérification",
      "Code unique de retrait",
      "Frais et taux indicatifs",
    ],
    items: [
      {
        id: "piece-identite",
        question: "Quelle pièce faut-il pour envoyer ou recevoir ?",
        answer:
          "Une pièce d'identité valide est demandée afin de vérifier l'expéditeur ou le bénéficiaire.",
      },
      {
        id: "code-retrait",
        question: "Comment le bénéficiaire retire-t-il l'argent ?",
        answer:
          "Le bénéficiaire se présente en agence avec le code unique du transfert et sa pièce d'identité.",
      },
      {
        id: "frais",
        question: "Les frais affichés par le simulateur sont-ils définitifs ?",
        answer:
          "Non. Le simulateur affiche une estimation. Les frais finaux sont confirmés au guichet avant validation.",
      },
      {
        id: "delais",
        question: "Combien de temps prend un transfert ?",
        answer:
          "Le délai dépend de l'agence, de la devise et des contrôles nécessaires. L'agence confirme le délai au moment de l'opération.",
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
          "La landing permet de simuler et de trouver une agence. Elle ne crée pas encore de transaction en ligne.",
      },
    ],
  },
  countryList: {
    eyebrow: "Pays disponibles",
    title: "Envoyer de l'argent à l'étranger avec CTI",
    description:
      "CTI met en avant les destinations prioritaires pour les clients en RDC, en Belgique et dans la diaspora. Les disponibilités finales sont confirmées en agence.",
    countries: [
      {
        code: "CD",
        label: "RDC",
        flag: "🇨🇩",
        description: "Kinshasa et réseau CTI local",
      },
      {
        code: "BE",
        label: "Belgique",
        flag: "🇧🇪",
        description: "Bruxelles et Liège",
      },
      {
        code: "FR",
        label: "France",
        flag: "🇫🇷",
        description: "Diaspora et services Europe",
      },
      {
        code: "CG",
        label: "Congo-Brazzaville",
        flag: "🇨🇬",
        description: "Destination régionale",
      },
      {
        code: "AO",
        label: "Angola",
        flag: "🇦🇴",
        description: "Informations à confirmer",
      },
      {
        code: "CM",
        label: "Cameroun",
        flag: "🇨🇲",
        description: "Parcours indicatif",
      },
      {
        code: "SN",
        label: "Sénégal",
        flag: "🇸🇳",
        description: "Réseau partenaire à confirmer",
      },
      {
        code: "CI",
        label: "Côte d'Ivoire",
        flag: "🇨🇮",
        description: "Disponibilité selon agence",
      },
      {
        code: "MA",
        label: "Maroc",
        flag: "🇲🇦",
        description: "Service indicatif",
      },
      {
        code: "ZA",
        label: "Afrique du Sud",
        flag: "🇿🇦",
        description: "Destination à vérifier",
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
      eyebrow: "Notre histoire",
      title: "CTI RDC : plus proche de vous, à chaque transfert.",
      description:
        "CTI accompagne les familles, la diaspora et les professionnels avec un service de transfert d'argent clair, humain et sécurisé. Notre présence en RDC et en Belgique permet de préparer, vérifier et suivre chaque opération avec sérieux.",
      missionVisionSection: {
        eyebrow: "Mission & vision",
        title: "Une présence construite autour de la confiance.",
        description:
          "CTI développe un service de transfert d'argent qui combine proximité physique, contrôle des informations et accompagnement humain.",
      },
      storyBlocks: [
        {
          eyebrow: "Notre mission",
          title: "Rendre chaque transfert simple, lisible et encadré.",
          description:
            "Nous aidons les clients à préparer leurs opérations, comprendre les informations utiles et finaliser leurs transferts avec un accompagnement clair en agence.",
        },
        {
          eyebrow: "Notre vision",
          title: "Relier durablement la RDC, la Belgique et la diaspora.",
          description:
            "Nous voulons devenir un partenaire de référence pour les familles et les professionnels qui ont besoin d'un service fiable, proche et transparent.",
        },
        {
          eyebrow: "Notre engagement",
          title: "Protéger les clients avec sérieux et confidentialité.",
          description:
            "Chaque opération doit s'appuyer sur une vérification rigoureuse, une information compréhensible et un respect strict des données personnelles.",
        },
      ],
      teamNote:
        "Chaque conseiller CTI est formé pour accueillir, vérifier les informations essentielles et guider le client sans complexifier le parcours.",
      team: {
        eyebrow: "Notre équipe",
        title: "L'humain au cœur de chaque opération CTI.",
        description:
          "Des professionnels formés aux exigences de conformité, prêts à accueillir les clients, vérifier les informations et sécuriser le parcours.",
        members: [
          {
            name: "Marie Dubois",
            role: "Responsable Agence Bruxelles",
            bio: "Elle coordonne l'accueil, la préparation des dossiers et l'accompagnement des clients depuis la Belgique.",
            image: {
              src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
              alt: "Portrait de Marie Dubois",
            },
          },
          {
            name: "Jean-Paul Makambo",
            role: "Directeur des Opérations Kinshasa",
            bio: "Il supervise la qualité des opérations, le suivi des transferts et la cohérence du service en agence.",
            image: {
              src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
              alt: "Portrait de Jean-Paul Makambo",
            },
          },
          {
            name: "Sophie Kalala",
            role: "Conseillère Clientèle",
            bio: "Elle accompagne les clients au guichet avec des explications simples sur les pièces, les frais et le retrait.",
            image: {
              src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
              alt: "Portrait de Sophie Kalala",
            },
          },
          {
            name: "Marc Peeters",
            role: "Analyste Conformité",
            bio: "Il veille au respect des contrôles internes, de la confidentialité et des exigences de conformité CTI.",
            image: {
              src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
              alt: "Portrait de Marc Peeters",
            },
          },
        ],
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Nous sommes à votre écoute.",
      description:
        "Que ce soit pour une assistance technique, une question sur les frais ou un suivi de transfert, nos équipes à Kinshasa et Bruxelles sont là pour vous aider.",
      visual: {
        src: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1200",
        alt: "Service client au téléphone",
        eyebrow: "Assistance client",
        title: "Toujours disponibles",
        description: "Nos conseillers sont là pour répondre à vos questions en temps réel.",
      },
      methodsSection: {
        eyebrow: "Canaux de contact",
        title: "Choisissez le moyen le plus simple pour joindre CTI.",
        description:
          "Appelez, écrivez ou passez en agence selon votre besoin. Chaque canal garde le même objectif : vous orienter rapidement vers la bonne information.",
      },
      contactMethods: [
        {
          title: "Téléphone professionnel",
          description:
            "Pour une question urgente, un suivi de transfert ou une vérification avant le passage en agence.",
          value: "+243 000 000 001",
          href: "tel:+243000000001",
          icon: "phone",
        },
        {
          title: "Email CTI",
          description:
            "Envoyez les détails de votre demande afin que l'équipe puisse préparer une réponse claire.",
          value: "contact@cti.example",
          href: "mailto:contact@cti.example",
          icon: "mail",
        },
        {
          title: "Agences physiques",
          description:
            "Retrouvez une agence CTI pour confirmer les frais, les pièces et les informations du bénéficiaire.",
          value: "Voir les agences",
          href: "/agences",
          icon: "map",
        },
      ],
      officeHours: {
        title: "Horaires et disponibilité",
        description:
          "Les horaires peuvent varier selon la ville et les jours fériés. L'agence confirme toujours les informations finales.",
        rows: [
          { label: "Kinshasa", value: "Lun - Sam, 08:30 - 17:30" },
          { label: "Bruxelles", value: "Lun - Sam, 10:00 - 18:00" },
          { label: "Support email", value: "Réponse selon disponibilité" },
        ],
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
