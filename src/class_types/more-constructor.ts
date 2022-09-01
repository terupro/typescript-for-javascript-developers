export {};

// TypeScriptの裏技機能
// アクセス修飾子をコンストラクタの引数に定義すると、自動で初期化処理を行なってくれる

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person("Teru", 20);
console.log(me);
