import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';
import { ILoadingSpinnerProps } from './interfaces';

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

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<ILoadingSpinnerProps>`
  display: inline-block;
  width: ${(props) => props.size || '40px'};
  height: ${(props) => props.size || '40px'};
  border-radius: 50%;
  background: ${(props) =>
    `linear-gradient(to right, transparent 50%, ${colors.primary300} 50%),
     linear-gradient(${colors.primary300} 50%, transparent 50%),
     ${colors.primary100}`};
  background-size: 100% 100%, 100% 100%, cover;
  background-position: 0 0, 0 0, center;
  animation: ${spin} 1s ease-in-out infinite;
`;
