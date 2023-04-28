import { FC } from 'react';
import Dot from './components/Dot';
import Spinner from './components/Spinner';
import { ILoadingProps, ISubcomponents } from './interfaces';
import * as S from './styles';

const Loading: FC<ILoadingProps> & ISubcomponents = ({ children }) => {
  return <S.Loading aria-label="loading">{children}</S.Loading>;
};

Loading.Dot = Dot;
Loading.Spinner = Spinner;

export default Loading;
