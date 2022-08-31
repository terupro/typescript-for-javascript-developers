export {};

// never型 - 関数の中で例外を起こす場合

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("test");
  console.log({ result });
} catch (err) {
  console.log({ err });
}

// void = 呼び出しに対して返って来る
// never = 何も返ってこない
{
  /*
let foo: void = undefined;
let bar: never = undefined;
let error: never = error("only me!");
*/
}
