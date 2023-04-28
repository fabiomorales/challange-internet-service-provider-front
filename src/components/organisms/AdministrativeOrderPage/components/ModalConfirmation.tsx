import { FC, useState } from 'react';
import { useModalProvider } from '../../../../context/modal/ModalProvider';
import { deleteOrderService } from '../../../../services/orders/DeleteOrderService';
import { updateOrderService } from '../../../../services/orders/UpdateOrderService';
import { OrderStautsEnum } from '../../../../utils/constants';
import { Button, Flex, Typograph } from '../../../atoms';
import { IModalConfirmation } from '../interfaces';

const ModalConfirmation: FC<IModalConfirmation> = ({ id, variant }) => {
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

  const excludeOrder = async (id: string) => {
    setButtonLoader(true);
    await deleteOrderService({ id }).finally(() => handleFinally());
  };

  const finalizeOrder = async (id: string) => {
    setButtonLoader(true);
    await updateOrderService({ id, status: OrderStautsEnum.DONE }).finally(() => handleFinally());
  };

  return (
    <Flex flexDirection="column">
      {variant === 'exclude' && (
        <>
          <Typograph type="bodyTextSemiBold" mb={15}>
            Confirme para excluir a ordem!
          </Typograph>
          <Button text="Confirmar" isLoading={buttonLoader} disabled={buttonLoader} onClick={() => excludeOrder(id)} />
        </>
      )}
      {variant === 'finalize' && (
        <>
          <Typograph type="bodyTextSemiBold" mb={15}>
            Confirme para concluir a ordem!
          </Typograph>
          <Button text="Confirmar" isLoading={buttonLoader} disabled={buttonLoader} onClick={() => finalizeOrder(id)} />
        </>
      )}
    </Flex>
  );
};

export default ModalConfirmation;
