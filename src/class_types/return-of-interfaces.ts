export {};

// TypeScriptは単一のクラスしか継承できないが、インターフェースで複数のクラスを継承するようなことはできる

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

// インターフェース - 予め型を定義できるもの
interface Kenja {
  ionazun(): void; //シグネチャ
}
interface Sensi {
  kaengiri(): void;
}

class Jiro implements Kenja, Sensi {
  ionazun(): void {
    console.log("ionazun!!!");
  }
  kaengiri(): void {
    console.log("kaengiri!!!");
  }
}

const jiro = new Jiro();
jiro.ionazun();
