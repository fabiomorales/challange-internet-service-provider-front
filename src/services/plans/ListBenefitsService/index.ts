import { http } from '../../base';
import { IListPlansResponse } from './interfaces/response';

export const listBenefitsService = async (): Promise<IListPlansResponse> => {
  const response = await http.get('benefit');

  return response;
};

export type { IListPlansResponse };
