export {};

// * 前提条件
// * owner
//   * 所有者
//   * 初期化時に設定できる。
//   * 途中で変更できない。
//   * 参照できる。
// * seacretNumber
//   * 初期化時に設定できる。
//   * 途中で変更できる。
//   * 参照できない。

class MyNumberCard {
  private _owner: string;
  private _seacretNumber: number;
  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._seacretNumber = secretNumber;
  }
  // getter(参照可にするメソッド)
  get owner() {
    return this._owner;
  }
  // setter(変更可にするメソッド)
  set seacretNumber(seacretNumber: number) {
    this._seacretNumber = seacretNumber;
  }
  debugPrint() {
    return `seacretNumber: ${this._seacretNumber}`;
  }
}

// プロパティを「参照」できる
let card = new MyNumberCard("Teru", 123456789);
console.log(card.owner);

// プロパティを「変更」できる(参照はできないからクラス内で行う)
card.seacretNumber = 987654321;
console.log(card.debugPrint());
