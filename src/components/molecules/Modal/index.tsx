import { FC } from 'react';
import { useModalProvider } from '../../../context/modal/ModalProvider';
import { Button, Flex } from '../../atoms';
import * as S from './styles';

const Modal: FC = () => {
  const { modal, setModal } = useModalProvider();

  return (
    <S.ModalContainer isOpen={modal?.show}>
      <S.ModalContent>
        {modal.show && <Flex flexDirection="column">{modal.children}</Flex>}
        <Button
          mt={15}
          text="Voltar"
          onClick={() => {
            setModal({ ...modal, show: false });
            if (modal.onClick) modal.onClick();
          }}
        />
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
