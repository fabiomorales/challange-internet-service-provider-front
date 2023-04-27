import { maskJs } from 'mask-js';

const getValueWithMask = (initialValue: string, mask: string) => {
  const value = initialValue.replace(/\D/g, '');
  return maskJs(mask, value);
};

export default getValueWithMask;
