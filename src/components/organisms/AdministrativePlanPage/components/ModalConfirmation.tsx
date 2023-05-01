import { FC, useState } from 'react';
import { useModalProvider } from '../../../../context/modal/ModalProvider';
import { updatePlanService } from '../../../../services/plans/UpdatePlanService';
import { Button, Flex, Typograph } from '../../../atoms';
import { IModalConfirmation } from '../interfaces';
import { deletePlanService } from '../../../../services/plans/DeletePlanService';
import { createPlanService } from '../../../../services/plans/CreatePlanService';

const ModalConfirmation: FC<IModalConfirmation> = ({ id, updatePlan, createPlan, variant }) => {
  const { setModal } = useModalProvider();

  const [buttonLoader, setButtonLoader] = useState<boolean>(false);

  const handleFinally = () => {
    setModal({
      show: false,
      children: undefined,
    });
    setButtonLoader(false);
    window.location.reload();
  };

  const handleCreatePlan = async () => {
    setButtonLoader(true);

    if (createPlan) await createPlanService(createPlan).finally(() => handleFinally());
  };

  const handleUpdatePlan = async () => {
    setButtonLoader(true);

    if (updatePlan) await updatePlanService(updatePlan).finally(() => handleFinally());
  };

  const handleExcludePlan = async () => {
    setButtonLoader(true);

    if (id) await deletePlanService({ id }).finally(() => handleFinally());
  };

  return (
    <Flex flexDirection="column">
      {variant === 'exclude' && (
        <>
          <Typograph type="bodyTextSemiBold" mb={15}>
            Confirme para excluir o plano!
          </Typograph>
          <Button text="Confirmar" isLoading={buttonLoader} disabled={buttonLoader} onClick={handleExcludePlan} />
        </>
      )}
      {variant === 'update' && (
        <>
          <Typograph type="bodyTextSemiBold" mb={15}>
            Confirme para atualizar o plano!
          </Typograph>
          <Button text="Confirmar" isLoading={buttonLoader} disabled={buttonLoader} onClick={handleUpdatePlan} />
        </>
      )}
      {variant === 'include' && (
        <>
          <Typograph type="bodyTextSemiBold" mb={15}>
            Confirme para criar o plano!
          </Typograph>
          <Button text="Confirmar" isLoading={buttonLoader} disabled={buttonLoader} onClick={handleCreatePlan} />
        </>
      )}
    </Flex>
  );
};

export default ModalConfirmation;
