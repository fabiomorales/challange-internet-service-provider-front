import styled from 'styled-components';
import { IStatusOrderProps } from './interfaces';
import { Table } from '../../molecules';
import { colors } from '../../../styles/colors';

const statusOrderCase = {
  IN_PROGRESS: colors.primary400,
  DONE: colors.tertiary500,
};

export const StatusOrder = styled(Table.TD)<IStatusOrderProps>`
  color: ${({ status }) => statusOrderCase[status]};
  font-weight: bold;
`;
