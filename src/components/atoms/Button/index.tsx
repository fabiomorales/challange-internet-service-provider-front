import { FC } from 'react';
import Loading from '../Loading';
import Typograph from '../Typograph';
import ActionButton from './components/Action';
import { IButtonProps, Subcomponents } from './interfaces';
import * as S from './styles';

const Button: FC<IButtonProps> & Subcomponents = ({ ...props }) => {
  return (
    <S.Button {...props}>
      {props.isLoading ? (
        <Loading>
          <Loading.Dot />
        </Loading>
      ) : (
        <Typograph type="labelTextRegular" color={props.disabled ? 'secondary100' : 'primary900'} cursor="pointer">
          {props.text}
        </Typograph>
      )}
    </S.Button>
  );
};

Button.ActionButton = ActionButton;

export default Button;
