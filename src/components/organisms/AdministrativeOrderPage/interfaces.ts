import { IOrder } from '../../../services/orders/ListOrdersService/interfaces/response';

export interface IStatusOrderProps {
  status: 'IN_PROGRESS' | 'DONE';
}

export interface ITableOrderProps {
  listOrders: Array<IOrder>;
}

export interface IModalConfirmation {
  id: string;
  variant: 'finalize' | 'exclude';
}
