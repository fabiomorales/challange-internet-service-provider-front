import { IListBenefits } from '../../../services/plans/ListPlansService/interfaces/response';

export interface IApps {
  apps: Array<IListBenefits>;
}

export interface IServices {
  services: Array<IListBenefits>;
}

export interface IPlanosResponse {
  id: number;
  name: string;
  velocity: number;
  unitType: string;
  price: number;
  bestPlan: boolean;
  benefits: Array<IListBenefits>;
  apps: Array<IApps>;
}
