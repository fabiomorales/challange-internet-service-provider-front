import { Dispatch, SetStateAction } from 'react';
import { IListBenefits, IListPlans } from '../../../services/plans/ListPlansService/interfaces/response';
import { IUpdatePlanRequest } from '../../../services/plans/UpdatePlanService';
import { ICreatePlanRequest } from '../../../services/plans/CreatePlanService';

export interface IApps {
  apps: Array<IListBenefits>;
  listBenefitRequesting: boolean;
  listBenefit: Array<IListBenefits>;
  variant: 'default' | 'editing' | 'including';
  listBenefitsSerializer: (props: { checked: boolean; benefitId: string; variant?: 'include' | 'exclude' }) => void;
}

export interface IServices {
  services: Array<IListBenefits>;
  listBenefitRequesting: boolean;
  listBenefit: Array<IListBenefits>;
  variant: 'default' | 'editing' | 'including';
  listBenefitsSerializer: (props: { checked: boolean; benefitId: string; variant?: 'include' | 'exclude' }) => void;
}

export interface IEditWrapperProps {
  position: number;
  case: 'exclude' | 'edit' | 'include';
}

export interface IUpdatePlanSubmitParams {
  name: string;
  bestPlan: boolean;
  price: string;
  speed: number;
}

export interface IEditPlanFormProps {
  plan: IListPlans;
  setCasePlan: Dispatch<SetStateAction<IHandleButtonPlan>>;
}

export interface ICreatePlanFormProps {
  setCasePlan: Dispatch<SetStateAction<IHandleButtonPlan>>;
}

export interface IHandleButtonPlan {
  isEdit: boolean;
  isCreate: boolean;
  plan?: IListPlans;
}

export interface IListPlansProps {
  setCasePlan: Dispatch<SetStateAction<IHandleButtonPlan>>;
}

export interface IEditPlanProps {
  plan: IListPlans;
}

export interface IModalConfirmation {
  id?: string;
  updatePlan?: IUpdatePlanRequest;
  createPlan?: ICreatePlanRequest;
  variant: 'update' | 'exclude' | 'include';
}
