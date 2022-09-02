export {};

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// 実体
// ReturnTypeを使った際に、関数であることは約束されているから100%「R」が返ってくる
// infer - 戻り値の型を拾い上げる役割を持つ
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
