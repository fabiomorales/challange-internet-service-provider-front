import { FC } from 'react';
import { IListBenefits } from '../../../../services/plans/ListPlansService/interfaces/response';
import { BenefitTypeEnum } from '../../../../utils/constants';
import { Flex, Image } from '../../../atoms';
import { IApps } from '../interfaces';
import * as S from '../styles';
import Services from './OfferCardsServices';

const Apps: FC<Partial<IApps>> = ({ apps }) => {
  const AppList = (apps: Array<IListBenefits>) => {
    const appListSerialized = apps.filter((app) => app.benefitType === BenefitTypeEnum.APP);

    if (appListSerialized.length > 4) {
      appListSerialized.splice(3, appListSerialized.length - 1);
      appListSerialized.push({ benefitType: BenefitTypeEnum.APP, description: 'plus', id: '1', img: 'plus' });

      return appListSerialized.map((app, key) => (
        <S.ImageCard as={'li'} key={key}>
          <Image src={`src/assets/images/${app.img}.png`} alt={app.description} size={50} />
        </S.ImageCard>
      ));
    }

    return appListSerialized.map((app, key) => (
      <S.ImageCard as={'li'} key={key}>
        <Image src={`src/assets/images/${app.img}.png`} alt={app.description} size={50} />
      </S.ImageCard>
    ));
  };

  return (
    <>
      <Services
        services={[{ benefitType: BenefitTypeEnum.SERVICE, description: 'Apps de conteúdo:', id: '1', img: 'apps' }]}
      />
      <Flex gap={5} as={'ul'} centered>
        {apps?.length ? AppList(apps) : null}
      </Flex>
    </>
  );
};

export default Apps;
