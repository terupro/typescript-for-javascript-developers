export {};

// 定数アサーション - 再代入を許したくない場合（変数を定数に変換する → 全ての要素をreadonlyにする）

let name = "Teru";
name = "Hase";

let nickname = "Hase" as const;
// nickname = "Hasegawa"; 変更不可

let profile = {
  name: "Teru",
  height: 175,
} as const;

// profile.name = "Hase"; 変更不可
// profile.height = 180;
