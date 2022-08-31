export {};

// デフォルト引数 - 引数の初期値を指定する

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
