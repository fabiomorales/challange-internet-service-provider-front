import { FC } from 'react';
import Loading from '../Loading';
import Typograph from '../Typograph';
import { IButtonProps } from './interfaces';
import * as S from './styles';

const Button: FC<IButtonProps> = ({ ...props }) => {
  return (
    <S.Button {...props}>
      {props.isLoading ? (
        <Loading />
      ) : (
        <Typograph type="labelTextRegular" color={props.disabled ? 'secondary100' : 'primary900'} cursor="pointer">
          {props.text}
        </Typograph>
      )}
    </S.Button>
  );
};

export default Button;
