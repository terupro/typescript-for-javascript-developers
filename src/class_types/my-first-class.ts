export {};

// クラスの基本 (プロパティ,メソッド,コンストラクタ)

class Person {
  // プロパティの型定義
  name: string;
  age: number;

  // コンストラクタ化(再利用したいプロパティを指定)
  constructor(name: string, age: number) {
    // 引数で受け取った値をPersonクラスのプロパティに指定
    this.name = name;
    this.age = age;
  }

  // メソッド
  profile() {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// new = インスタンスを生成する(コピー)
let taro = new Person("Taro", 25);
console.log(taro.profile());
