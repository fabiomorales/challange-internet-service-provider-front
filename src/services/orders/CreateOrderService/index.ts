import { AxiosResponse } from 'axios';
import { http } from '../../base';
import { ICreateOrderRequest } from './interfaces/request';

export const createOrderService = async (params: ICreateOrderRequest): Promise<AxiosResponse> => {
  const response = await http.post('order', params);

  return response;
};

export type { ICreateOrderRequest };
