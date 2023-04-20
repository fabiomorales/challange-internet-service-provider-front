import { ReactNode } from 'react';
import StyleGuide from '../../../styles/styleGuide';
import { colors } from '../../../styles/colors';

type TextAlign = 'center' | 'end' | 'inherit' | 'initial' | 'justify' | 'left' | 'revert' | 'right' | 'start' | 'unset';

export interface ITypographProps {
  type: keyof typeof StyleGuide['typography'];
  as?: keyof JSX.IntrinsicElements;
  color?: keyof typeof colors;
  className?: string;
  cursor?: 'default' | 'pointer';
  textAlign?: TextAlign;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  children?: ReactNode;
  onClick?: () => void;
}

export interface ITypographComponent extends Omit<ITypographProps, 'className' | 'children' | 'onClick'> {
  tag: keyof JSX.IntrinsicElements;
}
