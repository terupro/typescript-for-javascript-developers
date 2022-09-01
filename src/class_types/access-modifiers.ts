export {};

// アクセス修飾子(public,private,protected) - プロパティに対しての参照を制約する

class Person {
  public name: string; //参照可
  protected age: number; //参照不可(クラス内ではOK)
  protected nationality: string; //参照不可(クラス内と継承先はOK)

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

// 継承
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality); //継承元と同じプロパティを設定する
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person("Taro", 25, "Japan");
console.log(taro.name);
// console.log(taro.age);
// console.log(taro.nationality);
console.log(taro.profile());
