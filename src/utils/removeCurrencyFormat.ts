export function removeCurrencyFormat(value: string) {
  const numberValue = value.replace(/[^\d,]/g, '');
  const removedDotNumber = numberValue.replace('.', '');
  const decimalValue = parseFloat(removedDotNumber.replace(',', '.'));
  return decimalValue;
}
