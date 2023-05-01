import { AxiosResponse } from 'axios';
import { http } from '../../base';
import { ICreatePlanRequest } from './interfaces/request';

export const createPlanService = async (params: ICreatePlanRequest): Promise<AxiosResponse> => {
  const response = await http.post('plan', params);

  return response;
};

export type { ICreatePlanRequest };
