import styled from 'styled-components';
import { Flex } from '../../atoms';
import { colors } from '../../../styles/colors';

export const ButtonWrapper = styled(Flex)`
  width: max-content;
  flex-wrap: wrap;
  padding: 30px;
  gap: 15px;
  background-color: ${colors.primary200};
  border-radius: 10px;
`;
