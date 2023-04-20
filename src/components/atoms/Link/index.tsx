import { FC } from 'react';
import { Link as LinkRouterDom } from 'react-router-dom';
import { ILinkProps } from './interfaces';

const Link: FC<ILinkProps> = ({ href, children }) => {
  return <LinkRouterDom to={href}>{children}</LinkRouterDom>;
};

export default Link;
