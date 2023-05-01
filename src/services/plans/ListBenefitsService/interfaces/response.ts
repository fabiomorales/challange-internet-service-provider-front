import { AxiosResponse } from 'axios';

export interface IListBenefits {
  id: string;
  description: string;
  img: string;
  benefitType: string;
}

export interface IListPlansResponse extends AxiosResponse<Array<IListBenefits>> {}
