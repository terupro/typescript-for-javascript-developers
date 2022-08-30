export {};

// 型エイリアス - 型に別名をつけることが出来る

type Mojiretsu = string;

const foo: string = "Hello";
const fooMojiretu: Mojiretsu = "Hello";

type Profile = {
  name: string;
  number: number;
};

const example1: Profile = {
  name: "Teru",
  number: 20,
};

//  typeof で連動して型を指定できる
type Profile2 = typeof example1;
