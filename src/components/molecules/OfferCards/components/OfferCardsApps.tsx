import { FC } from 'react';
import { Image } from '../../../atoms';
import { IApps } from '../interfaces';
import * as S from '../styles';

const Apps: FC<Partial<IApps>> = ({ description, image }) => {
  return (
    <S.ImageCard as={'li'}>
      <Image src={`src/assets/images/${image}.png`} alt={description} size={50} />
    </S.ImageCard>
  );
};

export default Apps;
