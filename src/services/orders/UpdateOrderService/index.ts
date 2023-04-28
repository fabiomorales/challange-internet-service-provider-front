import { AxiosResponse } from 'axios';
import { http } from '../../base';
import { IUpdateOrderRequest } from './interfaces/request';

export const updateOrderService = async (params: IUpdateOrderRequest): Promise<AxiosResponse> => {
  const response = await http.put('order', params);

  return response;
};

export type { IUpdateOrderRequest };
