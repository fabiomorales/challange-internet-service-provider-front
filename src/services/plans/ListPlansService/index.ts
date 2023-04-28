import { http } from '../../base';
import { IListPlansResponse } from './interfaces/response';

export const listPlansService = async (): Promise<IListPlansResponse> => {
  const response = await http.get('plan');

  return response;
};

export type { IListPlansResponse };
