export interface IBenefits {
  id: number;
  description: string;
  image: string;
}

export interface IApps {
  id: number;
  description: string;
  image: string;
}

export interface IPlanosResponse {
  id: number;
  name: string;
  velocity: number;
  unitType: string;
  price: number;
  bestPlan: boolean;
  benefits: Array<IBenefits>;
  apps: Array<IApps>;
}
