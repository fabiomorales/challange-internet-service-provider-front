import styled, { css } from 'styled-components';
import { space, typography } from 'styled-system';
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
    textDecorationLine = 'none',
  }) => css`
    font-family: ${StyleGuide.typography[type].fontFamily};
    font-size: ${StyleGuide.typography[type].fontSize};
    font-weight: ${StyleGuide.typography[type].fontWeight};
    line-height: ${StyleGuide.typography[type].lineHeight};
    color: ${colors[color!]};
    text-align: ${textAlign};
    text-decoration-line: ${textDecorationLine};
    cursor: ${cursor};

    ${typography}
    ${space}
  `}
`;
