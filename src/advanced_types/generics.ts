export {};

// ジェネリクス - 汎用的なクラスやメソッドに特定の型を紐付けるための仕組み

// 2つの関数の実行内容は同じなので、汎用的に使えるようにしたい
// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// ジェネリクスに対応した関数
const echo = <T>(arg: T): T => {
  return arg;
};

// 関数の実行時に型を指定する
console.log(echo<number>(100));
console.log(echo<string>("Hello"));
console.log(echo<boolean>(true));

// ジェネリクスに対応したクラス
class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value; //プロパティを参照する
  }
}

// 関数の実行時に型を指定する
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>("Hello").echo());
console.log(new Mirror<boolean>(true).echo());
