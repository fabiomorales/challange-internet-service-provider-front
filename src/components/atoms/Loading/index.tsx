import { FC } from 'react';

import * as S from './styles';

const Loading: FC = () => {
  return (
    <S.Loading aria-label="loading">
      <S.Dot />
      <S.Dot />
      <S.Dot />
    </S.Loading>
  );
};

export default Loading;
