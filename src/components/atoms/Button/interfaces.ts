import { ButtonHTMLAttributes } from 'react';
import { SpaceProps } from 'styled-system';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, SpaceProps {
  isLoading?: boolean;
  text: string;
}
