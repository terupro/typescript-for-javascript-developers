export {};

// Partial - 特定の型をオプショナルなものに自動変換する
// Required - 特定の型を必須なものに自動変換する

type Profile = {
  name: string;
  age: string;
  zipCode: number;
};

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;
