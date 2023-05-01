import { yupResolver } from '@hookform/resolvers/yup';
import { FC, memo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { boolean, number, object, string } from 'yup';
import { useModalProvider } from '../../../../context/modal/ModalProvider';
import { ICreatePlanRequest } from '../../../../services/plans/CreatePlanService';
import { listBenefitsService } from '../../../../services/plans/ListBenefitsService';
import { IListBenefits } from '../../../../services/plans/ListBenefitsService/interfaces/response';
import { SpeedTypeEnum } from '../../../../utils/constants';
import { removeCurrencyFormat } from '../../../../utils/removeCurrencyFormat';
import { Button, Flex, Typograph } from '../../../atoms';
import { Input, Select } from '../../../molecules';
import { ICreatePlanFormProps, IUpdatePlanSubmitParams } from '../interfaces';
import * as S from '../styles';
import Apps from './OfferCardsApps';
import Services from './OfferCardsServices';
import ModalConfirmation from './ModalConfirmation';

const CreatePlanForm: FC<ICreatePlanFormProps> = ({ setCasePlan }) => {
  const { setModal } = useModalProvider();

  const [listBenefitRequesting, setListBenefitRequesting] = useState<boolean>(false);
  const [speedTypeSelected, setSpeedTypeSelected] = useState<string>(SpeedTypeEnum.MEGA);
  const [listBenefit, setListBenefit] = useState<Array<IListBenefits>>([] as Array<IListBenefits>);
  const [benefitsToExcludeRequest, setBenefitsToExcludeRequest] = useState<Array<string>>([]);
  const [benefitsToIncludeRequest, setBenefitsToIncludeRequest] = useState<Array<string>>([]);

  const defaultValues: IUpdatePlanSubmitParams = {
    name: '',
    bestPlan: false,
    price: '',
    speed: 0,
  };

  const validationSchema = object().shape({
    name: string().min(3, 'Nome deve ter no minimo 3 letras').required(),
    bestPlan: boolean(),
    price: string().required(),
    speed: number().min(1, 'Velocidade deve ter no minimo 1 número').required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IUpdatePlanSubmitParams>({ defaultValues, resolver: yupResolver(validationSchema), mode: 'onBlur' });

  const handleCreateSubmit = async (params: IUpdatePlanSubmitParams) => {
    const createPlanServiceRequest: ICreatePlanRequest = {
      name: params.name,
      price: removeCurrencyFormat(params.price),
      speed: params.speed,
      speedType: speedTypeSelected,
      bestPlan: params.bestPlan,
      benefits: benefitsToIncludeRequest,
    };
    setModal({
      show: true,
      children: <ModalConfirmation createPlan={createPlanServiceRequest} variant="include" />,
    });
  };

  const listBenefitsSerializer = (props: { checked: boolean; benefitId: string; variant?: 'include' | 'exclude' }) => {
    if (props.variant === 'exclude' && setBenefitsToExcludeRequest && benefitsToExcludeRequest) {
      if (props.checked) {
        setBenefitsToExcludeRequest([...benefitsToExcludeRequest, props.benefitId]);
      }
      if (!props.checked) {
        setBenefitsToExcludeRequest(benefitsToExcludeRequest.filter((benefit) => benefit !== props.benefitId));
      }
    }

    if (props.variant === 'include' && setBenefitsToIncludeRequest && benefitsToIncludeRequest) {
      if (props.checked) {
        setBenefitsToIncludeRequest([...benefitsToIncludeRequest, props.benefitId]);
      }
      if (!props.checked) {
        setBenefitsToIncludeRequest(benefitsToIncludeRequest.filter((benefit) => benefit !== props.benefitId));
      }
    }
  };

  const listBenefits = async () => {
    setListBenefitRequesting(true);
    const listBenefitsResponse = await listBenefitsService().finally(() => setListBenefitRequesting(false));

    if (listBenefitsResponse.data.length) {
      setListBenefit(listBenefitsResponse.data);
    }
  };

  useEffect(() => {
    listBenefits();
  }, []);

  return (
    <S.PlanFormWrapper height={'100%'}>
      <Typograph type="headingsH3SemiBold" mb={30} textAlign="center">
        Criação do Plano
      </Typograph>
      <S.Form onSubmit={handleSubmit(handleCreateSubmit)}>
        <Flex flexDirection="column" gap={15} maxWidth={400} width={'100%'}>
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
            type="text"
            label="Preço"
            isMaskCurrency
            {...(errors.price && {
              status: 'error',
              message: errors.price.message,
            })}
            {...register('price')}
          />
          <Input
            type="number"
            label="Velocidade"
            {...(errors.speed && {
              status: 'error',
              message: errors.speed.message,
            })}
            {...register('speed')}
          />
          <Select
            label="Tipo de velocidade"
            onChange={(event) => setSpeedTypeSelected(event.target.value)}
            options={[SpeedTypeEnum.MEGA, SpeedTypeEnum.GIGA]}
          />
          <Input type="checkbox" label="Melhor Plano" {...register('bestPlan')} />
        </Flex>

        <Flex flexDirection="column">
          <Typograph type="headingsH4SemiBold" mb={15}>
            Serviços
          </Typograph>
          <Services
            listBenefit={listBenefit}
            listBenefitRequesting={listBenefitRequesting}
            variant="including"
            listBenefitsSerializer={listBenefitsSerializer}
          />
          <Typograph type="headingsH4SemiBold" mb={15} mt={15}>
            Apps de conteúdo
          </Typograph>
          <Apps
            listBenefit={listBenefit}
            listBenefitRequesting={listBenefitRequesting}
            variant="including"
            listBenefitsSerializer={listBenefitsSerializer}
          />
        </Flex>
        <Button text="Criar" type="submit" disabled={isSubmitting || !isValid} />
        <Button
          text="Cancelar"
          type="reset"
          onClick={() => setCasePlan({ isEdit: false, isCreate: false, plan: undefined })}
          mb={30}
        />
      </S.Form>
    </S.PlanFormWrapper>
  );
};

export default memo(CreatePlanForm);
