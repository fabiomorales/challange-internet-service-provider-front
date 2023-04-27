import { forwardRef, memo } from 'react';
import { InputCheckboxProps } from './interface';
import * as S from './styles';

const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(({ id, label, ...rest }, ref) => {
  return (
    <S.InputCheckboxWrapper>
      <S.InputCheckbox {...rest} id={id} ref={ref} />
      <S.InputCheckboxLabelWrapper>
        <S.InputCheckboxLabel htmlFor={id}>{label}</S.InputCheckboxLabel>
      </S.InputCheckboxLabelWrapper>
    </S.InputCheckboxWrapper>
  );
});

export default memo(InputCheckbox);
