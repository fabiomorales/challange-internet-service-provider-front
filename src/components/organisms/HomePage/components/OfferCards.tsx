import { FC, useEffect, useState } from 'react';
import { useModalProvider } from '../../../../context/modal/ModalProvider';
import { listPlansService } from '../../../../services/plans/ListPlansService';
import { IListPlans } from '../../../../services/plans/ListPlansService/interfaces/response';
import { colors } from '../../../../styles/colors';
import { currencyFormat } from '../../../../utils/currencyFormat';
import { Button, Flex, Image, Loading, Typograph } from '../../../atoms';
import * as S from '../styles';
import Apps from './OfferCardsApps';
import Services from './OfferCardsServices';
import OrderForm from './OrderForm';

const OfferCards: FC = () => {
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

  const handleClick = (planId: string) => {
    setModal({
      show: true,
      children: <OrderForm planId={planId} />,
    });
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
      <Flex flexWrap="wrap" gap={30} centered>
        {listPlans?.map((plan, key) => (
          <S.Card key={key} bgColor={plan.bestPlan ? colors.primary100 : undefined}>
            <Flex gap={5} flexDirection="column" centered>
              <Typograph type="headingsH1SemiBold" color="primary500">
                {plan.speed}
              </Typograph>
              <Typograph type="headingsH4Regular" color="tertiary500">
                {plan.speedType}
              </Typograph>
              {plan.bestPlan && (
                <S.Tag>
                  <Image src={'src/assets/images/logo.svg'} size={15} />
                  <Typograph type="smallLabelTextSemiBold" color="tertiary500">
                    Melhor Oferta
                  </Typograph>
                </S.Tag>
              )}
              <Services services={plan.benefits} />
              <Apps apps={plan.benefits} />
            </Flex>

            <Flex gap={5} flexDirection="column" centered width="100%">
              <Typograph type="headingsH3Regular" color="tertiary500" mt={12} mb={12}>
                {currencyFormat(plan.price)} /mês
              </Typograph>
              <Button text="Contrate já" onClick={() => handleClick(plan.id)} />
            </Flex>
          </S.Card>
        ))}
      </Flex>
    </>
  );
};

export default OfferCards;
