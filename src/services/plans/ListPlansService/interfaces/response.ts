import { AxiosResponse } from 'axios';

export interface IListBenefits {
  id: string;
  description: string;
  img: string;
  benefitType: string;
}

export interface IListPlans {
  id: string;
  name: string;
  speed: number;
  speedType: string;
  price: number;
  bestPlan: boolean;
  benefits: Array<IListBenefits>;
}

export interface IListPlansResponse extends AxiosResponse<Array<IListPlans>> {}
