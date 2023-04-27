import { InputHTMLAttributes, HTMLInputTypeAttribute, ReactNode, ChangeEvent } from 'react';

export type StatusType = 'error';

export interface InputBaseProps {
  type?: Exclude<HTMLInputTypeAttribute, 'checkbox' | 'password' | Record<any, any>>;
  label?: string;
  mask?: string;
  status?: StatusType;
  suffix?: string;
  prefix?: string;
  message?: string;
  leftIcon?: ReactNode | null;
  rightIcon?: ReactNode | null;
  onClickLeftIcon?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickRightIcon?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputCheckboxBaseProps {
  type: 'checkbox';
  label: string;
  status?: StatusType;
  message?: string;
}

export interface StyledInputMessageProps {
  $status?: StatusType;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & (InputBaseProps | InputCheckboxBaseProps);
