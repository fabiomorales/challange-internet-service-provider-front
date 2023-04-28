import { AxiosResponse } from 'axios';
import { http } from '../../base';
import { IDeleteOrderRequest } from './interfaces/request';

export const deleteOrderService = async (params: IDeleteOrderRequest): Promise<AxiosResponse> => {
  const response = await http.delete(`order/${params.id}`);

  return response;
};

export type { IDeleteOrderRequest };
