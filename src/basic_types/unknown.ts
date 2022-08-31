export {};

// unknown型 - anyと同じ意味だが、型の審査をしてくれる

const kansu = (): number => 20;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

//　Type Guard - typeofを使うことで、ある特定の型であることを確認しながら実行できる
// 暫定的にunknown型をつけておいて、型を絞っていきながら型を調べていくアプローチ
if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10;
}
