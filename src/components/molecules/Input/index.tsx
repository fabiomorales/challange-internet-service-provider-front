import { forwardRef, memo } from 'react';

import { nanoid } from 'nanoid';

import InputBase from './Base';
import InputCheckbox from './Checkbox';
import { InputProps } from './interface';
import * as S from './styles';

const Input = forwardRef<HTMLInputElement, InputProps>(({ id = nanoid(), message, ...rest }, ref): JSX.Element => {
  const getInputComponent = () => {
    if (rest.type === 'checkbox') return <InputCheckbox {...rest} id={id} ref={ref} />;

    return <InputBase {...rest} id={id} ref={ref} />;
  };

  return (
    <S.InputWrapper>
      {getInputComponent()}
      {message && <S.InputMessage $status={rest.status}>{message}</S.InputMessage>}
    </S.InputWrapper>
  );
});

export default Input;
