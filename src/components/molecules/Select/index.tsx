import { FC } from 'react';
import { ISelectProps } from './interfaces';
import * as S from './styles';

const Select: FC<ISelectProps> = ({ options, label, ...rest }) => (
  <S.SelectWrapper>
    <S.Select {...rest}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </S.Select>
    <S.SelectLabel>{label}</S.SelectLabel>
  </S.SelectWrapper>
);

export default Select;
