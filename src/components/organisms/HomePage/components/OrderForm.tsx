import { yupResolver } from '@hookform/resolvers/yup';
import { FC, memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useModalProvider } from '../../../../context/modal/ModalProvider';
import { ICreateOrderRequest, createOrderService } from '../../../../services/orders/CreateOrderService';
import { Button, Flex, Typograph } from '../../../atoms';
import { Input } from '../../../molecules';
import * as S from '../styles';

export interface IOrderSubmitParams {
  name: string;
  email: string;
  phone: string;
}

export interface IOrderFormProps {
  planId: string;
}

const OrderForm: FC<IOrderFormProps> = ({ planId }) => {
  const { setModal } = useModalProvider();

  const [buttonLoader, setButtonLoader] = useState<boolean>(false);

  const SuccessMessage = () => {
    return (
      <Flex flexDirection="column">
        <Typograph type="headingsH3SemiBold" color="primary500" mb={15}>
          Formulário enviado co sucesso, aguarde nosso contato!
        </Typograph>
      </Flex>
    );
  };

  const defaultValues: IOrderSubmitParams = {
    email: '',
    name: '',
    phone: '',
  };

  const validationSchema = object().shape({
    name: string().min(3, 'Nome deve ter no minimo 3 letras').required(),
    phone: string().min(14, 'Telefone deve ter no minimo 8 números').required(),
    email: string().email('Email inválido').required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IOrderSubmitParams>({ defaultValues, resolver: yupResolver(validationSchema), mode: 'onBlur' });

  const handleLoginSubmit = async (params: IOrderSubmitParams) => {
    setButtonLoader(true);
    const createOrderRequest: ICreateOrderRequest = {
      planId,
      customerEmail: params.email,
      customerName: params.name,
      customerPhone: params.phone.replace(/\D/g, ''),
    };

    await createOrderService(createOrderRequest).finally(() => {
      reset();
      setButtonLoader(false);
      setModal({ show: true, children: <SuccessMessage /> });
    });
  };

  return (
    <>
      <Typograph type="headingsH3SemiBold" mb={15}>
        Preencha o formulário
      </Typograph>
      <S.Form onSubmit={handleSubmit(handleLoginSubmit)}>
        <Input
          type="text"
          label="Nome"
          {...(errors.name && {
            status: 'error',
            message: errors.name.message,
          })}
          {...register('name')}
        />
        <Input
          type="email"
          label="Email"
          {...(errors.email && {
            status: 'error',
            message: errors.email.message,
          })}
          {...register('email')}
        />
        <Input
          type="tel"
          label="Telefone"
          mask="(99) 99999-9999"
          {...(errors.phone && {
            status: 'error',
            message: errors.phone.message,
          })}
          {...register('phone')}
        />
        <Button text="Enviar" type="submit" isLoading={buttonLoader} disabled={isSubmitting || !isValid} />
      </S.Form>
    </>
  );
};

export default memo(OrderForm);
