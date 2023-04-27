import type { ChangeEvent, FocusEvent } from 'react';
import { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import getValueWithMask from './get-value-with-mask';
import { InputProps } from './interface';
import * as S from './style';

const InputBase = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, label, mask, status, suffix, prefix, leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon, ...rest },
    ref
  ): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);
    const withLabel = Boolean(label);
    const withStartBox = Boolean(leftIcon || prefix);
    const withPlaceholder = Boolean(rest.placeholder);
    const [withValue, setWithValue] = useState(Boolean(rest.value));
    const [withFocus, setWithFocus] = useState(false);

    useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setWithValue(Boolean(e.target.value));
      if (mask) e.target.value = getValueWithMask(e.target.value, mask);
      rest.onChange?.(e);
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      setWithFocus(true);
      rest.onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      setWithFocus(false);
      rest.onBlur?.(e);
    };

    const renderLabel = () => {
      if (label)
        return (
          <S.InputLabel htmlFor={id} $withStartBox={withStartBox} $onTop={withValue || withPlaceholder || withFocus}>
            {label}
          </S.InputLabel>
        );
    };

    useEffect(() => {
      const inputRefValue = inputRef?.current?.value;
      if (inputRefValue && !withValue) setWithValue(true);
    }, [withValue]);

    return (
      <S.InputContainer $status={status} $withFocus={withFocus} disabled={rest.disabled}>
        <S.InputBox>
          <S.Input
            {...rest}
            id={id}
            $withLabel={withLabel}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={inputRef}
          />
          {renderLabel()}
        </S.InputBox>
      </S.InputContainer>
    );
  }
);

export default memo(InputBase);
