const formatValue = (value: number): string =>
  Intl.NumberFormat('br-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  ); // TODO

export default formatValue;
