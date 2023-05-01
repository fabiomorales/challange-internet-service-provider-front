import { FC, useState } from 'react';
import { Layout } from '../../templates';
import CreatePlanForm from './components/CreatePlanForm';
import EditPlanForm from './components/EditPlanForm';
import ListPlans from './components/ListPlans';
import MenuItems from './components/MenuItems';
import { IHandleButtonPlan } from './interfaces';

const AdministrativePlanPage: FC = () => {
  const [editPlan, setCasePlan] = useState<IHandleButtonPlan>({} as IHandleButtonPlan);

  return (
    <Layout title="Gerenciar Planos" menuItem={<MenuItems />}>
      {!editPlan.isEdit && !editPlan.isCreate && <ListPlans setCasePlan={setCasePlan} />}
      {editPlan.isEdit && editPlan.plan && Object.keys(editPlan.plan).length && (
        <EditPlanForm setCasePlan={setCasePlan} plan={editPlan.plan} />
      )}
      {editPlan.isCreate && <CreatePlanForm setCasePlan={setCasePlan} />}
    </Layout>
  );
};

export default AdministrativePlanPage;
