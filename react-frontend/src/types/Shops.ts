export interface ShopAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  latitude?: number;
  longitude?: number;
}

export interface ShopSummary {
  novelateId: string;
  name: string;
  services: string[];
  address: ShopAddress;
}

export interface ShopDetails {
  novelateId: string;
  name: string;
  services: string[]; //spec
  address: ShopAddress;
  phoneNumber: string;
  photoUrl: string;
  starRatingAverage: number;
  starRatingCount: number;
  paymentOptions: string[]; // insur
}
