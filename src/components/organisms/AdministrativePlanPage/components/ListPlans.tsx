import { FC, useEffect, useState } from 'react';
import { useModalProvider } from '../../../../context/modal/ModalProvider';
import { listPlansService } from '../../../../services/plans/ListPlansService';
import { IListPlans } from '../../../../services/plans/ListPlansService/interfaces/response';
import { colors } from '../../../../styles/colors';
import { BenefitTypeEnum } from '../../../../utils/constants';
import { currencyFormat } from '../../../../utils/currencyFormat';
import { Flex, Image, Loading, Typograph } from '../../../atoms';
import { IListPlansProps } from '../interfaces';
import * as S from '../styles';
import ModalConfirmation from './ModalConfirmation';
import Apps from './OfferCardsApps';
import Services from './OfferCardsServices';

const ListPlans: FC<IListPlansProps> = ({ setCasePlan }) => {
  const { setModal } = useModalProvider();

  const [listPlans, setListPlans] = useState<Array<IListPlans>>([] as Array<IListPlans>);
  const [spinnerShow, setSpinnerShow] = useState<boolean>(true);

  const getListPlans = async () => {
    const response = await listPlansService();

    if (response.data.length) {
      setListPlans(response.data);
    }

    setSpinnerShow(false);
  };

  const handleClick = (params: { planId?: string; variant: 'exclude' | 'edit' | 'include' }) => {
    if (params.variant === 'include') {
      return setCasePlan({ isEdit: false, isCreate: true });
    }

    const selectedPlan = listPlans.find((plan) => plan.id === params.planId);

    if (params.variant === 'edit' && selectedPlan && Object.keys(selectedPlan).length) {
      setCasePlan({ isEdit: true, isCreate: false, plan: selectedPlan });
    }

    if (params.variant === 'exclude' && selectedPlan && Object.keys(selectedPlan).length) {
      setModal({
        show: true,
        children: <ModalConfirmation variant="exclude" id={params.planId} />,
      });
    }
  };

  useEffect(() => {
    getListPlans();
  }, []);

  if (spinnerShow) {
    return (
      <Flex flex={1}>
        <Loading>
          <Loading.Dot />
        </Loading>
      </Flex>
    );
  }

  return (
    <>
      <Flex flexWrap="wrap" gap={30} justifyContent="center">
        <S.Card>
          <S.EditWrapper position={1} case="include" onClick={() => handleClick({ variant: 'include' })}>
            <Image src="../src/assets/images/include.svg" alt="include icon" />
          </S.EditWrapper>
          <Typograph type="headingsH5SemiBold" color="primary500">
            Adicionar Plano
          </Typograph>
        </S.Card>
        {listPlans?.map((plan, key) => (
          <S.Card key={key} bgColor={plan.bestPlan ? colors.primary100 : undefined}>
            <S.EditWrapper position={1} case="edit" onClick={() => handleClick({ planId: plan.id, variant: 'edit' })}>
              <Image src="../src/assets/images/edit.svg" alt="edit icon" />
            </S.EditWrapper>
            <S.EditWrapper
              position={2}
              case="exclude"
              onClick={() => handleClick({ planId: plan.id, variant: 'exclude' })}
            >
              <Image src="../src/assets/images/remove.svg" alt="remove icon" />
            </S.EditWrapper>
            <Flex gap={5} flexDirection="column" centered>
              <Typograph type="headingsH1SemiBold" color="primary500">
                {plan.speed}
              </Typograph>
              <Typograph type="headingsH4Regular" color="tertiary500">
                {plan.speedType}
              </Typograph>
              {plan.bestPlan && (
                <S.Tag>
                  <Image src={'../src/assets/images/logo.svg'} size={15} />
                  <Typograph type="smallLabelTextSemiBold" color="tertiary500">
                    Melhor Oferta
                  </Typograph>
                </S.Tag>
              )}
              <Services services={plan.benefits} />
              <Services
                services={[
                  { benefitType: BenefitTypeEnum.SERVICE, description: 'Apps de conteúdo:', id: '1', img: 'apps' },
                ]}
              />
              <Apps apps={plan.benefits} variant="default" />
            </Flex>

            <Flex gap={5} flexDirection="column" centered width="100%">
              <Typograph type="headingsH3Regular" color="tertiary500" mt={12} mb={12}>
                {currencyFormat(plan.price)} /mês
              </Typograph>
            </Flex>
          </S.Card>
        ))}
      </Flex>
    </>
  );
};

export default ListPlans;
