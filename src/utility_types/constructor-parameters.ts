export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person("Taro", 25);
console.log(taro);

type PersonType = typeof Person;

// ConstructorParameters - 特定のクラスのコンストラクタの引数を取得する
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ["Teru", 20];
const teru = new Person(...profile);
console.log(teru);

type MyConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;
