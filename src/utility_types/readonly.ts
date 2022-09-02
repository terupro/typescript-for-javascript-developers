export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "Teru",
  age: 20,
};

me.age++;
console.log(me.age);

// Readonly - 全ての型に[readonly]を付ける
type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "Teru",
  age: 20,
};

// friend.age++; readonlyだから変更不可

// Readonlyの実態
type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
