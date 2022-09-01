export {};

// 抽象クラス・抽象メソッド - 継承した際、必ず記述しなければいけないように設定する(実装漏れを防げる)

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

class Tiger extends Animal {
  cry() {
    return "grrrr";
  }
}

let tiger = new Tiger();
console.log(tiger.cry());
