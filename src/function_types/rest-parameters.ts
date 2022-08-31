export {};

// レスト引数 - 「...」何個の引数を引き取るか分からない場合

const reducer = (previousValue: number, currentValue: number) => {
  return previousValue + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  // reducer = 配列の足し算をしてくれる関数
  const result = values.reduce(reducer);
  return result;
};

console.log(sum(1, 2, 3, 4, 5));
