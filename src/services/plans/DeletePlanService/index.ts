import { AxiosResponse } from 'axios';
import { http } from '../../base';
import { IDeletePlanRequest } from './interfaces/request';

export const deletePlanService = async (params: IDeletePlanRequest): Promise<AxiosResponse> => {
  const response = await http.delete(`plan/${params.id}`);

  return response;
};

export type { IDeletePlanRequest };
