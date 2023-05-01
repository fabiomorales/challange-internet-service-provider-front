import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SelectWrapper = styled.div`
  display: flex;
  position: relative;
  height: 60px;
  border: 1px solid ${colors.primary900};
  border-radius: 20px;

  font-size: 16px;
  padding: 7px 16px 0;
`;

export const Select = styled.select`
  position: absolute;
  top: 15px;
  left: 12px;
  width: calc(100% - 32px);
  height: 40px;
  border: transparent;
  background-color: transparent;
  font-size: 16px;
  box-sizing: border-box;
  font-weight: 400;
`;

export const SelectLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  color: ${colors.secondary500};
  transition: transform 0.2s ease 0s, font-size 0.2s ease 0s, opacity 0.2s ease 0s;
  font-size: 14px;
  transform: translateY(-135%);
`;
