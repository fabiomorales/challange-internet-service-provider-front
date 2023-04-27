import { FC, useState } from 'react';
import { IMenuItemProps } from '../interfaces';
import * as S from '../styles';
import { Typograph } from '../../../atoms';

const MenuItem: FC<IMenuItemProps> = ({ label, onClick }) => {
  return (
    <S.StyledMenuItem onClick={onClick}>
      <Typograph type="labelTextSemiBold" color="primary700" cursor="pointer">
        {label}
      </Typograph>
    </S.StyledMenuItem>
  );
};

export default MenuItem;
