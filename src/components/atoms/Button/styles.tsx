import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { IButtonProps } from './interfaces';
import { space } from 'styled-system';

export const Button = styled.button<IButtonProps>`
  display: flex;
  width: 100%;
  height: 35px;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid ${colors.primary700};
  border-radius: 15px;
  background-color: ${colors.primary400};
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary600};
  }

  &:active {
    background-color: ${colors.primary500};
  }

  &:disabled {
    background-color: ${colors.secondary600};
    border: 1px solid ${colors.secondary800};
  }

  ${space}
`;
