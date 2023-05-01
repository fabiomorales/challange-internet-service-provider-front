export interface IPlan {
  id: string;
  name: string;
  speed: number;
  speedType: string;
  price: number;
  bestPlan: boolean;
}
export interface IUpdatePlanRequest {
  plan: IPlan;
  includeBenefits: Array<string>;
  excludeBenefits: Array<string>;
}
