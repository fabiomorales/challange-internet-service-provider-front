import { Link as LinkRouterDom } from 'react-router-dom';
import styled from 'styled-components';
import TypographAtom from '../Typograph';
import { colors } from '../../../styles/colors';

export const Link = styled(LinkRouterDom)`
  width: fit-content;
`;

export const Typograph = styled(TypographAtom)`
  &:hover {
    color: ${colors.linkBaseHover};
  }

  &:active {
    color: ${colors.linkBase};
  }
`;
