import { FC } from 'react';
import { ILoadingSpinnerProps } from '../interfaces';
import * as S from '../styles';

const Spinner: FC<ILoadingSpinnerProps> = ({ size }) => {
  return <S.Spinner size={size} />;
};

export default Spinner;
