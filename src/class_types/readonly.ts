export {};

// readonly修飾子 - プロパティを読み取り専用のものにする
class VisaCard {
  constructor(public readonly owner: string) {}
}
let myVisaCard = new VisaCard("Teru");
console.log(myVisaCard.owner);
