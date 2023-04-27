import { FC } from 'react';
import { colors } from '../../../styles/colors';
import { currencyFormat } from '../../../utils/currencyFormat';
import { Button, Flex, Image, Typograph } from '../../atoms';
import Apps from './components/OfferCardsApps';
import Benefits from './components/OfferCardsBenefits';
import { IPlanosResponse } from './interfaces';
import * as S from './styles';

const planosResponse: Array<IPlanosResponse> = [
  {
    id: 1,
    name: '200 Mega',
    velocity: 200,
    unitType: 'Mega',
    price: 99,
    bestPlan: false,
    benefits: [
      {
        id: 1,
        description: 'Super Wi-Fi 6',
        image: 'wifi',
      },
      {
        id: 2,
        description: 'Instalação grátis',
        image: 'installation',
      },
      {
        id: 3,
        description: '200 Megas de download',
        image: 'download',
      },
      {
        id: 4,
        description: '30 Megas de upload',
        image: 'upload',
      },
    ],
    apps: [
      {
        id: 1,
        description: 'Paramount',
        image: 'paramount',
      },
      {
        id: 2,
        description: 'McAfee',
        image: 'mcafee',
      },
      {
        id: 3,
        description: 'Bit Trainers',
        image: 'bit-trainers',
      },
    ],
  },
  {
    id: 2,
    name: '400 Mega',
    velocity: 400,
    unitType: 'Mega',
    price: 149.99,
    bestPlan: true,
    benefits: [
      {
        id: 1,
        description: 'Super Wi-Fi 6',
        image: 'wifi',
      },
      {
        id: 2,
        description: 'Instalação grátis',
        image: 'installation',
      },
      {
        id: 5,
        description: '400 Megas de download',
        image: 'download',
      },
      {
        id: 6,
        description: '100 Megas de upload',
        image: 'upload',
      },
    ],
    apps: [
      {
        id: 1,
        description: 'Paramount',
        image: 'paramount',
      },
      {
        id: 2,
        description: 'McAfee',
        image: 'mcafee',
      },
      {
        id: 3,
        description: 'Bit Trainers',
        image: 'bit-trainers',
      },
      {
        id: 4,
        description: 'Skeelo',
        image: 'skeelo',
      },
    ],
  },
  {
    id: 3,
    name: '1 Giga',
    velocity: 1,
    unitType: 'Giga',
    price: 99,
    bestPlan: false,
    benefits: [
      {
        id: 1,
        description: 'Super Wi-Fi 6',
        image: 'wifi',
      },
      {
        id: 2,
        description: 'Instalação grátis',
        image: 'installation',
      },
      {
        id: 7,
        description: '1 Giga de download',
        image: 'download',
      },
      {
        id: 8,
        description: '400 Megas de upload',
        image: 'upload',
      },
    ],
    apps: [
      {
        id: 1,
        description: 'Paramount',
        image: 'paramount',
      },
      {
        id: 2,
        description: 'McAfee',
        image: 'mcafee',
      },
      {
        id: 3,
        description: 'Bit Trainers',
        image: 'bit-trainers',
      },
    ],
  },
];

const OfferCards: FC = () => {
  return (
    <Flex flexWrap="wrap" gap={30}>
      {planosResponse.map((plan, key) => (
        <S.Card key={key} bgColor={plan.bestPlan ? colors.primary100 : undefined}>
          <Flex gap={5} flexDirection="column" centered>
            <Typograph type="headingsH1SemiBold" color="primary500">
              {plan.velocity}
            </Typograph>
            <Typograph type="headingsH4Regular" color="tertiary500">
              {plan.unitType}
            </Typograph>
            {plan.bestPlan && (
              <S.Tag>
                <Image src={'src/assets/images/logo.svg'} size={15} />
                <Typograph type="smallLabelTextSemiBold" color="tertiary500">
                  Melhor Oferta
                </Typograph>
              </S.Tag>
            )}
            <Flex gap={5} as={'ul'} flexDirection="column" centered>
              {plan.benefits.map((benefit, key) => (
                <Benefits key={key} description={benefit.description} image={benefit.image} />
              ))}
            </Flex>
          </Flex>

          <Flex gap={5} flexDirection="column" centered>
            <Benefits key={key} description={'Apps de conteúdo:'} image={'apps'} />
            <Flex gap={5} as={'ul'} centered>
              {plan.apps.map((app, key) => (
                <Apps key={key} description={app.description} image={app.image} />
              ))}
            </Flex>
            <Typograph type="headingsH3Regular" color="tertiary500" mt={12} mb={12}>
              {currencyFormat(plan.price)} /mês
            </Typograph>
            <Button text="Contrate já" />
          </Flex>
        </S.Card>
      ))}
    </Flex>
  );
};

export default OfferCards;
