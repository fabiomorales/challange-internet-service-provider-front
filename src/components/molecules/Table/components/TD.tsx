import { FC } from 'react';
import { ITDProps } from '../interfaces';
import * as S from '../styles';

const TD: FC<ITDProps> = ({ children }) => {
  return <S.TD>{children}</S.TD>;
};

export default TD;
