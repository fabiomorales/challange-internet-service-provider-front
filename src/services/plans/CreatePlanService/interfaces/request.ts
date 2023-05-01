export interface ICreatePlanRequest {
  name: string;
  price: number;
  speed: number;
  speedType: string;
  bestPlan: boolean;
  benefits: Array<string>;
}
