export {};

// 型の互換性

// anyとstringは互換性がある
let fooCompatible: any;
let barCompatible: string = "TypeScript";

console.log(typeof fooCompatible);
fooCompatible = barCompatible;
console.log(typeof fooCompatible);

// stringとnumberは互換性がない
let fooIncompatible: string;
let barIncompatible: number = 1;

// 同じ型は互換性がある
let fooString: string;
let barString: string = "string";

fooString = barString;

// string型はリテラル型と互換性がある
let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStringLiteral;

// number型はリテラル型と互換性がある
let fooNumber: number;
let fooNumberLiteral: 2002 = 2002;

fooNumber = fooNumberLiteral;

// オブジェクト間の型の互換性はプロパティで判定される
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(20, "Teru");
