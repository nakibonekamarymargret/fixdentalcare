export interface CategoricalPrice {
  category: string;
  items: {
    name: string;
    price: string;
  }[];
}

export interface ServiceDescriptionDetails {
  main: string;
  adult?: {
    causes: string[];
    process: string[];
    price?: string; // Change to optional string
    categoricalPrice?: CategoricalPrice[]; // New optional field for categorical pricing
    aftercareAndExpectations?: string[];
  };
  child?: {
    causes: string[];
    process: string[];
    price?: string; // Change to optional string
    categoricalPrice?: CategoricalPrice[]; // New optional field for categorical pricing
    aftercareAndExpectations?: string[];
  };
}

export interface Service {
  title: string;
  slug: string;
  image: string; // path to main image file
  introduction: string;
  definition: string;
  description: ServiceDescriptionDetails;
  howItIsDone: string;
  whyIsItNecessary ?: string;
  duration?: string;
  cost?: string;
  moreImages: string[];
  aftercareAndExpectations?: string[];
}
