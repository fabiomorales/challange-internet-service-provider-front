import { AxiosResponse } from 'axios';

export interface IOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  planName: string;
  status: 'IN_PROGRESS' | 'DONE';
}

export interface IListOrdersResponse extends AxiosResponse<Array<IOrder>> {}
