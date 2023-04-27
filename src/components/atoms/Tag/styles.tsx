import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 16px;
  border: 1px solid ${colors.primary600};
  border-radius: 30px;
  gap: 5px;
`;
