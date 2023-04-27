import { ReactNode } from 'react';
import { SpaceProps, TypographyProps } from 'styled-system';
import { colors } from '../../../styles/colors';
import StyleGuide from '../../../styles/styleGuide';

type TextAlign = 'center' | 'end' | 'inherit' | 'initial' | 'justify' | 'left' | 'revert' | 'right' | 'start' | 'unset';

type TextDecorationLine =
  | 'none'
  | 'underline'
  | 'overline'
  | 'line-through'
  | 'underline overline'
  | 'underline line-through';

export interface ITypographProps extends SpaceProps, TypographyProps {
  type: keyof (typeof StyleGuide)['typography'];
  as?: keyof JSX.IntrinsicElements;
  color?: keyof typeof colors;
  className?: string;
  cursor?: 'default' | 'pointer';
  textAlign?: TextAlign;
  textDecorationLine?: TextDecorationLine;
  children?: ReactNode;
  onClick?: () => void;
}

export interface ITypographComponent extends Omit<ITypographProps, 'className' | 'children' | 'onClick'> {
  tag: keyof JSX.IntrinsicElements;
}
