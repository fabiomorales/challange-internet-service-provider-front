import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${colors.primary700};
  animation: fade 0.8s ease-in-out alternate infinite;

  &:nth-of-type(1) {
    animation-delay: -0.4s;
  }

  &:nth-of-type(2) {
    animation-delay: -0.2s;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;
