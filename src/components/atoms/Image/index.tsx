import { FC } from 'react';
import { IImageProps } from './interfaces';
import * as S from './styles';

const Image: FC<IImageProps> = ({ ...props }) => {
  return (
    <S.ImageWrapper {...props}>
      <S.Image {...props} />
    </S.ImageWrapper>
  );
};

export default Image;
