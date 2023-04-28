import { FC } from 'react';
import Loading from '../../Loading';
import Typograph from '../../Typograph';
import { IActionButtonProps } from '../interfaces';
import * as S from '../styles';

const ActionButton: FC<IActionButtonProps> = ({ ...props }) => {
  return (
    <S.ActionButton {...props}>
      {props.isLoading ? (
        <Loading>
          <Loading.Dot />
        </Loading>
      ) : (
        <Typograph type="labelTextSemiBold" color={props.disabled ? 'secondary100' : 'primary900'} cursor="inherit">
          {props.text}
        </Typograph>
      )}
    </S.ActionButton>
  );
};

export default ActionButton;
