import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const StyledMenu = styled.nav`
  display: flex;
  width: 100%;
  min-height: 40px;
  background-color: ${colors.primary200};
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledMenuItem = styled.li`
  display: flex;
  padding: 10px;
  position: relative;
  cursor: pointer;
`;
