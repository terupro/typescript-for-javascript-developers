export {};

// オーバーロード - 関数を定義するときに同じ名前だけど、引数や戻り値の値が違うもの

// 関数の前に型を宣言する(シグネチャー)
function double(value: number): number;
function double(value: string): string;

// シグネチャーで宣言した関数以外はやってこない - だからany型で良い
function double(value: any): any {
  if (typeof value === "string") {
    return value + value;
  } else {
    return value * 2;
  }
}

console.log(double(100));
console.log(double("Go "));
