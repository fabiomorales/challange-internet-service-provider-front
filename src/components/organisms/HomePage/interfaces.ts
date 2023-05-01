import { IListBenefits } from '../../../services/plans/ListPlansService/interfaces/response';

export interface IApps {
  apps: Array<IListBenefits>;
}

export interface IServices {
  services: Array<IListBenefits>;
}

export interface IOrderSubmitParams {
  name: string;
  email: string;
  phone: string;
}

export interface IOrderFormProps {
  planId: string;
}
