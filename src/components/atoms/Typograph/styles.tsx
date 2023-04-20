import styled, { css } from 'styled-components';
import { colors } from '../../../styles/colors';
import StyleGuide from '../../../styles/styleGuide';
import { ITypographComponent } from './interfaces';

export const TypographComponent = styled('h1').attrs<ITypographComponent>(({ tag, as }) => ({
  as: as ? as : tag,
}))<ITypographComponent>`
  ${({
    cursor = 'default',
    textAlign = 'left',
    color = 'textBase',
    type = 'headingsH1Regular',
    mt = 0,
    mb = 0,
    ml = 0,
    mr = 0,
  }) => css`
    font-family: ${StyleGuide.typography[type].fontFamily};
    font-size: ${StyleGuide.typography[type].fontSize};
    font-weight: ${StyleGuide.typography[type].fontWeight};
    line-height: ${StyleGuide.typography[type].lineHeight};
    color: ${colors[color!]};
    margin: ${`${mt}px ${mr}px ${mb}px ${ml}px`};
    text-align: ${textAlign};
    cursor: ${cursor};
  `}
`;
