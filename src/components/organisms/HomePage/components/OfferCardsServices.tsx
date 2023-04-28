import { FC } from 'react';
import { BenefitTypeEnum } from '../../../../utils/constants';
import { Flex, Image, Typograph } from '../../../atoms';
import { IServices } from '../interfaces';

const Services: FC<Partial<IServices>> = ({ services }) => {
  return (
    <Flex gap={5} as={'ul'} flexDirection="column" centered>
      {services?.map((service, key) =>
        service.benefitType === BenefitTypeEnum.SERVICE ? (
          <Flex gap={5} as={'li'} key={key}>
            <Image src={`src/assets/images/${service.img}.svg`} alt={service.description} size={20} />
            <Typograph type="bodyTextRegular">{service.description}</Typograph>
          </Flex>
        ) : null
      )}
    </Flex>
  );
};

export default Services;
