import { FC } from 'react';
import { ICardProps } from './interfaces';
import * as S from './styles';

const Card: FC<ICardProps> = ({ children, className, ...props }) => {
  return (
    <S.Card className={className} flexDirection="column" {...props}>
      {children}
    </S.Card>
  );
};

export default Card;
