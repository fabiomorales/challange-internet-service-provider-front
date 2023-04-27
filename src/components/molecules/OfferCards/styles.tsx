import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Card as CardAtom, Flex, Tag as TagAtom } from '../../atoms';

export const Card = styled(CardAtom)`
  position: relative;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const Tag = styled(TagAtom)`
  position: absolute;
  background-color: ${colors.white};
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageCard = styled(Flex)`
  width: 50px;
  height: 50px;
  padding: 4px;
  border: 1px solid ${colors.primary600};
  border-radius: 5px;
`;
