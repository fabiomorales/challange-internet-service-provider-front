import type { ChangeEvent, FocusEvent } from 'react';
import { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { maskCurrencyChange, regexNumber } from '../../../../utils/regex';
import getValueWithMask from './get-value-with-mask';
import { InputProps } from './interface';
import * as S from './style';

const InputBase = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      mask,
      isMaskCurrency,
      initialCurrencyMask = 'R$ ',
      status,
      suffix,
      prefix,
      leftIcon,
      rightIcon,
      onClickLeftIcon,
      onClickRightIcon,
      ...rest
    },
    ref
  ): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);
    const withLabel = Boolean(label);
    const withStartBox = Boolean(leftIcon || prefix);
    const withPlaceholder = Boolean(rest.placeholder);
    const [withValue, setWithValue] = useState(Boolean(rest.value));
    const [withFocus, setWithFocus] = useState(false);

    useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement);

    const floatToMoney = (num: string) => {
      const number = parseFloat(num);
      return number
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    };

    const handleCurrencyChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      let { value: fieldValue }: { value: string } = event.target;
      fieldValue = fieldValue.replace(regexNumber, '');

      if (fieldValue.length === 1) {
        fieldValue = `0,0${fieldValue}`;
      } else if (fieldValue.length === 2) {
        fieldValue = `0,${fieldValue}`;
      } else if (fieldValue) {
        fieldValue = fieldValue.replace(maskCurrencyChange, '$1.$2');
        fieldValue = floatToMoney(fieldValue);
      }

      fieldValue = `${initialCurrencyMask}${fieldValue}`;

      if (fieldValue === initialCurrencyMask) {
        fieldValue = `${initialCurrencyMask}0,00`;
      }

      return fieldValue;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setWithValue(Boolean(e.target.value));
      if (mask) e.target.value = getValueWithMask(e.target.value, mask);
      if (isMaskCurrency) e.target.value = handleCurrencyChange(e);
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
