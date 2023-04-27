import { InputHTMLAttributes } from 'react';
import { InputBaseProps, StatusType } from '../interface';

export type InputProps = InputBaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    id: string;
  };

export interface StyledInputContainerProps {
  $status?: StatusType;
  $withFocus: boolean;
  disabled?: boolean;
}

export interface StyledInputLabelProps {
  $onTop: boolean;
  $withStartBox: boolean;
}

export interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  $withLabel: boolean;
}

export interface StyledInputExtraContentBoxProps {
  $status?: StatusType;
  $withFocus: boolean;
}

export interface StyledInputIconBoxProps {
  $withOnClickIcon: boolean;
  disabled?: boolean;
}
