export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

// Partialの実態 - 既存のUtility型を自分でもカスタマイズできる
// Mapped型 - 1つずつプロパティを取り出して、評価して、新たに別のオブジェクトを生成する

// T=Profile, P=Profileのプロパティ
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type OptionalProfile = Optional<Profile>;
