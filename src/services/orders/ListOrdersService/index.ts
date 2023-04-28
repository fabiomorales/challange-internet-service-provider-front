import { http } from '../../base';
import { IListOrdersResponse } from './interfaces/response';

export const listOrderService = async (): Promise<IListOrdersResponse> => {
  const response = await http.get('order');

  return response;
};

export type { IListOrdersResponse };
