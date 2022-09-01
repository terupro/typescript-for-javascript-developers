export {};

// 継承 - クラスの内容を引き継ぐ
// super = 親クラスの同名のメンバー(プロパティ,メソッド)を呼びだす

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name); //親クラスで既に初期化処理している
    this.speed = speed; //Lionクラスで追加したから、ここで初期化処理する
  }
  run(): string {
    const parentMessage = super.run();
    return `${parentMessage} ${this.speed}km/h`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal("Mickey").run());
console.log(new Lion("Simba", 80).run());
