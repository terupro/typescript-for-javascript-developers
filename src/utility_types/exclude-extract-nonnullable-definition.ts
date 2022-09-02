export {};

// これらの実体について

// Exclude <全体の型, 除外したい型> - 不要な型を除外する
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;

// 実体 - TとUを比較して、真だったらneverを返す｜偽だったらTを返す（ 読めれば良い ）
type Exclude<T, U> = T extends U ? never : T;

// Extract <全体の型, 抽出したい型> - 型を抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// Nonnullable - nullとundifinedを除外する
type NullabelTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullabelTypes>;
