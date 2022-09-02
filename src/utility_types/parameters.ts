export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("Teru", 20);

// Parameters - 引数の型のみを取り出したい場合（自分が作った型では使わないが、他人が作ったまどろっこしい型を取得するのに向いている）
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["Gloria", 76];
debugProfile(...profile);

// infer - 型推論として「P=引数」を指定しているため、必ず「真」である「P」が返ってくる
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
