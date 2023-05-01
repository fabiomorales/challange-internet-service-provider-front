import { forwardRef, memo } from 'react';
import { InputRadioProps } from '../interface';
import * as S from './styles';

const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(({ label, ...rest }, ref) => {
  return (
    <S.InputCheckboxWrapper>
      <S.InputCheckbox {...rest} ref={ref} />
      <S.InputCheckboxLabelWrapper>
        <S.InputCheckboxLabel>{label}</S.InputCheckboxLabel>
      </S.InputCheckboxLabelWrapper>
    </S.InputCheckboxWrapper>
  );
});

export default memo(InputRadio);
