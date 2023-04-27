import { FC } from 'react';
import MenuItem from './components/MenuItem';
import { IMenuProps, ISubcomponents } from './interfaces';
import * as S from './styles';

const Menu: FC<IMenuProps> & ISubcomponents = ({ children }) => {
  return <S.StyledMenu>{children}</S.StyledMenu>;
};

Menu.MenuItem = MenuItem;

export default Menu;
