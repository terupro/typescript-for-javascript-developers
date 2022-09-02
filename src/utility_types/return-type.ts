export {};

// ReturnType - 関数の戻り値の型を返してくれるもの
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

function plus(a: number, b: number): ReturnTypeFromAdd {
  return a + b;
}

console.log(plus(1, 2));
