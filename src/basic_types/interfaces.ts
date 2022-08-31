export {};

// インターフェース - でもオブジェクト型に名前をつけることが出来る

type ObjectType = { name: string; age: number };

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: "Teru",
  age: 20,
};
