import { OrderStautsEnum } from '../../../../utils/constants';

export interface IUpdateOrderRequest {
  id: string;
  status: string;
}
