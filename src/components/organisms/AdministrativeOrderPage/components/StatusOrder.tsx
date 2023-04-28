import { FC } from 'react';
import * as S from '../styles';
import { IStatusOrderProps } from '../interfaces';

const StatusOrder: FC<IStatusOrderProps> = ({ status }) => {
  const statusTextCase = {
    IN_PROGRESS: 'Em Progresso',
    DONE: 'Finalizado',
  };

  return <S.StatusOrder status={status}>{statusTextCase[status]}</S.StatusOrder>;
};

export default StatusOrder;
