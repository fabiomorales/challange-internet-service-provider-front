import { ButtonHTMLAttributes, FC } from 'react';
import { SpaceProps } from 'styled-system';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, SpaceProps {
  isLoading?: boolean;
  text: string;
}

export interface IActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, SpaceProps {
  isLoading?: boolean;
  text: string;
}

export interface Subcomponents {
  ActionButton: FC<IActionButtonProps>;
}
