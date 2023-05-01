import { SelectHTMLAttributes } from 'react';

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label: string;
}
