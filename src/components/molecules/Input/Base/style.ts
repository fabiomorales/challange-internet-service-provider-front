import styled, { css } from 'styled-components';
import {
  StyledInputContainerProps,
  StyledInputLabelProps,
  StyledInputProps,
  StyledInputExtraContentBoxProps,
  StyledInputIconBoxProps,
} from './interface';
import { colors } from '../../../../styles/colors';

export const InputBox = styled.div`
  flex: 1;
  position: relative;
`;

export const InputLabel = styled.label<StyledInputLabelProps>`
  position: absolute;
  top: 50%;
  left: ${({ $withStartBox }) => ($withStartBox ? '0' : '16px')};
  transition: transform 0.2s, font-size 0.2s, opacity 0.2s;

  ${({ $onTop }) => {
    if ($onTop)
      return css`
        font-size: 14px;
        transform: translateY(-135%);
        color: ${colors.secondary400};
      `;

    return css`
      font-size: 16px;
      transform: translateY(-50%);
      color: ${colors.secondary300};
    `;
  }}
`;

export const Input = styled.input<StyledInputProps>`
  all: unset;
  width: 100%;
  border: transparent;
  font-size: 16px;
  box-sizing: border-box;
  font-weight: 400;

  ::placeholder {
    color: ${colors.secondary300};
    font-weight: 300;
  }

  ${({ $withLabel }) => {
    if ($withLabel)
      return css`
        padding: 26px 16px 13px;
      `;

    return css`
      padding: 19px 16px;
    `;
  }}
`;

export const InputContainer = styled.div<StyledInputContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 1px solid transparent;
  transition: border 0.2s, box-shadow 0.1s;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;

      &,
      ${InputLabel} {
        cursor: not-allowed;
      }
    `}
`;

export const InputExtraContentBox = styled.div<StyledInputExtraContentBoxProps>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: color 0.2s;
`;

export const InputLeftBox = styled(InputExtraContentBox)`
  padding-left: 14px;
`;

export const InputRightBox = styled(InputExtraContentBox)`
  padding-right: 14px;
`;

const iconBoxStyle = ({ disabled, $withOnClickIcon }: StyledInputIconBoxProps) =>
  css`
    font-size: 24px;
    ${disabled && 'cursor: not-allowed'};
    ${$withOnClickIcon && 'cursor: pointer'};
  `;

export const InputLeftIconBox = styled(InputLeftBox)`
  ${iconBoxStyle}
`;

export const InputRightIconBox = styled(InputRightBox)`
  ${iconBoxStyle}
`;

const prefixAndSuffixStyle = css`
  font-size: 14px;
  font-weight: 400;
`;

export const InputSuffixBox = styled(InputRightBox)`
  padding-right: 14px;
  ${prefixAndSuffixStyle}
`;

export const InputPrefixBox = styled(InputLeftBox)`
  padding-left: 14px;
  ${prefixAndSuffixStyle}
`;
