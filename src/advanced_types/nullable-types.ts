export {};

// どうしても具体的な値が指定できない場合（nullを許容できるようにしたい） - ユニオン型を使用しよう！！

let profile: { name: string; age: number | null } = {
  name: "Teru",
  age: null,
};
