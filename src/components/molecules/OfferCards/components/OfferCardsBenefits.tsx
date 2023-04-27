import { FC } from 'react';
import { Flex, Image, Typograph } from '../../../atoms';
import { IBenefits } from '../interfaces';

const Benefits: FC<Partial<IBenefits>> = ({ description, image }) => {
  return (
    <Flex gap={5} as={'li'}>
      <Image src={`src/assets/images/${image}.svg`} alt={description} size={20} />
      <Typograph type="bodyTextRegular">{description}</Typograph>
    </Flex>
  );
};

export default Benefits;
