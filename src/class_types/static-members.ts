export {};

// static修飾子 - クラスのメンバー(プロパティ,メソッド)を静的なものにする

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Teruya";
  static lastName: string = "Hasegawa";

  static work() {
    return `Hey, guys! This is ${this.firstName}!`;
  }
}

// staticの場合、インスタンス化はできない
// let me = new Me();
// console.log(me.isProgrammer);

// staticの場合、直接クラスのメンバーを参照できる
console.log(Me.isProgrammer);
console.log(Me.work());
