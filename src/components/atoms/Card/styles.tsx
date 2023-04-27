import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import Flex from '../Flex';
import { ICardProps } from './interfaces';

export const Card = styled(Flex)<ICardProps>`
  padding: 16px;
  border: 1px solid ${colors.primary600};
  border-radius: 25px;
  background-color: ${(props) => props.bgColor};
`;
