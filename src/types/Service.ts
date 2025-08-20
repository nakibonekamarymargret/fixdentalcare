export interface CategoricalPrice {
  category: string;
  items: {
    name: string;
    price: string;
  }[];
}

export interface CategoricalProcess {
  category: string;
  items: {
    title: string;
    procedure: string;
  }[];
}

export interface ServiceDescriptionDetails {
  main: string;
  adult?: {
    causes: string[];
    process?: string[]; // simple step list
    categoricalProcess?: CategoricalProcess[]; // new optional category-based steps
    price?: string;
    categoricalPrice?: CategoricalPrice[];
    aftercareAndExpectations?: string[];
  };
  child?: {
    causes: string[];
    process?: string[];
    categoricalProcess?: CategoricalProcess[];
    price?: string;
    categoricalPrice?: CategoricalPrice[];
    aftercareAndExpectations?: string[];
  };
}

export interface Service {
  title: string;
  slug: string;
  image: string;
  introduction: string;
  definition: string;
  servicesProvided?: string[];
  description: ServiceDescriptionDetails;
  howItIsDone: string;
  whyIsItNecessary?: string;
  duration?: string;
  cost?: string;
  moreImages: string[];
  aftercareAndExpectations?: string[];
}
