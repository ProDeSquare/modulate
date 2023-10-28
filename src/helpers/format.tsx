const format = (n: number): string =>
  n % 1 !== 0 ? n.toFixed(2).toLocaleString() : n.toLocaleString();

export default format;
