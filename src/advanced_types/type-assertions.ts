export {};

// 型アサーション - 型の変換 (左辺に型を指定するのではなく、代入前に型を指定する)

let name: any = "Teru";
let length = (name as string).length; // JSX記法を書く際に1番わかりやすい
// let length = name.length as number;
// let length = (<string>name).length;
