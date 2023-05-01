import { AxiosResponse } from 'axios';
import { http } from '../../base';
import { IUpdatePlanRequest } from './interfaces/request';

export const updatePlanService = async (params: IUpdatePlanRequest): Promise<AxiosResponse> => {
  const response = await http.put('plan', params);

  return response;
};

export type { IUpdatePlanRequest };
