import styled from 'styled-components';
import { size, space } from 'styled-system';
import { IImageProps, IImageWrapperProps } from './interfaces';

export const ImageWrapper = styled.span<IImageWrapperProps>`
  ${size}
  align-self: center;
  height: auto;
`;

export const Image = styled.img<IImageProps>`
  display: flex;
  max-width: 100%;
  height: auto;
`;
