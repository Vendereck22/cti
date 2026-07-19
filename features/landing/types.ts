export type LandingIconName =
  | "agency"
  | "arrow"
  | "check"
  | "clock"
  | "lock"
  | "map"
  | "money"
  | "phone"
  | "search"
  | "shield"
  | "send"
  | "wallet";

export interface LandingSeoContent {
  title: string;
  description: string;
}

export interface LandingLink {
  label: string;
  href: string;
}

export interface LandingHeaderContent {
  companyName: string;
  logoLabel: string;
  logoDescription: string;
  mobileMenuLabel: string;
  navigation: LandingLink[];
  primaryCta: LandingLink;
  secondaryCta: LandingLink;
}

export interface LandingMetric {
  value: string;
  label: string;
}

export interface LandingImageContent {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export interface LandingHeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: LandingLink;
  secondaryCta: LandingLink;
  metrics: LandingMetric[];
  visual: LandingImageContent;
}

export interface CurrencyOption {
  code: string;
  label: string;
}

export interface DestinationOption {
  id: string;
  label: string;
  country: string;
  city: string;
}

export interface CurrencyRate {
  sourceCurrency: string;
  targetCurrency: string;
  rate: number;
  fixedFee: number;
  percentageFee: number;
  updatedAtLabel: string;
}

export interface RateEstimateInput {
  amount: number;
  sourceCurrency: string;
  targetCurrency: string;
}

export interface RateEstimate {
  input: RateEstimateInput;
  convertedAmount: number;
  fee: number;
  rate: number;
  total: number;
}

export interface RateEstimatorContent {
  badge: string;
  title: string;
  description: string;
  amountLabel: string;
  sourceCurrencyLabel: string;
  targetCurrencyLabel: string;
  destinationLabel: string;
  resultLabel: string;
  feeLabel: string;
  rateLabel: string;
  totalLabel: string;
  submitLabel: string;
  sameCurrencyLabel: string;
  unavailableRateLabel: string;
  legalNote: string;
  initialAmount: number;
  initialSourceCurrency: string;
  initialTargetCurrency: string;
  initialDestinationId: string;
  currencies: CurrencyOption[];
  destinations: DestinationOption[];
  rates: CurrencyRate[];
}

export interface TrustProof {
  title: string;
  description: string;
  icon: LandingIconName;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface LandingServiceCard {
  title: string;
  description: string;
  icon: LandingIconName;
  href: string;
}

export interface LandingSectionContent {
  eyebrow?: string;
  title: string;
  description: string;
  visual?: LandingImageContent;
}

export interface RateInfoContent extends LandingSectionContent {
  points: string[];
}

export interface SecurityContent extends LandingSectionContent {
  points: TrustProof[];
}

export interface WhyChooseContent extends LandingSectionContent {
  points: {
    title: string;
    description: string;
    icon: LandingIconName;
  }[];
}

export interface TestimonialContent extends LandingSectionContent {
  items: {
    quote: string;
    name: string;
    role: string;
    location: string;
  }[];
}

export interface Agency {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  hours: string;
  latitude?: number;
  longitude?: number;
  mapPosition?: {
    x: number;
    y: number;
  };
}

export interface AgencyLocatorContent extends LandingSectionContent {
  searchPlaceholder: string;
  mapTitle: string;
  mapDescription: string;
  mapSelectedLabel: string;
  mapOpenLabel: string;
  mapUnavailableLabel: string;
  mapFrameTitle: string;
  selectAgencyLabel: string;
  agencyCountSingular: string;
  agencyCountPlural: string;
  networkLabel: string;
  emptyState: string;
  agencies: Agency[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQContent extends LandingSectionContent {
  items: FAQItem[];
}

export interface FooterContent {
  description: string;
  contactTitle: string;
  contactItems: string[];
  columns: {
    title: string;
    links: LandingLink[];
  }[];
  legal: string;
}

export interface PublicInfoPageContent extends LandingSectionContent {
  highlights: {
    title: string;
    description: string;
    icon: LandingIconName;
  }[];
  storyBlocks?: {
    eyebrow: string;
    title: string;
    description: string;
    image?: LandingImageContent;
  }[];
  team?: {
    eyebrow?: string;
    title: string;
    description: string;
    members: {
      name: string;
      role: string;
      image: LandingImageContent;
    }[];
  };
  agencyShowcase?: {
    eyebrow?: string;
    title: string;
    description: string;
    agencies: {
      name: string;
      location: string;
      image: LandingImageContent;
    }[];
  };
  primaryCta?: LandingLink;
  secondaryCta?: LandingLink;
}

export interface PublicLandingContent {
  seo: LandingSeoContent;
  header: LandingHeaderContent;
  hero: LandingHeroContent;
  estimator: RateEstimatorContent;
  trust: TrustProof[];
  process: LandingSectionContent & {
    steps: ProcessStep[];
  };
  services: LandingSectionContent & {
    actionLabel: string;
    cards: LandingServiceCard[];
  };
  whyChoose: WhyChooseContent;
  rateInfo: RateInfoContent;
  agencyLocator: AgencyLocatorContent;
  security: SecurityContent;
  testimonials: TestimonialContent;
  faq: FAQContent;
  finalCta: LandingSectionContent & {
    primaryCta: LandingLink;
    secondaryCta: LandingLink;
  };
  footer: FooterContent;
  publicPages: {
    about: PublicInfoPageContent;
    contact: PublicInfoPageContent;
  };
}
