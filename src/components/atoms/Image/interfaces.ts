import { SizeProps, SpaceProps } from 'styled-system';

export interface IImageWrapperProps extends SpaceProps, SizeProps {}

export interface IImageProps extends IImageWrapperProps {
  src: string;
  alt?: string;
}
