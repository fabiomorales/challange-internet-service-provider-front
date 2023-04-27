import { HTMLAttributes } from 'react';
import styled, { DefaultTheme, FlattenInterpolation, ThemeProps, css } from 'styled-components';

import { flexbox, FlexboxProps, layout, space, SpaceProps, LayoutProps } from 'styled-system';

type CustomFlexProps = {
  centered?: boolean;
  gap?: number;
};

export type FlexProps = CustomFlexProps & HTMLAttributes<HTMLDivElement> & FlexboxProps & SpaceProps & LayoutProps;

const Centered = css`
  align-items: center;
  justify-content: center;
`;

const Flex = styled.div<FlexProps>`
  display: flex;

  ${flexbox}
  ${layout}
  ${space}

  ${(props) => (props.centered ? Centered : css``)}
  gap: ${(props) => `${props.gap}px`}
`;

export default Flex;
